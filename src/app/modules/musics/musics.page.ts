import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.page.html',
  styleUrls: ['./musics.page.scss'],
})
export class MusicsPage implements OnInit {
  public options = {
    slidesPerView: 3,
    initialSlide: 0,
    spaceBetween: 10,
  }

  public images = [
    {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},

     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'},
     
     {imageUrl:'https://universalmusic.vteximg.com.br/arquivos/ids/157765-1000-1000/a-milenar-arte-de-meter-o-louco-cd-projota-00602557488692-26060255748869.jpg?v=636935578254070000', 
     imageName:'Projota'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
