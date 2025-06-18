# Database Migrations

This directory contains TypeORM migration files for the Saiyasat backend application.

## Available Commands

### Generate Migration
Automatically generate a migration based on entity changes:
```bash
npm run migration:generate src/migrations/MigrationName
```

### Create Empty Migration
Create an empty migration file to write custom SQL:
```bash
npm run migration:create src/migrations/MigrationName
```

### Run Migrations
Execute pending migrations:
```bash
npm run migration:run
```

### Revert Migration
Revert the last executed migration:
```bash
npm run migration:revert
```

### Show Migration Status
Show which migrations have been executed:
```bash
npm run migration:show
```

## Migration Workflow

1. **Development**: Use `synchronize: true` in development for quick prototyping
2. **Production**: Always use `synchronize: false` and migrations for production
3. **Entity Changes**: When you modify entities, generate migrations with `migration:generate`
4. **Custom SQL**: For complex changes, create empty migrations and write custom SQL

## Important Notes

- Always review generated migrations before running them
- Test migrations on a copy of production data
- Keep migrations small and focused
- Never edit a migration that has been committed to version control
- Use descriptive names for your migrations

## Current Configuration

- **Entities**: `src/**/*.entity.ts`
- **Migrations**: `src/migrations/*.ts`
- **Compiled migrations**: `dist/migrations/*.js` (used in production)
- **Migration table**: `migrations`

## Environment Setup

Make sure your `.env` file contains the database configuration:
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_user
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database
DATABASE_SSL=false
``` 