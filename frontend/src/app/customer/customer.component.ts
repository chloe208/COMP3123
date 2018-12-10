import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {Router} from "@angular/router";
import {MyServiceService} from "../my-service.service";
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[]
  searchText: string;

  constructor(private router: Router, private customerService: MyServiceService) { }
  
  ngOnInit() {
    this.customers = []
      this.customerService.getCustomers()
      .subscribe( data => {
        this.customers = data;
        console.log(data);
      })

      
  }

}
