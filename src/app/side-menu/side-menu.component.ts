import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { DataService } from '../_service/data-service.service';

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

}
