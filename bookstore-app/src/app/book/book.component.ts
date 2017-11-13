import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { find, forEach } from 'lodash';

import {selectedBooks, Book, ShowMore} from '../home-page/home-page.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

  _bookId: number;
  _selectedBooksList: Array<any> = selectedBooks;
  _selectedBook: Book = new Book();
  _shoMore: ShowMore = new ShowMore();
  constructor( private _route: ActivatedRoute ) {
  }

  ngOnInit() {
    this._bookId = parseInt(this._route.snapshot.paramMap.get('id'), 0);
    this.getBook();
  }

  getBook() {
    const bookId = this._bookId;
    this._selectedBook = find(this._selectedBooksList, function(book) {
       return book.id === bookId;
    });
  }

  toggleShowMore() {
    this._shoMore.show = !this._shoMore.show;
    if (this._shoMore.show) {
      this._shoMore.label = 'less';
    }else {
      this._shoMore.label = 'more';
    }
  }

}
