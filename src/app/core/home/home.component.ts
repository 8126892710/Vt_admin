import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginToken:any = "";
  constructor(private dataService:DataService) {
    this.loginToken = this.dataService.getCookies('currentUsertoken') || ""
  }

  ngOnInit() {
  }

}
