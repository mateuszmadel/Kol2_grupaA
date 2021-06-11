import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/mm-data.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-orders-details-mm',
  templateUrl: './orders-details-mm.component.html',
  styleUrls: ['./orders-details-mm.component.css']
})
export class OrdersDetailsMMComponent implements OnInit {

  public image = '';
  public text: string;
  public id: number;
  public title:string;
  public price:number;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    this.dataService.getById(id).subscribe(res => {
      this.image = res['image'];
      this.text = res['text'];
      this.title=res['title'];
      this.price=res['price'];
    });
  }

}
