import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokerModule } from './joker/joker.module';
import { BlindModule } from './blind/blind.module';
import { BossblindModule } from './bossblind/bossblind.module';

@Module({
  imports: [JokerModule, BlindModule, BossblindModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
