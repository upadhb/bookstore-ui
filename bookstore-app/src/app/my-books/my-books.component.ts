import { Component, OnInit } from '@angular/core';

import { selectedBooks } from '../home-page/home-page.model'

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html'
})
export class MyBooksComponent implements OnInit {
  myBookList: Array<any>;
  constructor() { }

  ngOnInit() {
    this.myBookList = selectedBooks;
  }

}
