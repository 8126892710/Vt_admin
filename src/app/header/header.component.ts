import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data-service.service';
import { Router } from '@angular/router';
declare var $:any
declare var PerfectScrollbar:any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dataService:DataService,
    private router:Router
    ) { }

  ngOnInit() {
    this.callingJQuery();
  }

  callingJQuery(){

    $(".button-collapse").sideNav();

    var container = document.querySelector('.custom-scrollbar');
    var ps = new PerfectScrollbar(container, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });

    // Data Picker Initialization
    // $('.datepicker').pickadate();

    // Material Select Initialization
    // $(document).ready(function () {
    //   $('.mdb-select').material_select();
    // });

    // Tooltips Initialization
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    // Small chart
    // $(function () {
    //   $('.min-chart#chart-sales').easyPieChart({
    //     barColor: "#FF5252",
    //     onStep: function (from, to, percent) {
    //       $(this.el).find('.percent').text(Math.round(percent));
    //     }
    //   });
    // });
   
    $(function () {
      $('#dark-mode').on('click', function (e) {

        e.preventDefault();
        $('h4, button').not('.check').toggleClass('dark-grey-text text-white');
        $('.list-panel a').toggleClass('dark-grey-text');

        $('footer, .card').toggleClass('dark-card-admin');
        $('body, .navbar').toggleClass('white-skin navy-blue-skin');
        $(this).toggleClass('white text-dark btn-outline-black');
        $('body').toggleClass('dark-bg-admin');
        $('h6, .card, p, td, th, i, li a, h4, input, label').not(
          '#slide-out i, #slide-out a, .dropdown-item i, .dropdown-item').toggleClass('text-white');
        $('.btn-dash').toggleClass('grey blue').toggleClass('lighten-3 darken-3');
        $('.gradient-card-header').toggleClass('white black lighten-4');
        $('.list-panel a').toggleClass('navy-blue-bg-a text-white').toggleClass('list-group-border');

      });
    });
  }

  public logout(){
    this.dataService.logout();
  }

  public myAccount(){
    this.router.navigate(['/admin/my-account']);
  }

}
