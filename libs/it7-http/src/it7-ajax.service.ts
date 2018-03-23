import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  Response,
  RequestOptions,
  URLSearchParams as ngURLSearchParams,
  QueryEncoder
} from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import {It7ErrorService} from "./it7-error.service";

class TrueQueryEncoder extends QueryEncoder {
  encodeKey(k: string): string {
    return encodeURIComponent(k);
  }

  encodeValue(v: string): string {
    return encodeURIComponent(v);
  }
}

interface It7AjaxResponse {
  error: number;
  errorMessage: string;
  data: any;
}

@Injectable()
export class It7AjaxService {
  constructor(private http: Http) {}

  post(url: string, data: any): Promise<any> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    // if(this.config.mockAJAX){return Promise.resolve(this.getMockData(url, data));}
    return this.http
      .post(url, this.urlEncode(data), options)
      .toPromise()
      .then(res => this.checkResponse(res))
      .catch(error => {
        this.handleError('Request error: ' + error.message);
      });
  }

  private urlEncode(obj: any): string {
    const urlSearchParams = new ngURLSearchParams('', new TrueQueryEncoder());
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        urlSearchParams.append(key, obj[key]);
      }
    }
    return urlSearchParams.toString();
  }

  private checkResponse(res: Response): any {
    const response = res.json();
    if (response.error) {
      // this.err.fire('Server request error: ' + response.errorMessage);
      alert('Server request error: ' + response.errorMessage);
    }
    return res.json().data;
  }

  private handleError(error: any) {
    // this.err.fire('Server connection error: ' + error);
    alert('Server connection error: ' + error);
    return Promise.reject(error.message || error);
  }

  // private getMockData(url: string = '', data: any = undefined):any {
  //     var m = 'function' === typeof this.config.mockAJAX ? this.config.mockAJAX(url, data) : {};
  //     return m;
  // }
}
