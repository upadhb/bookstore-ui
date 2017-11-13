import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {AppRoutingModule, routableComponents} from "./app.module.routing";
import {HttpServiceService} from "./shared/shared-services/httpService.service";
import {HomePageService} from "./home-page/home-page.service";
import { BookTableComponent } from './shared/book-table/book-table.component';
import {MyBooksService} from "./my-books/my-books.service";


@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    BookTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule

  ],
  providers: [
    HttpServiceService,
    HomePageService,
    MyBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
