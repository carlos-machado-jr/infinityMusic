import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController, AnimationDirection } from '@ionic/angular';
import { ServicesService } from 'src/app/core/services/services.service';
import { UsersService } from 'src/app/core/services/users.service';
import { Album } from 'src/app/share/model/album';
import { MusicsService } from './musics.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.page.html',
  styleUrls: ['./musics.page.scss'],
})
export class MusicsPage implements OnInit {
  @ViewChild('header') header: ElementRef;
  private headerEl: any;
  private lastScroolTop: number =0;
  private animation: Animation;
  
  albums: Album[];



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
  constructor(
    private service: ServicesService,
    private animationCtrl: AnimationController,
    private userRecomendations: UsersService
    
    ) { }

  ngOnInit() {
    this.getAlbumsRecomendations()
    this.service.getMusic().subscribe((res: any) => {
      this.images = res.data;
      this.images.shift();
    })
   
  }

  ionViewDidEnter(){
    this.headerEl = this.header.nativeElement;
    this.createAnimation();
  }

  createAnimation(){
    this.animation = this.animationCtrl.create()
    .addElement(this.headerEl)
    .duration(300)
    .direction('reverse')
    .fromTo('transform', 'translateY(0)', `translateY(-${this.headerEl.clientHeight}px)`);
  }
  onScroll(event: any){
    const scrollTop: number = event.detail.scrollTop;
    const direction: AnimationDirection = scrollTop > this.lastScroolTop ? 'normal' : 'reverse';
    if(this.animation.getDirection() != direction) this.animation.direction(direction).play();

    this.lastScroolTop = scrollTop;
  }


  getAlbumsRecomendations(){
    this.userRecomendations.getAlbumsRecomendations().subscribe(data => this.albums = data)
  }
}
