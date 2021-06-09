import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayingMusicService } from 'src/app/core/services/playing-music.service';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Platform } from '@ionic/angular';
import { delay } from 'rxjs/operators';
import { Track } from 'src/app/share/model/track';

@Component({
  selector: 'play-music',
  templateUrl: './play-music.page.html',
  styleUrls: ['./play-music.page.scss'],
})
export class PlayMusicPage implements OnInit {
  title: any = 'Ed Sheeran'
  artist: any;
  image: string = '../../assets/images/album.jpg';
  filename: any = 'Shape of You';
  duration: any = -1;
  curr_playing_file: MediaObject;
  storageDirectory: any;
  play_The_track: string = ""; //note this specific url format is used in android only
  position: any = 0;
  get_position_interval: any;
  is_playing = false;
  is_in_play = false;
  is_ready = false;
  get_duration_interval: any;
  display_position: any = '00:00';
  display_duration: any = '00:00';
  @Output() nameTrack: EventEmitter<any> = new EventEmitter();
  @Output() isReady: EventEmitter<boolean> = new EventEmitter();
  n: number = 0;
  @Output() isPlaying: EventEmitter<boolean> = new EventEmitter();

  track: Track[] = []
  constructor(
    private sound: Media,
    private platform: Platform,
    private playMusiService: PlayingMusicService
  ) { }

  ngOnInit() {

    this.playMusiService.playList.subscribe(data => {
      if(this.is_playing){
        this.stop();
        this.setToPlayback();
      }
      this.image = data.album.cover_xl;
      this.play_The_track = data.preview;
      this.artist = data.artist.name
      this.title = data.title
      this.nameTrack.emit(data.title);
      this.prepareAudioFile()
      setTimeout(()=>{
        this.play()
      },1000)
      
    })

    this.playMusiService.enterPlayingMusic.subscribe(data => {
      if(data){
        if(!this.is_playing){
          this.prepareAudioFile()
        }
      }
    })

    this.playMusiService.playMusic.subscribe(status => {
      if(status && !this.is_playing){
        this.play()
      } else {
        this.pause()
      }
    })
      
  }
  
  prepareAudioFile() {
    this.platform.ready().then((res) => {
      this.getDuration();
    });
  }

  getDuration() {
    this.curr_playing_file = this.sound.create(this.play_The_track);
    this.curr_playing_file.play();
    this.curr_playing_file.setVolume(0.0);


    const self = this;
    let temp_duration = self.duration
    this.get_duration_interval = setInterval(() => {

      if (self.duration === -1 || !self.duration) {
        self.duration = ~~(self.curr_playing_file.getDuration());
        console.log(self.duration)
      } else {

        if (self.duration !== temp_duration) {
          temp_duration = self.duration;

        } else {

          self.curr_playing_file.stop();
          self.curr_playing_file.release();

          clearInterval(self.get_duration_interval);
          this.display_duration = this.toHHMMSS(self.duration);

          self.setToPlayback();
        }
      }
    }, 100)


  }


  setToPlayback() {
    this.curr_playing_file = this.sound.create(this.play_The_track);
    this.curr_playing_file.onStatusUpdate.subscribe(status => {
      switch (status) {
        case 1:
          break;
        case 2:   // 2: playing
          this.is_playing = true;
          break;
        case 3:   // 3: pause
          this.is_playing = false;
          break;
        case 4:   // 4: stop
        default:
          this.is_playing = false;
          break;
      }
    });
    this.is_ready = true;
    
    this.getAndSetCurrentAudioPosition();
  }


  getAndSetCurrentAudioPosition() {
    const diff = 1;
    const self = this;
    this.get_position_interval = setInterval(() => {
      const last_position = self.position;
      self.curr_playing_file.getCurrentPosition().then((position) => {

        if (position >= 0 && position < self.duration) {
          if (Math.abs(last_position - position) >= diff) {
            // set position
            self.curr_playing_file.seekTo(last_position * 1000);
            
          } else {
            // update position for display
            self.position = position;
            this.display_duration = this.toHHMMSS(self.duration - self.position);
            this.isReady.emit(this.is_ready)
            this.isPlaying.emit(this.is_playing)
            this.display_position = this.toHHMMSS(self.position);
          }
        } else if (position >= self.duration) {
          self.stop();
          self.setToPlayback();
        }
      });
    }, 100);
  }
  controlSeconds(action) {
    const step = 5;
    const numberRange = this.position;
    switch (action) {
      case 'back':
        this.position = numberRange < step ? 0.001 : numberRange - step;
        break;
      case 'forward':
        this.position = numberRange + step < this.duration ? numberRange + step : this.duration;
        break;
      default:
        break;
    }
  }
  play() {
    this.curr_playing_file.play();
    
    
  }

  pause() {
    this.curr_playing_file.pause();
  }

  stop() {
    this.curr_playing_file.stop();
    this.curr_playing_file.release();
    clearInterval(this.get_position_interval);
    this.position = 0;
  }

  toHHMMSS(secs) {

    var sec_num = parseInt(secs, 10)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v, i) => v !== "00" || i >= 0)
      .join(":")


  }
  teste(){
    this.playMusiService.enterPlayingMusic.next(false)

  }

}
