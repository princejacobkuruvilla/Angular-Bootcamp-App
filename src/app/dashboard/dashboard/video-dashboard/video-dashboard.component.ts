import { Component, OnInit } from '@angular/core';
import { Video, VideoDataService } from 'src/app/video-data.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video;
  videoList: Observable<Video[]>;

  constructor(svc: VideoDataService) {
    this.videoList = svc.loadVideos();
  }

  ngOnInit() {
  }

}
