import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'addValue'
})

export class AddValue implements PipeTransform{
    transform(value:number){
        if(value<10000){
            value = value + 1000
        }
        return value;
    }
}