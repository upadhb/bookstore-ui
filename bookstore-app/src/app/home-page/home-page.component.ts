import { Component, OnInit } from '@angular/core';

import {tableSettingModal, selectedBooks} from './home-page.model';
import {HomePageService} from "./home-page.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [],
})
export class HomePageComponent implements OnInit {

  bookList: Array<any>;
  selectedBooksList: Array<any> = selectedBooks;
  tableSetting: object = tableSettingModal;
  constructor( private homePageService: HomePageService) { }

  ngOnInit() {
  this.bookList = [];
    this.getBooks();
  }

  getBooks() {
    this.homePageService.getBooks()
      .subscribe( response => {
        this.bookList = response;
      }, error => {
        this.bookList = [];
        console.log(error);
        }
      );
  }

  addedBooks (book: object): void {
    if (this.selectedBooksList.indexOf(book) < 0 ) {
      this.selectedBooksList.push(book);
    }
    console.log(this.selectedBooksList);
    console.log(selectedBooks);
  }

}
