import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfiguration = registerAs('database', () => {
  return {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: false,
    logging: process.env.NODE_ENV === 'development',
    ssl: process.env.NODE_ENV !== 'development',
  } as TypeOrmModuleOptions;
});

export type DatabaseConfiguration = ConfigType<typeof databaseConfiguration>;
export const InjectPostgresConfig = () => Inject(databaseConfiguration);
