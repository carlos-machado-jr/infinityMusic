import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  array: any[] = [1,2,3,4,5,6]
  constructor() { }

  ngOnInit() {
  }

}
