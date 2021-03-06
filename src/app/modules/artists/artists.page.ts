import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SearchService } from 'src/app/core/services/search.service';
import { TrackService } from 'src/app/core/services/track.service';
import { Album } from 'src/app/share/model/album';
import { Artist } from 'src/app/share/model/artist';
import { Track } from 'src/app/share/model/track';
import { FavoritesPage } from '../favorites/favorites.page';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  public images = [
    {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},

     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},
     
     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'}
  ]
  artist: Artist
  artistId: string;

  track: Track[];
  albums: Album[];
  public options = {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 10,
  }
  
  constructor(
    private activeRouter: ActivatedRoute,
    private searchService: TrackService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.activeRouter.params.subscribe(data => {
      this.artistId = data['id']
    })
    this.getArtist();
    this.getTopTracks();
    this.getOtherAlbums();
  }
  // ionViewDidEnter(){
  //   setTimeout(() => {
  //     this.getOtherAlbums();
         
  //      }, 1000)
  // }
  getArtist(){
     this.searchService.getArtistById(this.artistId).subscribe(data => {
      
      this.artist = data;
      this.artistId = data.id
      // this.track = data.tracks.data
      // this.track.map((data, i) => {
      //   data.album = this.album
      // })
    })
  }

  getTopTracks(){
    this.searchService.getTopTracks(this.artistId).subscribe(data => {
     this.track = data.data;
     
     // this.track = data.tracks.data
     // this.track.map((data, i) => {
     //   data.album = this.album
     // })
   })
 }
 getOtherAlbums(){
 this.searchService.getAllAlbums(this.artistId).subscribe(result => {
    this.albums = result.data
    
  })
}
  
}
