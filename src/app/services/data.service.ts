import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const dataCount_URL = 'http://10.10.114.97:5556/microFrontend/dataCount/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getDataCount() {
    var data: any = this.http.get(dataCount_URL)
    return data;
  }
}
