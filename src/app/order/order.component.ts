import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public orders = [];
  public filterData = [];

  constructor(private shareService: ShareService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams
    const routeParams = this.activeRoute.snapshot.params;
    var customerId = routeParams.id;

    var curOrder = this.shareService.orderData()
    .subscribe(data =>{ 
      this.orders = data
      this.filterData = this.orders.filter(fill => fill.customer_id == customerId)
      console.log(this.filterData)
    });
  }

}
