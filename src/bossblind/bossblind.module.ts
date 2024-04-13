import { Module } from '@nestjs/common';
import { BossblindController } from './bossblind.controller';
import { BossblindService } from './bossblind.service';

@Module({
  controllers: [BossblindController],
  providers: [BossblindService]
})
export class BossblindModule {}
