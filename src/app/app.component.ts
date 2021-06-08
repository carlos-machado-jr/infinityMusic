import { Component } from '@angular/core';
import { PlayingMusicService } from './core/services/playing-music.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  playMusic = false;
  nameTrack = "..."
  constructor(private playMusiService: PlayingMusicService) {}

  ngOnInit(){
    this.playMusiService.enterPlayingMusic.subscribe(data => this.playMusic = data)
  }
  teste(){
    this.playMusiService.enterPlayingMusic.next(true)
  }
  eventPosition(event){
    console.log(event)
  }
  getNameTrack(name){
    this.nameTrack = name
  }
}
