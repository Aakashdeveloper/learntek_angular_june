import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'
import { BookComponent } from './book.component'

@NgModule({
    //Module will come here
    imports:[
        BrowserModule
    ],
    //Component & pipe come here
    declarations:[
        AppComponent,
        BookComponent
    ],
    //FirstComponent 
    bootstrap:[
        AppComponent
    ],
    //Service || injectable come here
    providers:[]
})

export class AppModule{}