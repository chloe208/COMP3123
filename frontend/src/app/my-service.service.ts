import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Video} from "./model/video";
import {Customer} from "./model/customer";
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
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

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

  deleteVideo(id) {
    console.log(id)
    return this.http.delete(this.baseUrl + '/video/' + id,
    {headers: this.GetHttpHeaders() }
    )
    // .subscribe(
    //   data => {
    //     console.log("DELETE Request is successful", id);
    //   },
    //   error => {
    //     console.log("ERR", error);
    //   }
    // );


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
  addVideo(data: any){
    // console.log(data)
    return this.http.put(
      this.baseUrl + '/video',
      data,
      {headers: this.GetHttpHeaders()}
      )
      
  }

  // getVideoById(id: number) {
  //   return this.http.get<Video>(this.baseUrl + '/' + id);
  // }

  getCustomers() {
    return this.http.get<Customer[]>(this.baseUrl + '/customer');
  }



}
