import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const API_URL = 'https://api.angularbootcamp.com';

export interface ViewDetail {
  age: number,
  region: string,
  date: string
}

export interface Video {
  title: string,
  author: string,
  id: string, 
  viewDetails:ViewDetail[]
}

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(API_URL + '/videos')
      .pipe(
        map(videos => videos.slice(0,3)
        ))
      .pipe(
        map(videos => videos.map(v=>{return {...v,title:v.title.toUpperCase()}})
        ))
  }
}
