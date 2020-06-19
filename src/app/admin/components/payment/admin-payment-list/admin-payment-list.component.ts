import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-payment-list',
  templateUrl: './admin-payment-list.component.html',
  styleUrls: ['./admin-payment-list.component.css']
})
export class AdminPaymentListComponent implements OnInit {
  payments: any;
  constructor() { }

  ngOnInit(): void {
    this.payments = [
      {clientId: {
        email: 'munkhbold@miu.edu'
        },
        createdAt: new Date(),
        cart: {
          number: '881244121233',
          expireDate: '06/22',
          holder: 'Munkhbold Dembel'
        },
        point: 250
      },
      {clientId: {
        email: 'bilguun@miu.edu'
        },
        createdAt: new Date(),
        cart: {
          number: '881244123225',
          expireDate: '04/21',
          holder: 'Bilguun Tegshbaikh'
        },
        point: -100
      }
    ];
  }

}
