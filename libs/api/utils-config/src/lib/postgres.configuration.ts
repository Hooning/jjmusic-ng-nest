import { Inject } from "@nestjs/common";
import { ConfigType, registerAs } from "@nestjs/config";


export const postgresConfiguration = registerAs('postgres', () => ({
    url: process.env.PG_URI || 'postgres://localhost:5432',
    database: process.env.PG_DATABASE || 'postgres'
}));

export type PostgresConfiguration = ConfigType<typeof postgresConfiguration>;
export const InjectPostgresConfig = () => Inject(postgresConfiguration); 