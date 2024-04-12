import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class JokerService {
    private readonly _data : any;

    constructor() {
        this._data = JSON.parse(fs.readFileSync("src/data/jokers.json",'utf-8'))
    }

    get data() : any {
        return this._data;
    }

    getAllJokers(){
        return this.data;
    }

    getJokersByRarity(rarity : string){
        if(!(["common","uncommon","rare","legendary"].includes(rarity.toLowerCase()))){
            throw new Error('This rarity does not exist');
        };
        let response = [];
        this.data.forEach(element => {
            if(element.rarity.trim().toLowerCase() === rarity.trim().toLowerCase())
                response.push(element);
        });
        return response;
    }

    getById(id : string){
        if(isNaN(+id)){
            throw new Error('Error : id should be numeric');
        }
        if(parseInt(id) < 1 || parseInt(id) > this.data.length){
            throw new Error('Error : no such Id');
        }
        let response = {};
        this.data.forEach(element => {
            if(element.id === parseInt(id))
                response = element;
        })
        return response;
    }
}
