import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const appConfiguration = registerAs('app', () => {
  return {
    protocol: process.env.APP_PROTOCOL,
    host: process.env.APP_HOST,
    port: Number(process.env.APP_PORT),
    get domain() {
      return `${this.protocol}://${this.host}:${this.port}`;
    },
  };
});

export type AppConfiguration = ConfigType<typeof appConfiguration>;

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
