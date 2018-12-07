import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Video} from "./model/video";

// Regarding HTTP service
// https://blog.angular-university.io/angular-http/

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:1234/';

  //setup the header - JSON!
  GetHttpHeaders() : HttpHeaders{
    const headers = new HttpHeaders().set('content-type', 'application/json');
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

  addVideos(id: number, data: String){
    // console.log(id, data)
    this.http.put(
      this.baseUrl + '/video',
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
