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
    this.videos = [
      {id: 1, title: 'Paris can wait',runningTime: '2',genre:'romance',rating:'4',director:'Chloe',status:'available'},
      {id: 2, title: 'Midnight in Paris',runningTime: '26',genre:'romance',rating:'4',director:'Woody Allen',status:'available'},
      {id: 3, title: 'Interstella',runningTime: '23',genre:'action/Si-fi',rating:'4',director:'Minji',status:'available'},
      {id: 4, title: 'The Dark Knight',runningTime: '52',genre:'Action',rating:'4',director:'Christopher Nolan',status:'available'},
      {id: 5, title: 'Loving Vincent',runningTime: '112',genre:'drama',rating:'4',director:'Sam',status:'available'},
    ]

      this.videoService.getVideos()
      .subscribe( data => {
        this.videos = data;
        console.log(data);
      });

  }
  // login(): void {
  //   this.router.navigate(['login']);
  // };

}
