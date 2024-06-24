import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Canned } from './canned.model';

@Injectable({
  providedIn: 'root' // This ensures the service is provided in the root injector
 })





export class CannedService {
  selectedCanned!: Canned;
  canneds!: Canned[];

  readonly baseURL = 'http://localhost:3010/cannedFood';//cannedController

  constructor(public http: HttpClient) {}

  postCanned(cn: Canned) {
    return this.http.post(this.baseURL, cn); //cn is a JSON
  }

  getCannedList() {
    return this.http.get(this.baseURL);
  }

  putCanned(cn: Canned) {
    return this.http.put(this.baseURL + `/${cn._id}`, cn);
  }

  deleteCanned(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
