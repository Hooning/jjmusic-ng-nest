import { ApiFeatureConfigModule } from '@jjmusic-ng-nest/api/config/feature-config';
import {
  PostgresConfiguration,
  postgresConfiguration,
} from '@jjmusic-ng-nest/api/config/utils-config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ApiFeatureConfigModule,
    TypeOrmModule.forRootAsync({
      inject: [postgresConfiguration.KEY],
      useFactory: (config: PostgresConfiguration) => {
        return {
          type: 'postgres',
          host: config.host,
          port: +config.port,
          database: config.database,
          username: config.username,
          password: config.password,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
  ],
  controllers: [],
})
export class AppModule {}
