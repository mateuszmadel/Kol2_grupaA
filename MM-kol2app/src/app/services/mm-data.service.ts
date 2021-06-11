import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url+'/api/order/items');
  }
  getById(id){
    return this.http.get(this.url+'/api/order/items/'+id)
  }
}
