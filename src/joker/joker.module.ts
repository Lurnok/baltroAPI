import { Module } from '@nestjs/common';
import { JokerController } from './joker.controller';
import { JokerService } from './joker.service';

@Module({
  controllers: [JokerController],
  providers: [JokerService]
})
export class JokerModule {}
