import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Model} from './model';


const endpoint = 'http://localhost:1505/api/add';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class PostRequestService {
  _url = '';
  constructor( private _http: HttpClient) { }
  doOperation(model: Model) {
    console.log(model);
    return this._http.post(endpoint, httpOptions, d);
  }

}
