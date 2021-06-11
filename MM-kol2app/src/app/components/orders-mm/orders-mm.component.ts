import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/mm-data.service'
@Component({
  selector: 'app-orders-mm',
  templateUrl: './orders-mm.component.html',
  styleUrls: ['./orders-mm.component.css']
})
export class OrdersMMComponent implements OnInit {

  public orders$:any;

  constructor(private service:DataService) { }

  getAll(){
    this.service.getAll().subscribe(res => {
      this.orders$ = res;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

}
