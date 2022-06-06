import { join } from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as dotenv from 'dotenv';

dotenv.config({
  path: join(
    __dirname,
    '..',
    `/environments/${process.env.NODE_ENV || 'development'}.env`
  ),
});

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [join(__dirname, '/../**/db/migrations/*{.ts,.js}')],
  logging: true,
  cli: {
    migrationsDir: 'apps/api/src/db/migrations',
  },
  ssl: process.env.NODE_ENV !== 'development',
};

export = config;
