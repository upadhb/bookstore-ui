import {Injectable} from "@angular/core";

import { forEach} from "lodash";

@Injectable()
export class MyBooksService {

  getTotalForBooks (booklist: Array<any>): number {
    let total = 0;
    forEach(booklist, function(book) {
      if (book.hasOwnProperty('unitCost')) {
        total += book.unitCost;
      }
    });
    return total;
  }
}
