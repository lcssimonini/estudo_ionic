import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CategoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriaProvider {
  private url: string = "http://localhost:8082/";

  constructor(public http: Http) {
    console.log('Hello CategoriaProvider Provider');
  }

  getCategorias() {
    return this.http.get(this.url + "categorias");
  }

}
