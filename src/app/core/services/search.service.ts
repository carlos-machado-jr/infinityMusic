import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Track } from 'src/app/share/model/track';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
uri="https://api.deezer.com/search";
  constructor(private http: HttpClient) { }


  searchMusic(consulta: any): Observable<Track[]>{
    this.uri = `${this.uri}?q=${consulta}&output=jsonp&strict=on`;

    return this.http.jsonp<Track[]>(this.uri,"callback").pipe(
      map((result: any) => {
        return result.data;
      })
    )
  }

}
