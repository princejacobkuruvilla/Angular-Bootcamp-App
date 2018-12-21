import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/video-data.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html'
})
export class VideoItemComponent implements OnInit {
  @Input() v: Video;
  constructor() { }

  ngOnInit() {
  }

}
