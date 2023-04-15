import { ApiConfigLoadModule } from '@jjmusic-ng-nest/api/shared/util';
import { Module } from '@nestjs/common';

@Module({
  imports: [ApiConfigLoadModule],
  controllers: [],
})
export class AppModule {}
