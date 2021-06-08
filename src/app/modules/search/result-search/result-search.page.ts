import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search.service';
import { Track } from 'src/app/share/model/track';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'result-search',
  templateUrl: './result-search.page.html',
  styleUrls: ['./result-search.page.scss'],
})
export class ResultSearchPage implements OnInit {
  search: any;
  track: Observable<Track[]>;
  subject: Subscription;
  @Input() data: Subject<any> = new Subject<any>();
  @Input() updateComponent: Subject<boolean> = new Subject<boolean>();
  uri="https://api.deezer.com/search";

  constructor(private searchMusics: SearchService,
              private active: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    if(this.data != null){
    this.track = this.data.pipe(
        debounceTime(400), 
        distinctUntilChanged(), // prevent duplicate request on retype
        switchMap((value) => {
          if(value != ''){
            const params = {
              'q': value
            }
            return this.searchMusics.teste(params)
            // this.uri = `${this.uri}?q=${value}&output=jsonp`;
            // return this.searchMusics.searchMusic(this.uri);
          } else {
            return []
          }
          
        })
      )
      this.subject = this.track.subscribe()
    } else {
      
    }


    
    
    

    
  }

  ngOnDestroy(){
    this.subject.unsubscribe();
  }

}
