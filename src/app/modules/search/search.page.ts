import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { Track } from 'src/app/share/model/track';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  search: any;
  track: any;
  subject: Subject<any> =new Subject<any>()
  constructor(private searchMusics: SearchService) { }

  ngOnInit() {
  }
  searchMusic(event: any){
    if(event.detail.value != ''){
      this.subject.next(event.detail.value);
    } else { 
      this.subject = new Subject<any>()
      this.subject.next(event.detail.value);
    }
    // this.search = event.detail.value
  }

  searching(){
      console.log(this.search)
      this.subject.next(this.search);
    
  }

}
