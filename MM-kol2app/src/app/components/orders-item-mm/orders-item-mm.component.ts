import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-mm',
  templateUrl: './orders-item-mm.component.html',
  styleUrls: ['./orders-item-mm.component.css']
})
export class OrdersItemMMComponent implements OnInit {


  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: string;
  @Input() price?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
