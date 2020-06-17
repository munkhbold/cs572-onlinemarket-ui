import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [
    {name: 'Oroigui sum',
      unitPrice: 15000,
      thumbnail: 'https://cdn.gamedevmarket.net/wp-content/uploads/20191203165126/7dedd5fd1026f0a97faad89765a692ca-700x400.jpg',
      description: `The book description is the pitch to the reader about why they should buy your book.
                 When done right, it directly drives book sales. There are so many examples of how book descriptions lead to huge changes in sales. `},
    {name: 'Breath become an air',
      unitPrice: 30000,
      thumbnail: 'https://www.jkp.com/jkpblog/wp-content/uploads/2018/06/Henry-Voices-of-Modern-Islam-C2W-1-700x400.png',
      description: `The book description is the pitch to the reader about why they should buy your book.
                When done right, it directly drives book sales. There are so many examples of how book descriptions lead to huge changes in sales. `},
    {name: 'Born a crime',
      unitPrice: 25000,
      thumbnail: 'https://ioneblackamericaweb.files.wordpress.com/2018/02/700x400-bhm.jpg?quality=99&strip=all',
      description: `The book description is the pitch to the reader about why they should buy your book.
    When done right, it directly drives book sales. There are so many examples of how book descriptions lead to huge changes in sales. `},
    {name: 'Oroigui sum',
      unitPrice: 15000,
      thumbnail: 'https://cdn.gamedevmarket.net/wp-content/uploads/20191203165126/7dedd5fd1026f0a97faad89765a692ca-700x400.jpg',
      description: `The book description is the pitch to the reader about why they should buy your book.
                 When done right, it directly drives book sales. There are so many examples of how book descriptions lead to huge changes in sales. `}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
