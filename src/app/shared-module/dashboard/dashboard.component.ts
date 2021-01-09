import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var PerfectScrollbar:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.callingJQuery();
  }

  callingJQuery(){
    $(".button-collapse").sideNav();
  }

}
