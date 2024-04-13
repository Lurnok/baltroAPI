import { Controller, Get, Param } from '@nestjs/common';
import { BossblindService } from './bossblind.service';

@Controller('bossblind')
export class BossblindController {
    constructor(private bossblindService : BossblindService){}

    @Get('all')
    getAllBosses(){
        return this.bossblindService.getAllBosses()
    }
    
    @Get(':id')
    getById(@Param() params){
        return this.bossblindService.getById(params.id)
    }
}

