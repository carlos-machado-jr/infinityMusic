import { Component, HostListener, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { forkJoin, from, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, mergeMap, switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search.service';
import { Track } from 'src/app/share/model/track';
import { NavigationService } from './navigation.service';


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
  search: any;
  track: Track[];
  subject: Subscription;
  constructor(
    private searchMusics: SearchService,
    private nav: NavController
    
    ) { }

  ngOnInit() {
    // this.track = this.subject.pipe(
    //   debounceTime(400), 
    //   distinctUntilChanged(), // prevent duplicate request on retype
    //   switchMap((value) => {
    //     console.log(value)
    //     const searchParams = this.search;
    //     return this.searchMusics.searchMusic(value)})
    // )
    // this.track = this.subject.pipe(
    //   mergeMap((value: any)=>{
    //      return this.searchMusics.searchMusic(value);
    //   })
    //   )

    // console.log(this.track)
  }

  searchMusic(event){
    this.nav.navigateForward("/search");
    // this.subject = this.searchMusics.searchMusic(this.search).subscribe(data => this.track = data)
    // console.log(event)
    // this.subject.next(this.search);

  }

 

  

}
