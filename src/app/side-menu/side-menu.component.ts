import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { DataService } from '../_service/data-service.service';
declare var $:any;
declare var PerfectScrollbar:any;

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  user_type:string = "admin";
  constructor(private dataService:DataService) {
    // this.navigateUrl = route.url[0].path
  }

  ngOnInit() {
    this.user_type = this.dataService.getCookies('currentUser') || "";
    this.user_type = JSON.parse(this.user_type).user_type;
  }

  callingJQuery(){

    $(".button-collapse").sideNav();

    var container = document.querySelector('.custom-scrollbar');
    var ps = new PerfectScrollbar(container, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }

}
