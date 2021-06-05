import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services.service';
import { MusicsService } from './musics.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.page.html',
  styleUrls: ['./musics.page.scss'],
})
export class MusicsPage implements OnInit {
  public options = {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 10,
  }
  public options2 = {
    slidesPerView: 2,
    freeMode: true,
    spaceBetween: 10,
  }

  public images = [ ]
  constructor(private service: ServicesService) { }

  ngOnInit() {

    this.service.getMusic().subscribe((res: any) => {
      this.images = res.data;
      this.images.shift();
    })
    
   
  }

}
