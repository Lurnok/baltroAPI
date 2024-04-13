import { Controller, Get, Param } from '@nestjs/common';
import { BlindService } from './blind.service';

@Controller('blind')
export class BlindController {
    constructor(private blindService : BlindService){}

    @Get('all')
    getAllBlinds(){
        return this.blindService.getAllBlinds()
    }
    
    @Get(':id')
    getById(@Param() params){
        return this.blindService.getById(params.id)
    }
}

