import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html'
})
export class BookTableComponent implements OnInit {
  @Input() bookList: any [];
  @Output() selectedBooks:  EventEmitter<object> = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  addBook (book): void {
    book.added = true;
    this.selectedBooks.emit(book);
  }
}
