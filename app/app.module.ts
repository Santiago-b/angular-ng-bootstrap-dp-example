import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdAlertBasic } from './alert-basic';

@NgModule({
  imports:      [ BrowserModule, NgbModule, FormsModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, NgbdAlertBasic ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

