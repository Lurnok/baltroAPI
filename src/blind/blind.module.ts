import { Module } from '@nestjs/common';
import { BlindController } from './blind.controller';
import { BlindService } from './blind.service';

@Module({
  controllers: [BlindController],
  providers: [BlindService]
})
export class BlindModule {}
