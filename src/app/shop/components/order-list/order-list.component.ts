import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: any[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrdersByUser().subscribe(
      res => {
        this.orders = res.result;
      },
      err => {
        console.log(err);
      }
    );
  }

  cancelOrder(orderId){
    this.orderService.cancelOrder(orderId).subscribe(
      res => {
        this.ngOnInit();
      }
    );
  }
}
