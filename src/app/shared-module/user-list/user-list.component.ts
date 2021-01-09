import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.callingJQuery();
  }

  public callingJQuery(){
    $('.mdb-select').materialSelect();
    $('#dtMaterialDesignExample').DataTable();
  }

}
