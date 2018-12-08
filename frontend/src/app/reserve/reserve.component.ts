import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MyServiceService} from "../my-service.service";
import {Video} from "../model/video";

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

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
  }
