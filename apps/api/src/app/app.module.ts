import { ApiFeatureConfigModule } from '@jjmusic-ng-nest/api/feature-config';
import { Module } from '@nestjs/common';

@Module({
  imports: [ApiFeatureConfigModule],
  controllers: []
})
export class AppModule {}
