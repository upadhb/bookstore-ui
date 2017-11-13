
import {Injectable} from "@angular/core";
import { Response, Headers} from "@angular/http";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class HttpServiceService {

  header = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url, this.header)
      .do(data => console.log('Data retrieved from: ' + url))
      .catch(this.handleError);
  }

  post(url: string, payload: object) {
    return this.http.post(url, payload, this.header)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

   handleError(error: HttpErrorResponse) {
    return Observable.throw(error || 'Error in retrieving response');
  }
}
