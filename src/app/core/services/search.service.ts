import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from 'src/app/share/model/album';
import { Artist } from 'src/app/share/model/artist';
import { Playlist } from 'src/app/share/model/playlist';
import { Track } from 'src/app/share/model/track';
import { ResultSearchPage } from '../../modules/search/result-search/result-search.page';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
uri="https://api.deezer.com/search";
  constructor(private http: HttpClient) { }
  
  headers = {
    'x-rapidapi-key': '2822545084mshd6ae3b6b453d229p1df816jsn1833f1ddad57',
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'useQueryString': 'true'
    
  };




  

  // searchMusic(uri: any): Observable<Track[]>{
  //   // this.uri = `${this.uri}?q=${consulta}&output=jsonp`;

  //   return this.http.jsonp<Track[]>(uri,"callback").pipe(
  //     map((result: any) => {
  //       return result.data;
  //     })
  //   )
  // }

  searchByTracks(value, limit): Observable<Track[]>{
    const params = {
      'q': value,
      'limit': limit
    }
    

    return this.http.get<Track[]>("https://deezerdevs-deezer.p.rapidapi.com/search", {params: params, headers: this.headers}).pipe(
      map((result: any) => {return result.data})
    )
  }

  searchByArtists(value, limit): Observable<Artist[]>{
    const params = {
      'q': value,
      'limit': limit
    }
    
    return this.http.get<Artist[]>("https://deezerdevs-deezer.p.rapidapi.com/search/artist", {params: params, headers: this.headers}).pipe(
      map((result: any) => {
        console.log(result)
        return result.data})
    )
  }

  searchByAlbuns(value, limit): Observable<Album[]>{
    const params = {
      'q': value,
      'limit': limit
    }
    
    return this.http.get<Album[]>("https://deezerdevs-deezer.p.rapidapi.com/search/album", {params: params, headers: this.headers}).pipe(
      map((result: any) => {
        console.log(result)
        return result.data})
    )
  }

  searchByPlaylists(value, limit): Observable<Playlist[]>{
    const params = {
      'q': value,
      'limit': limit
    }
    
    return this.http.get<Playlist[]>("https://deezerdevs-deezer.p.rapidapi.com/search/playlist", {params: params, headers: this.headers}).pipe(
      map((result: any) => {
        console.log(result)
        return result.data})
    )
  }

  searchByUser(value, limit): Observable<Playlist[]>{
    const params = {
      'access_token':'fr7Wtb3phMfSIOhMLcJZ4RknH0H2Zn2MFsllbjOpKupQ2X4z4J'
      
    }
    
    return this.http.get<any[]>("https://deezerdevs-deezer.p.rapidapi.com/user/2328738388/recommendations/albums", {params: params, headers: this.headers}).pipe(
      map((result: any) => {
        console.log(result)
        return result.data})
    )
  }

  

}
