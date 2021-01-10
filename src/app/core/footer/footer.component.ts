import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_service/data-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  loginToken:string = "";
  constructor(private dataService:DataService) { 
    this.loginToken = this.dataService.getCookies('currentUsertoken') || ""
  }

  ngOnInit() {
  }

}
