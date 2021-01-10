import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_service/data-service.service';
declare var $: any

@Component({
  selector: 'app-employee-roaster',
  templateUrl: './employee-roaster.component.html',
  styleUrls: ['./employee-roaster.component.scss']
})
export class EmployeeRoasterComponent implements OnInit {
  public empRosterList: Array<any> = [];
  public empList: Array<any> = [];
  public emp_id: String = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.callingJQuery();
    this.rosterList();
    this.employeeList();
  }

  public callingJQuery() {
    $('.mdb-select').materialSelect();
    $('.datepicker').pickadate();
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      // defaultDate: '2021-03-30',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: this.empRosterList
      // events: [{
      //   title: 'Pick-up - Chandni Chowk - 02:30',
      //   start: '2021-01-01'
      // },{
      //   title: 'Drop-of - Rajiv Chowk - 03:30',
      //   start: '2021-01-01'
      // }],
      // events: [{
      //   title: 'All Day Event',
      //   start: '2021-01-01'
      // },
      // {
      //   title: 'Long Event',
      //   start: '2021-01-07',
      //   end: '2021-01-10'
      // },
      // {
      //   id: 999,
      //   title: 'Repeating Event',
      //   start: '2021-01-09T16:00:00'
      // },
      // {
      //   id: 999,
      //   title: 'Repeating Event',
      //   start: '2021-01-16T16:00:00'
      // },
      // {
      //   title: 'Conference',
      //   start: '2021-01-11',
      //   end: '2021-01-13'
      // },
      // {
      //   title: 'Meeting',
      //   start: '2021-01-12T10:30:00',
      //   end: '2021-01-12T12:30:00'
      // },
      // {
      //   title: 'Lunch',
      //   start: '2021-01-12T12:00:00'
      // },
      // {
      //   title: 'Meeting',
      //   start: '2021-01-12T14:30:00'
      // },
      // {
      //   title: 'Happy Hour',
      //   start: '2021-01-12T17:30:00'
      // },
      // {
      //   title: 'Dinner',
      //   start: '2021-01-12T20:00:00'
      // },
      // {
      //   title: 'Birthday Party',
      //   start: '2021-01-13T07:00:00'
      // },
      // {
      //   title: 'Click for Google',
      //   url: 'https://google.com/',
      //   start: '2021-01-28'
      // }
      // ]
    })
  }
  // empData(event, value) {
  //   console.log('value=>', value)
  //   console.log('event=>', event)
  // }
  employeeList() {
    this.dataService.get(`admin/employeeList`).subscribe(res => {
      if (res['responseCode'] == 200) {
        this.empList = res['data'];
      }
    })
  }
  rosterList() {
    this.dataService.get(`admin/employeeRosterList?emp_id=2`).subscribe(res => {
      if (res['responseCode'] == 200) {
        this.empRosterList = res['data'];
        this.callingJQuery();
      }
    })
  }

}
