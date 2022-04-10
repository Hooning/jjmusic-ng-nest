import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const postgresConfiguration = registerAs('postgres', () => {
  return {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    database: process.env.PG_DATABASE || 'jjmusic',
    username: process.env.PG_USERNAME || 'postgres',
    password: process.env.PG_PASSWORD || 'postgres',
  };
});

export type PostgresConfiguration = ConfigType<typeof postgresConfiguration>;
export const InjectPostgresConfig = () => Inject(postgresConfiguration);
