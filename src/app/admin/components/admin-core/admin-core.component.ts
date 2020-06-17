import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var drawGauge: any;
@Component({
  selector: 'app-admin-core',
  templateUrl: './admin-core.component.html',
  styleUrls: ['./admin-core.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AdminCoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
