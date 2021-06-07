import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  public images = [
    {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},

     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},
     
     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},
     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},

     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},
     
     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},
     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},

     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},
     
     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'}
  ]

  public options = {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 10,
  }
  constructor() { }

  ngOnInit() {
  }

}
