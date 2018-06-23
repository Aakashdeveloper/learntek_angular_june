import { Pipe, PipeTransform} from '@angular/core';

import { IMovies } from './produc.model';

@Pipe({
    name:'productFilter'
})

export class ProductFilter implements PipeTransform{
    transform(value:IMovies[],filterBy:string){
        filterBy = filterBy ? filterBy.toLowerCase():null;
        return filterBy? value.filter((movies:IMovies) =>
        movies.name.toLowerCase().indexOf(filterBy) !== -1) : value
    }
}