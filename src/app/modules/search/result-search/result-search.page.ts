import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search.service';
import { Track } from 'src/app/share/model/track';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/share/model/artist';
import { Album } from 'src/app/share/model/album';
import { PlayingMusicService } from 'src/app/core/services/playing-music.service';

@Component({
  selector: 'result-search',
  templateUrl: './result-search.page.html',
  styleUrls: ['./result-search.page.scss'],
})
export class ResultSearchPage implements OnInit {
  track: Observable<Track[]>;
  artists: Observable<Artist[]>;
  album: Observable<Album[]>;

  trackMusic: Track[];
  subject: Subscription;

  @Input() data: Subject<any> = new Subject<any>();
  @Input() updateComponent: Subject<boolean> = new Subject<boolean>();

  constructor(private trackService: SearchService,
              private playMusics: PlayingMusicService,
              private router: Router
  ) { }

  ngOnInit() {
    if(this.data != null){
      this.searchTrack();
      this.searchArtists();
      this.subscribers();
      console.log(`artistas: ${this.artists}`)
      console.log(`musicas: ${this.track}`)
    } 
    
  }

  ngOnDestroy(){
    this.subject.unsubscribe();
  }


  searchTrack(){
    this.track = this.data.pipe(
      debounceTime(400), 
      distinctUntilChanged(), 
      switchMap((value) => {
          return this.trackService.searchByTracks(value, 20)
      })
    )
  }

  searchArtists(){
    this.artists = this.data.pipe(
      debounceTime(400), 
      distinctUntilChanged(), 
      switchMap((value) => {
          return this.trackService.searchByArtists(value, 10)
      })
    )
  }

  
  subscribers(){
    this.subject = this.track.subscribe( data => this.trackMusic = data)
  }

  play(id){
    let trackSelect: Track; 
    
    this.trackMusic.filter(data => {
      if(data.id == id)
          trackSelect = data
    })
    this.playMusics.playList.next(trackSelect)
  }

}
