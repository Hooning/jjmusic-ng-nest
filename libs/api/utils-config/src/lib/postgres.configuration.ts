import { Inject } from "@nestjs/common";
import { ConfigType, registerAs } from "@nestjs/config";


export const postgresConfiguration = registerAs('postgres', () => ({
    uri: process.env.POSTGRES_URI || 'postgres://localhost:5432',
    dbName: process.env.POSTGRES_DB_NAME || 'postgres'
}));

export type PostgresConfiguration = ConfigType<typeof postgresConfiguration>;
export const InjectPostgresConfig = () => Inject(postgresConfiguration);