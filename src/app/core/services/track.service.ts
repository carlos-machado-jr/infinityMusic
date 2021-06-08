import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from 'src/app/share/model/album';
import { Artist } from 'src/app/share/model/artist';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  headers = {
    'x-rapidapi-key': '2822545084mshd6ae3b6b453d229p1df816jsn1833f1ddad57',
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'useQueryString': 'true'
    
  };

  constructor(private http: HttpClient) { }

  getGenre(){
      return this.http.jsonp("https://api.deezer.com/genre&output=jsonp", "callback").pipe(
        map((result: any)=> {return result.data})
      )
  }
  getArtistById(id): Observable<Artist>{

    return this.http.jsonp<Artist>(`https://api.deezer.com/artist/${id}?output=jsonp`, "callback");
  }
  getAlbumById(id): Observable<any>{

    return this.http.jsonp<any>(`https://api.deezer.com/album/${id}?output=jsonp`, "callback");
  }
  getAllAlbums(id): Observable<any>{

    return this.http.jsonp<any>(`https://api.deezer.com/artist/${id}/albums?output=jsonp`, "callback");
  }
  getTopTracks(id): Observable<any>{

    return this.http.jsonp<any>(`https://api.deezer.com/artist/${id}/top?output=jsonp`, "callback");
  }
}
