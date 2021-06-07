import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search.service';
import { Track } from 'src/app/share/model/track';

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
  constructor(private searchMusics: SearchService) { }

  ngOnInit() {
    console.log(this.data)
    if(this.data != null){
      console.log(this.data)

    this.track = this.data.pipe(
        debounceTime(400), 
        distinctUntilChanged(), // prevent duplicate request on retype
        switchMap((value) => this.searchMusics.searchMusic(value)),
        finalize(() => console.log("acabou") )
      )
      this.subject = this.track.subscribe()
    }
    
    console.log(this.data)

    
  }

  ngOnDestroy(){
    this.subject.unsubscribe();
  }

}
