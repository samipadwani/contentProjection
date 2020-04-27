import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonComponentComponent } from './common-component/common-component.component';
import { Child1Component } from './child-1/child-1.component';
import { Child2Component } from './child-2/child-2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CommonComponentComponent, Child1Component, Child2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
