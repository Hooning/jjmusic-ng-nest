import { ApiFeatureConfigModule } from '@jjmusic-ng-nest/api/feature-config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ApiFeatureConfigModule, TypeOrmModule.forRoot()],
  controllers: []
})
export class AppModule {}
