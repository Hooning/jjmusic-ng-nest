import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const postgresConfiguration = registerAs('postgres', () => {
  return {
    url: process.env.PG_URI || 'postgres://localhost:5432',
    database: process.env.PG_DATABASE || 'jjmusic-db',
  };
});

export type PostgresConfiguration = ConfigType<typeof postgresConfiguration>;
export const InjectPostgresConfig = () => Inject(postgresConfiguration);
