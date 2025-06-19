import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { Logger } from 'nestjs-pino'
import { AppModule } from './app.module'
import appConfig from './config/app-config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  })

  // Use Pino logger
  app.useLogger(app.get(Logger))

  // เปิด ValidationPipe
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()

  const logger = app.get(Logger)

  await app.listen(appConfig.PORT)
  logger.log(`Application is running on: http://localhost:${appConfig.PORT}`, 'Bootstrap')
}

void bootstrap()
