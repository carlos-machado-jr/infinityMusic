import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() search;
  @Input() settings;

  public searchActivate: Boolean = false;
  public settingsActivate: Boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.searchActivate = this.search == "true"? true: false;
    this.settingsActivate = this.settings == "true"? true: false;

  }

}
