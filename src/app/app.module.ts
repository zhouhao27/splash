import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import * as alasql from 'alasql';
import {AppComponent} from "./app.component";
import {Ng2SmartTableModule} from 'ng2-smart-table';

import {XlsComponent } from './xls/xls.component';

@NgModule({
  declarations: [
    AppComponent,
    XlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SmartTableModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
