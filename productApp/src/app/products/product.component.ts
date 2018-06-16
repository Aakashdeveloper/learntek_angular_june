import {Component} from '@angular/core';

@Component({
    selector:'prod-comp',
    templateUrl:'./product.component.html'
})

export class ProductComponent{
    title:string="@@@@@@@Movies List@@@@@@@@";
    showTable:boolean=true;
    showImage:boolean=false;
    filterMovies:string;
    movies:any[]=[
        {
            _id: "5ab12612f36d2879268f284a",
            name: "Black Panther",
            language: "ENGLISH",
            rate: 4.5,
            profit:10000,
            type: "Action Adventure Fantasy",
            imageUrl: "https://image.ibb.co/f0hhZc/bp.jpg"
        },
        {
            _id: "5ab12666f36d2879268f2902",
            name: "Death Wish",
            language: "ENGLISH",
            type: "Action Crime Thriller",
            rate: 3.2,
            profit:98000,
            imageUrl: "https://image.ibb.co/gC9PfH/dw.jpg"
        },
        {
            _id: "5ab12678f36d2879268f291d",
            name: "Coco",
            language: "ENGLISH",
            type: "Adventure Animation Family",
            rate: 5,
            profit:7000,
            imageUrl: "https://image.ibb.co/dQwWSx/coco.jpg"
        }
    ]

    toggleImage(): void{
        this.showImage = !this.showImage
    }
}


/*
One Way
--Data binding {{}}
--Property Binding []
--Event Binding ()
Two Way [()]


string ="hiiii" ,"10"
number= 10,10,01
boolean=true/ false
*/