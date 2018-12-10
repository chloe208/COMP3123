import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MyServiceService } from "../my-service.service";
import { Video } from "../model/video";
import Swal from 'sweetalert2'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videos: Video[]
  video: any
  searchText: string;

  // <!-- Title	Running Time	Genre	Rating	Director	Status -->

  // // myform: any; 
  statuss: string[] = [
    'Available',
    'Unavailable',
  ]

  genres: string[] = [
    'Adventure',
    'Drama',
    'Fantasy',
    'Horror',
    'Science Finction',
    'Sports',
    'etc',
  ]

  ratings: string[] = [
    '5',
    '4',
    '3',
    '2',
    '1',
  ]

  myform = new FormGroup({
    title: new FormControl(),
    runningTime: new FormControl(),
    genre: new FormControl(),
    rating: new FormControl(),
    director: new FormControl(),
    status: new FormControl()
  });


  constructor(private router: Router, private videoService: MyServiceService) { }

  ngOnInit() {

    this.videos = []

    this.videoService.getVideos()
      .subscribe(data => {
        this.videos = data;
        console.log(data);
      });

  }
  // login(): void {
  //   this.router.navigate(['login']);
  // };

  addVideo(event) {
    // console.log(event)
    this.videoService.addVideo(event)
      .subscribe(
        data => {
          console.log("PUT Request is successful ", data);
          this.ngOnInit()
          //this.resetForm(event);
        },
        error => {
          console.log("ERR", error);
        }
      );

  }
  updateVideoById(event) {
    // var update = {
    //   title: this.title,

    // }
  //   this.updateVideoById(id, data)
  //   console.log(id, data)
  //     .subscribe(
  //       data => {
  //       console.log("PUT(Update) Request is successfull", data);
  //       this.ngOnInit()
  //     },
  //     error => {
  //       console.log("ERR", error);
  //     }
  //   )
  // }
  }

  
  deleteVideo(event, id) {
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        var videos = this.videos;
        this.video = [event]
        // console.log([event])
        console.log(event)
        this.videoService.deleteVideo(id)
          .subscribe(data => {
            // if (data.n == 1 ) {
            event.splice(0, 1)
            console.log(event.id)
            if (data == 1) {
              for (var i = 0; i < videos.length; i++) {
                if (videos[i]._id == event.id) {

                }
              }
            }
          })
        Swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })




  }

}
