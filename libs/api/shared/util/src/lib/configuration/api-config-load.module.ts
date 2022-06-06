import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from '../helper/env.helper';
import { appConfiguration } from './app.configuration';
import { databaseConfiguration } from './database.configuration';

const envFilePath: string = getEnvPath(`${__dirname}/environments`);
console.log('# envFilePath: ', envFilePath);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      load: [appConfiguration, databaseConfiguration],
    }),
  ],
})
export class ApiConfigLoadModule {}
