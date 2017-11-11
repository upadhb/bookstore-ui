
import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class HttpServiceService {

  header = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
  constructor(private http: Http) {}

  get(url: string) {
    return this.http.get(url, this.header)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  post(url: string, payload: object) {
    return this.http.post(url, payload, this.header)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

   handleError(error: Response) {
    return Observable.throw(error || 'Error in retrieving response')
  }
}
