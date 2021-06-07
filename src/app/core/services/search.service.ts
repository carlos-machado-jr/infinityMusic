import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
uri="https://api.deezer.com/search";
  constructor(private http: HttpClient) { }


  searchMusic(consulta: any): Observable<Object>{
    this.uri = `${this.uri}?q=${consulta}&output=jsonp`;

    return this.http.jsonp(this.uri,"callback");
  }

}
