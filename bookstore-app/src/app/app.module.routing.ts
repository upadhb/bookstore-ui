import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomePageComponent} from "./home-page/home-page.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {MyBooksComponent} from "./my-books/my-books.component";
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path: 'homePage', pathMatch: 'full', component: HomePageComponent},
  {path: 'myBooks', pathMatch: 'full', component: MyBooksComponent},
  {path: 'myBooks/:id', pathMatch: 'full', component: BookComponent},
  {path: 'contactUs', pathMatch: 'full', component: ContactUsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'homePage'},
  {path: '**', pathMatch: 'full', redirectTo: 'homePage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routableComponents: any[] = [
  HomePageComponent,
  ContactUsComponent,
  MyBooksComponent,
  BookComponent
];
