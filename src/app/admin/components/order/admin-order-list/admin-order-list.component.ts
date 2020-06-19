import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.css']
})
export class AdminOrderListComponent implements OnInit {
  orders: any[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      res => {
        this.orders = res.result;
      }
    );
  }

  changeOrderStatus(orderId, status){
    this.orderService.changeOrderStatus(orderId, status).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }
}
