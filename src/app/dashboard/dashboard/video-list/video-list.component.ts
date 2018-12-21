import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from 'src/app/video-data.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videoList: Video[];
  @Output() selectVideo = new EventEmitter<Video>();
  videoid:string;

  pickVideo(video: Video) {
    this.videoid = video.id;
    this.selectVideo.emit(video);
  }

  constructor() { }

  ngOnInit() {
  }

}
