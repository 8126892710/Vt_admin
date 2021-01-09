import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-assign-order',
  templateUrl: './assign-order.component.html',
  styleUrls: ['./assign-order.component.scss']
})
export class AssignOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.callingJQuery();
  }

  public callingJQuery(){
    $('.mdb-select').materialSelect();
  }

}
