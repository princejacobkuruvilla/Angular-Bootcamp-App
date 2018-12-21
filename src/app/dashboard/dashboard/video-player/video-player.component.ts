import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/video-data.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() selectedVideoDetails: Video;
  constructor() { }

  ngOnInit() {
  }

}
