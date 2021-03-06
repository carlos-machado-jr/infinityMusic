import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  @ViewChild('search') inputSearch: ElementRef;
  track: any
  updateComponent: Subject<boolean> = new Subject<boolean>();
  subject: Subject<any> =new Subject<any>()
  teste: number = 0;

  constructor(private nav: NavController) { }

  ngOnInit() {
    this.updateComponent.next(false);
    console.log(this.inputSearch)
  }
  searchMusic(){
      this.teste = 0;
      this.updateComponent.next(false);
      console.log(this.search)
      this.subject.next(this.search);

    
  }

  @HostListener('window:keydown.backspace', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log(this.teste)
    if(this.teste <= 1){
      this.updateComponent.next(true);
      this.teste++
    } else {
       this.updateComponent.next(false);
       this.ngOnInit()
    }
      
  }

  

}
