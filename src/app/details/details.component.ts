import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public customerDetails = [];
  public filterData = [];

  constructor(private shareService: ShareService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams
    const routeParams = this.activeRoute.snapshot.params;
    var orderId = routeParams.id;

    var curOrder = this.shareService.customerData()
    .subscribe(data =>{ 
      this.customerDetails = data
      this.filterData = this.customerDetails.filter(fill => fill.id == orderId)
      console.log(this.filterData)
    });
  }

}
