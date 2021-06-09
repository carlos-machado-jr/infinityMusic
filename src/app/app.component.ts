import { Component } from '@angular/core';
import { PlayingMusicService } from './core/services/playing-music.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  playMusic = false;
  isPlaying = false;
  isReady = false;
  nameTrack = "..."
  constructor(private playMusiService: PlayingMusicService) {}

  ngOnInit(){
    this.playMusiService.enterPlayingMusic.subscribe(data => this.playMusic = data)
  }
  teste(){
    this.playMusiService.enterPlayingMusic.next(true)
  }
  getStatusPlaying(event){
    this.isReady = event;
  }
  getNameTrack(name){
    this.nameTrack = name
  }
  getStatusTrack(event){
    this.isPlaying = event
  }

  play(){
    this.playMusiService.playMusic.next(true);
  }
  pause(){
    this.playMusiService.playMusic.next(true);
  }
}
