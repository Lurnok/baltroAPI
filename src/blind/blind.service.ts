import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class BlindService {
    private readonly _data : any;

    constructor() {
        this._data = JSON.parse(fs.readFileSync("src/data/blinds.json",'utf-8'))
    }

    get data() : any {
        return this._data;
    }

    getAllBlinds(){
        return this.data;
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
