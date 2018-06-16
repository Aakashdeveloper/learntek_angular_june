import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { BookComponent } from './book.component'
import { ProductComponent } from "./products/product.component";

@NgModule({
    //Module will come here
    imports:[
        BrowserModule,
        FormsModule
    ],
    //Component & pipe come here
    declarations:[
        AppComponent,
        BookComponent,
        ProductComponent
    ],
    //FirstComponent 
    bootstrap:[
        AppComponent
    ],
    //Service || injectable come here
    providers:[]
})

export class AppModule{}