import { Component } from '@angular/core';

@Component({
    selector:'app-comp',
    template:`<div>
                <h1>This is main Component of ang 5</h1>
                <prod-comp></prod-comp>
                <book-comp></book-comp>
              </div>`
})

export class AppComponent{

}