import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

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
