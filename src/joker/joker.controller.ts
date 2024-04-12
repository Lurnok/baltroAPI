import { Controller, Get, Param } from '@nestjs/common';
import { JokerService } from './joker.service';

@Controller('joker')
export class JokerController {

    constructor(private jokerService : JokerService){}

    @Get('all')
    getAllJokers(){
        return this.jokerService.getAllJokers()
    }

    @Get('rarity/:rarity')
    getJokersByRarity(@Param() params){
        return this.jokerService.getJokersByRarity(params.rarity)
    }

    @Get(':id')
    getById(@Param() params){
        return this.jokerService.getById(params.id)
    }
}
