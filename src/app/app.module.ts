import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WcWindowModule } from '../../window';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WcWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
