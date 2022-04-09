import { Module } from '@nestjs/common';
import { Instructor } from './instructor.entity';

@Module({
  controllers: [],
  providers: [],
  exports: [Instructor],
  imports: [Instructor],
})
export class SharedDataAccessModelsModule {}
