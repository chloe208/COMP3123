import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MyServiceService} from "../my-service.service";
import {Video} from "../model/video";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videos: Video[]
  constructor(private router: Router,private videoService: MyServiceService) { }

  ngOnInit() {
    this.videos = []

      this.videoService.getVideos()
      .subscribe( data => {
        this.videos = data;
        console.log(data);
      });

  }
  login(): void {
    this.router.navigate(['login']);
  };
  delete(id) {
    
  }

}
