import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LamentableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LamentableProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LamentableProvider Provider');
  }

  obtenerdatos(){
    return  this.http.get('http://192.168.1.56:3000/bt/panelData')
  }
}
