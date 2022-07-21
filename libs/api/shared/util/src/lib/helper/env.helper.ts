import { Logger } from '@nestjs/common';
import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(dest: string): string {
  const env: string | undefined = process.env['NODE' + '_ENV'];
  Logger.log(env, 'NODE_ENV');
  const fallback: string = resolve(`${dest}/.env`);
  const filename: string = env ? `.env.${env}` : '.env.local';
  let filePath: string = resolve(`${dest}/${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  Logger.log(filePath, '.env');

  return filePath;
}
