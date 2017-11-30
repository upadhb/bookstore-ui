
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {} from "http";


@Injectable()
export class HttpServiceService {

  headers: any = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url, this.headers)
      .do(data => console.log('Data retrieved from: ' + url))
      .catch(this.handleError);
  }

  post(url: string, payload: object) {
    return this.http.post(url, payload, this.headers)
      .do(data => console.log('Post request successful'))
      .catch(this.handleError);
  }

   handleError(error: HttpErrorResponse) {
    return Observable.throw(error || 'Error in retrieving response');
  }
}
