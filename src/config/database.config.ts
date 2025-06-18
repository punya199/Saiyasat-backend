import { DataSource } from 'typeorm'
import { Survey } from '../survey/survey.entity'
import appConfig from './app-config'

export default new DataSource({
  type: 'postgres',
  host: appConfig.DATABASE_HOST,
  port: appConfig.DATABASE_PORT,
  username: appConfig.DATABASE_USER,
  password: appConfig.DATABASE_PASSWORD,
  database: appConfig.DATABASE_NAME,
  ssl: appConfig.DATABASE_SSL ? { rejectUnauthorized: false } : false,
  entities: [Survey],
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
  synchronize: false, // Important: disable for production
  logging: ['query', 'error'],
})
