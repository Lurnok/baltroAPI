import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokerModule } from './joker/joker.module';

@Module({
  imports: [JokerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
