import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAlbumsRecomendations(){
    return this.http.jsonp("https://api.deezer.com/user/2328738388/recommendations/albums?access_token=fr7Wtb3phMfSIOhMLcJZ4RknH0H2Zn2MFsllbjOpKupQ2X4z4J&output=jsonp", "callback").pipe(
      map((result: any)=> {return result.data})
    )
  }

  getPlaylistRecomendations(){
    return this.http.jsonp("https://api.deezer.com/user/2328738388/recommendations/playlists?access_token=fr7Wtb3phMfSIOhMLcJZ4RknH0H2Zn2MFsllbjOpKupQ2X4z4J&output=jsonp", "callback").pipe(
      map((result: any)=> {return result.data})
    )
  }
  getTracksRecomendations(){
    return this.http.jsonp("https://api.deezer.com/user/2328738388/recommendations/tracks?access_token=fr7Wtb3phMfSIOhMLcJZ4RknH0H2Zn2MFsllbjOpKupQ2X4z4J&output=jsonp", "callback").pipe(
      map((result: any)=> {return result.data})
    )
  }
}
