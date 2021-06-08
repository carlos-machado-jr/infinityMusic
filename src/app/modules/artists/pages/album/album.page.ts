import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { PlayingMusicService } from 'src/app/core/services/playing-music.service';
import { TrackService } from 'src/app/core/services/track.service';
import { Album } from 'src/app/share/model/album';
import { Artist } from 'src/app/share/model/artist';
import { Track } from 'src/app/share/model/track';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  
  artistId: string;

  album: Album;
  albums: Album[];
  albumId: string;
  albumSubscription: Subscription = new Subscription();
  track: Track[];

  public options = {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 10,
  }
  constructor(
    private activeRouter: ActivatedRoute,
    private trackService: TrackService,
    private playingMusic: PlayingMusicService
    ) { }

  ngOnInit() {
    
    
  }

  ionViewWillEnter(){
    this.activeRouter.params.subscribe(data => {
      this.albumId = data['id']
    })
    this.getAlbums();
    
  }
  ionViewDidEnter(){
    setTimeout(() => {
      this.getOtherAlbums();
         
       }, 1000)
  }

  getAlbums(){
    this.albumSubscription = this.trackService.getAlbumById(this.albumId).subscribe(data => {
      
      this.album = data;
      this.artistId = data.artist.id
      this.track = data.tracks.data
      this.track.map((data, i) => {
        data.album = this.album
      })
    })
  }
  getOtherAlbums(){
      this.albumSubscription = this.trackService.getAllAlbums(this.artistId).subscribe(result => {
        this.albums = result.data
        
      })
  }

  ngOnDestroy(){
    this.albumSubscription.unsubscribe()
  }

  teste(id){
    let trackSelect: Track; 
    this.track.filter(data => {
      if(data.id == id)
          trackSelect = data
    })
    this.playingMusic.playList.next(trackSelect)
    
  }

}
