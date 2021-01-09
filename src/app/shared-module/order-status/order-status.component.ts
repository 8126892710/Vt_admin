import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.callingJQuery();
  }

  public callingJQuery(){
    $('#dtMaterialDesignExample').DataTable();
  }

}
