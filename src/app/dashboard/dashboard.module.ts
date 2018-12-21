import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoDashboardComponent } from './dashboard/video-dashboard/video-dashboard.component';
import { VideoListComponent } from './dashboard/video-list/video-list.component';
import { VideoPlayerComponent } from './dashboard/video-player/video-player.component';
import { StatFiltersComponent } from './dashboard/stat-filters/stat-filters.component';
import { VideoItemComponent } from './dashboard/video-item/video-item.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: VideoDashboardComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent, VideoItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
