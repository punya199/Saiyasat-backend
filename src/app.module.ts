// src/app.module.ts
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LoggerModule } from 'nestjs-pino'
import appConfig, { validationSchema } from './config/app-config'
import { Survey } from './survey/survey.entity'
import { SurveyModule } from './survey/survey.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ทำให้ config ใช้ได้ทั่วทั้งแอป
      validationSchema: validationSchema, // ใช้ schema สำหรับ validate config
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport:
          process.env.NODE_ENV !== 'production'
            ? {
                target: 'pino-pretty',
                options: {
                  singleLine: true,
                  colorize: true,
                  translateTime: 'UTC:yyyy-mm-dd HH:MM:ss.l',
                  ignore: 'pid,hostname',
                },
              }
            : undefined,
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
        autoLogging: {
          ignore: req => {
            // Ignore health check requests
            const url = req.url
            if (!url) return false

            return (
              url === '/health' ||
              url === '/health/' ||
              url.startsWith('/health?') ||
              url === '/api/health' ||
              url === '/api/health/' ||
              url.startsWith('/api/health?')
            )
          },
        },
        redact: ['req.headers.authorization'],
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: appConfig.DATABASE_HOST, // หรือชื่อ container docker ก็ได้
      port: appConfig.DATABASE_PORT,
      username: appConfig.DATABASE_USER,
      password: appConfig.DATABASE_PASSWORD,
      database: appConfig.DATABASE_NAME,
      ssl: appConfig.DATABASE_SSL ? { rejectUnauthorized: false } : false,
      entities: [Survey],
      migrations: ['dist/migrations/*.js'], // Use compiled JS files in production
      migrationsTableName: 'migrations',
      synchronize: false, // Disabled for production - use migrations instead
      migrationsRun: false, // Don't auto-run migrations
      logging: 'all',
      uuidExtension: 'pgcrypto',
    }),
    SurveyModule,
  ],
})
export class AppModule {}
