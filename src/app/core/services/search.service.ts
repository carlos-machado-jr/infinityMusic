import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Track } from 'src/app/share/model/track';
import { ResultSearchPage } from '../../modules/search/result-search/result-search.page';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
uri="https://api.deezer.com/search";
  constructor(private http: HttpClient) { }
  params = {
    'q': '',
    'limit': ''
  }
  headers = {
    'x-rapidapi-key': '2822545084mshd6ae3b6b453d229p1df816jsn1833f1ddad57',
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'useQueryString': 'true'
  };




  

  searchMusic(uri: any): Observable<Track[]>{
    // this.uri = `${this.uri}?q=${consulta}&output=jsonp`;

    return this.http.jsonp<Track[]>(uri,"callback").pipe(
      map((result: any) => {
        return result.data;
      })
    )
  }

  teste(params): Observable<Track[]>{
    return this.http.get<Track[]>("https://deezerdevs-deezer.p.rapidapi.com/search", {params: params, headers: this.headers}).pipe(
      map((result: any) => {return result.data})
    )
  }

}
