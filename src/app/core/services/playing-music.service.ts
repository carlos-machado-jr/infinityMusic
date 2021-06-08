import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Track } from 'src/app/share/model/track';

@Injectable({
  providedIn: 'root'
})
export class PlayingMusicService {
playMusic: Subject<boolean> = new Subject<boolean>();
stopMusic: Subject<boolean>= new Subject<boolean>();
enterPlayingMusic: Subject<boolean> = new Subject<boolean>();
exitPlayingMusic: Subject<boolean> = new Subject<boolean>();

playList: Subject<Track> = new Subject<Track>();
  constructor() { 
    this.enterPlayingMusic.next(false)
  }



}
