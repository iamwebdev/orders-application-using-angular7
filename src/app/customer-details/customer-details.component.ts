import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
public customers = [];
public filterData:any = [];

  constructor(private activeRoute: ActivatedRoute, 
    private shareService: ShareService) {}

  ngOnInit() {
        const queryParams = this.activeRoute.snapshot.queryParams
        const routeParams = this.activeRoute.snapshot.params;
        var customerId = routeParams.id;

        var customerData = this.shareService.customerData()
        .subscribe(data => {
          this.customers = data
          console.log(customerId)
          this.filterData = this.customers.filter(fill => fill.id == customerId)
             console.log(this.filterData)    
        });
        // console.log(JSON.stringify(customerData))
        
        

        // console.log(this.customers);
    
  }



}
