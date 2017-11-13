import { Component, OnInit } from '@angular/core';

import { selectedBooks } from '../home-page/home-page.model';
import {MyBooksService} from "./my-books.service";

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html'
})
export class MyBooksComponent implements OnInit {
  _myBookList: Array<any>;
  _totalAmount: number;
  constructor( private _myBookService: MyBooksService) { }

  ngOnInit() {
    this._myBookList = selectedBooks;
    this._totalAmount = this._myBookService.getTotalForBooks(this._myBookList);
  }

}
