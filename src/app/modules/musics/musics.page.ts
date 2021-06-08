import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController, AnimationDirection } from '@ionic/angular';
import { PlayingMusicService } from 'src/app/core/services/playing-music.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { TrackService } from 'src/app/core/services/track.service';
import { UsersService } from 'src/app/core/services/users.service';
import { Album } from 'src/app/share/model/album';
import { Genre } from 'src/app/share/model/genre';
import { Playlist } from 'src/app/share/model/playlist';
import { Track } from 'src/app/share/model/track';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.page.html',
  styleUrls: ['./musics.page.scss'],
})
export class MusicsPage implements OnInit {
  @ViewChild('header') header: ElementRef;
  private headerEl: any;
  private lastScroolTop: number =0;
  private animation: Animation;
  
  albums: Album[];
  playLists: Playlist[];
  tracks: Track[];
  genrers: Genre[];


  public options = {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 10,
  }
  public options2 = {
    slidesPerView: 2,
    freeMode: true,
    spaceBetween: 10,
  }

  public images = [ ]
  constructor(
    private animationCtrl: AnimationController,
    private userRecomendations: UsersService,
    private trackService: TrackService,
    private playingMusic: PlayingMusicService
    
    ) { }

  ngOnInit() {
    this.getAlbumsRecomendations()
    this.getPlayListsRecomendations()
    this.getTracksRecomendations()
    this.getGenre()
    
   
  }

  ionViewDidEnter(){
    this.headerEl = this.header.nativeElement;
    this.createAnimation();
  }

  createAnimation(){
    this.animation = this.animationCtrl.create()
    .addElement(this.headerEl)
    .duration(300)
    .direction('reverse')
    .fromTo('transform', 'translateY(0)', `translateY(-${this.headerEl.clientHeight}px)`);
  }
  onScroll(event: any){
    const scrollTop: number = event.detail.scrollTop;
    const direction: AnimationDirection = scrollTop > this.lastScroolTop ? 'normal' : 'reverse';
    if(this.animation.getDirection() != direction) this.animation.direction(direction).play();

    this.lastScroolTop = scrollTop;
  }


  getAlbumsRecomendations(){
    this.userRecomendations.getAlbumsRecomendations().subscribe(data => {
      this.albums = data })
  }
  getPlayListsRecomendations(){
    this.userRecomendations.getPlaylistRecomendations().subscribe(data => {
      this.playLists = data })
  }
  getTracksRecomendations(){
    this.userRecomendations.getTracksRecomendations().subscribe(data => {
      console.log(data)
      this.tracks = data })
  }
  getGenre(){
    this.trackService.getGenre().subscribe(data => {
      this.genrers = data;
      this.genrers.shift();
    })
  }
  play(id){
    let trackSelect: Track; 
    this.tracks.filter(data => {
      if(data.id == id)
          trackSelect = data
    })
    this.playingMusic.playList.next(trackSelect)
    
  }
}
