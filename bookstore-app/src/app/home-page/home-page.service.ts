import { Injectable } from '@angular/core';

import { HttpServiceService } from "../shared/shared-services/httpService.service";
import { forEach } from "lodash";

@Injectable()
export class HomePageService {
  private _getBooksUrl = "../../assets/books.json";
  constructor( private httpService: HttpServiceService ) {}

  // http call to get book list
  getBooks() {
   return this.httpService.get(this._getBooksUrl);
  }

  // get filtered books
  getFilteredList(searchValue: string, bookList: Array<any>): Array<any> {
   return bookList.filter((book) =>
      book.title.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
  }
}
