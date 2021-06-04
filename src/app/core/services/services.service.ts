import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  params = {
    'q':'projota',
    'limit': '2'
  }
  uri = `https://api.deezer.com/genre`
  constructor(private http: HttpClient) { }

  getMusic(): Observable<Object>{
    this.uri = `${this.uri}?output=jsonp`;

    return this.http.jsonp(this.uri,"callback")

  }
}
