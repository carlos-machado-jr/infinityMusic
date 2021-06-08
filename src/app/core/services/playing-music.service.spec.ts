import { TestBed } from '@angular/core/testing';

import { PlayingMusicService } from './playing-music.service';

describe('PlayingMusicService', () => {
  let service: PlayingMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
