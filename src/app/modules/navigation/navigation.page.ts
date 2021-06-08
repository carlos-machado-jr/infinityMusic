import { Component, HostListener, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { forkJoin, from, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, mergeMap, switchMap } from 'rxjs/operators';
import { PlayingMusicService } from 'src/app/core/services/playing-music.service';
import { SearchService } from 'src/app/core/services/search.service';
import { UsersService } from 'src/app/core/services/users.service';
import { Track } from 'src/app/share/model/track';
import { NavigationService } from './navigation.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

 
  search: any;
  track: Track[];
  subject: Subscription;
  constructor(
    private user: UsersService,
    private nav: NavController,
    private play: PlayingMusicService
    
    ) { }

  ngOnInit() {
    this.user.getSearchHistory().subscribe(data => this.track = data)
  }

  searchMusic(event){
    this.nav.navigateForward("/search");
    

  }

  initMusic(id){
    let trackSelect: Track; 
    this.track.filter(data => {
      if(data.id == id)
          trackSelect = data
    })
    this.play.playList.next(trackSelect)
  }
 

  

}
