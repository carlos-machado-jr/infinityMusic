import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  array: any[] = ["Musicas favoritas","Playlist","Albuns","Artistas"]
  constructor() { }

  ngOnInit() {
  }
  nextPage(){
  }
}
