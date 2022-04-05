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
          url: config.url,
          database: config.database,
          username: 'root',
          password: 'root',
          entities: [],
          synchronize: true,
        };
      },
    }),
  ],
  controllers: [],
})
export class AppModule {}
