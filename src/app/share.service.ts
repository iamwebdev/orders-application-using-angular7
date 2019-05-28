import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { customerInfo } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
 public apiUrl:string = "assets/data/customer-details.json"

 public apiUrlOrder:string = "assets/data/order-details.json"

  constructor(private httpClient: HttpClient) { }

  customerData(): Observable<customerInfo[]>{
    // console.log("Called");
    return this.httpClient.get<customerInfo[]>(this.apiUrl);
  }

  orderData(): Observable<customerInfo[]>{
    return this.httpClient.get<customerInfo[]>(this.apiUrlOrder)
  }
}
