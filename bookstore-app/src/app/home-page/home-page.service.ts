import { Injectable } from '@angular/core';

import { HttpServiceService } from "../shared/shared-services/httpService.service";
import { forEach } from "lodash";

@Injectable()
export class HomePageService {
  private _getBooksUrl = "../../assets/books.json";
  constructor( private httpService: HttpServiceService ) {}

  getBooks() {
   return this.httpService.get(this._getBooksUrl);
  }
}
