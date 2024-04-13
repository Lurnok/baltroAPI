import { Controller, Get, Param } from '@nestjs/common';
import { DeckService } from './deck.service';

@Controller('deck')
export class DeckController {
    constructor(private deckService : DeckService){}

    @Get('all')
    getAllDecks(){
        return this.deckService.getAllDecks()
    }
    
    @Get(':id')
    getById(@Param() params){
        return this.deckService.getById(params.id)
    }
}

