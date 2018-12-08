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
  // login(): void {
  //   this.router.navigate(['login']);
  // };

  addVideos() {

  }


  deleteVideo(id) {
    var videos = this.videos;

    this.videoService.deleteVideo(id)
    .subscribe( data => {
      if (data.n == 1 ) {
        for (var i = 0; i < videos.length; i++) {
          if(videos[i]._id == id) {
            videos.splice(i,1);
          }
        }
      }
    })
  }

}
