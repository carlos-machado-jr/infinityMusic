import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { }

  getGenre(){
      return this.http.jsonp("https://api.deezer.com/genre&output=jsonp", "callback").pipe(
        map((result: any)=> {return result.data})
      )
  }
}
