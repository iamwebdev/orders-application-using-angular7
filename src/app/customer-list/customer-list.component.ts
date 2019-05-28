import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
public  customers = [];

  constructor(private shareService: ShareService) { }


  ngOnInit() {
    var cstData = this.shareService.customerData()
      .subscribe(data => this.customers = data);
    
      console.log("customer-list");
  }


}
