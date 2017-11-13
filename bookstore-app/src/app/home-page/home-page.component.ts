import { Component, OnInit } from '@angular/core';

import {tableSettingModal, selectedBooks, HomePage} from './home-page.model';
import {HomePageService} from "./home-page.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [],
})
export class HomePageComponent implements OnInit {

  homePage: HomePage = new HomePage();
  tableSetting: object = tableSettingModal;
  _selectedBooks = selectedBooks;

  constructor( private homePageService: HomePageService) {
  }

  ngOnInit() {
    this.homePage.filterBy = '';
    this.homePage.filteredBookList = [];
    this.getBooks();
  }

  // get list of books
  getBooks() {
    this.homePageService.getBooks()
      .subscribe( response => {
        this.homePage.bookList = response;
        this.homePage.filteredBookList = this.homePage.bookList;
        this.homePageService.checkIfBookWasAdded(this.homePage.filteredBookList, this._selectedBooks);
      }, error => {
        this.homePage.filteredBookList = [];
        console.log(error);
        }
      );
  }

  // output from book-table component in caught here and emitted books are added
  addedBooks (book: object): void {
    if (this.homePage.selectedBooksList.indexOf(book) < 0 ) {
      this.homePage.selectedBooksList.push(book);
    }
  }

  // filter when input value changes
  filterBooksList (filterValue: string): void {
    this.homePage.filteredBookList =
      filterValue ? this.homePageService.getFilteredList(filterValue, this.homePage.bookList) : this.homePage.bookList;
  }

}
