import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { Logger } from 'nestjs-pino'
import { AppModule } from './app.module'

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

  await app.listen(3000)
  logger.log('Application is running on: http://localhost:3000', 'Bootstrap')
}

void bootstrap()
