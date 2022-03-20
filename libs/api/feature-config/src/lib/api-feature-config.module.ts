import {
  appConfiguration,
  postgresConfiguration,
} from '@jjmusic-ng-nest/api/utils-config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfiguration, postgresConfiguration],
    }),
  ],
})
export class ApiFeatureConfigModule {}
