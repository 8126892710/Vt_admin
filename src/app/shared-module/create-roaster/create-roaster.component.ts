import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-create-roaster',
  templateUrl: './create-roaster.component.html',
  styleUrls: ['./create-roaster.component.scss']
})
export class CreateRoasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.callingJQuery();
  }

  public callingJQuery(){
    $('.mdb-select').materialSelect();
    $('.timepicker').pickatime({
      twelvehour: true
    });
  }

}
