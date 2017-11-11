import { Injectable } from '@angular/core';

import { HttpServiceService } from "../shared/shared-services/httpService.service";
import { forEach } from "lodash";

@Injectable()
export class HomePageService {

  constructor( private httpService: HttpServiceService ) {}

  getBooks() {
    const sourceUrl = "../../assets/books.json";
   return this.httpService.get(sourceUrl);
  }
}
