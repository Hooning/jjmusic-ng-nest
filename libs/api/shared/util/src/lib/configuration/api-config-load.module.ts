import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { getEnvPath } from '../helper/env.helper';
import { appConfiguration } from './app.configuration';

const envFilePath: string = getEnvPath(
  join(__dirname, '/../../..', 'apps/api/src/environments')
);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      load: [appConfiguration],
    }),
  ],
})
export class ApiConfigLoadModule {}
