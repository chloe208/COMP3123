import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Video} from "./model/video";
import { map } from 'rxjs/operators';

// Regarding HTTP service
// https://blog.angular-university.io/angular-http/

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:4000';

  //setup the header - JSON!
  GetHttpHeaders() : HttpHeaders{
    const headers = new HttpHeaders().set('content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    return headers;
  }

  getVideos() {
    return this.http.get<Video[]>(this.baseUrl + '/video');
  }
  updateVideoById(id: number, data: String) {
    return this.http.post<Video>
    (
      this.baseUrl + '/video/' + id, 
      data, 
      {headers: this.GetHttpHeaders() }
    )
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("ERR", error);
      }
      ); 
  }

  deleteVideo(id: number) {
    // console.log(id, data)
    // return this.http.delete<video>
    // (
    //   // this.baseUrl + '/video/' + id, 
    //   // data, 
    //   // {headers: this.GetHttpHeaders() }
    // )
    // .subscribe(
    //   data => {
    //       console.log("POST Request is successful ", data);
    //   },
    //   error => {
    //       console.log("ERR", error);
    //   }
    //   ); 


    // )
    // // return this
    //   .http
    //   .get(uri)
    //   .pipe(map(res => {
    //     return res;
    //   }));
    

  }
  addVideos(id: number, data: String){
    // console.log(id, data)
    this.http.put(
      this.baseUrl + '/video/' + id,
      // localhost:4000/video/1473647
      // you may want to replace this with data :)
      {
          "title": "Paris can wait",
          "runningTime": "22",
          "genre": "Romance",
          "rating": "5",
          "director": "Eleanor Coppola",
          "status": "Available",
      },
      {headers: this.GetHttpHeaders()}
      )
      .subscribe(
          data => {
              console.log("PUT Request is successful ", data);
          },
          error => {
              console.log("ERR", error);
          }
      ); 
  }

  // getVideoById(id: number) {
  //   return this.http.get<Video>(this.baseUrl + '/' + id);
  // }

  getCustomers() {
    return this.http.get<Video[]>(this.baseUrl + '/customer');
  }



}
