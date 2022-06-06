import { ApiConfigLoadModule } from '@jjmusic-ng-nest/api/shared/util';
import { SharedDataAccessModelsModule } from '@jjmusic-ng-nest/shared/data-access/models';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ApiConfigLoadModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService
      ): Promise<TypeOrmModuleOptions> => ({
        ...configService.get('database'),
      }),
    }),
    SharedDataAccessModelsModule,
  ],
  controllers: [],
})
export class AppModule {}
