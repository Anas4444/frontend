import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private _http:HttpClient) { }

  get_items() {
    return this._http.get('http://localhost:8082/jcibardo/api/item');
  }
}
