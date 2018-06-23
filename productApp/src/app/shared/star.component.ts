import { Component, OnChanges,
        Input } from '@angular/core';

@Component({
    selector:'star-comp',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;

    ngOnChanges():void{
        this.starWidth = 86/5 * this.rating
    }
}