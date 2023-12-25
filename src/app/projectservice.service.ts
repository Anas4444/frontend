import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  constructor(private _http:HttpClient) { }

  get_projects() {
    return this._http.get('http://localhost:8081/jcibardo/api/project');
  }
}
