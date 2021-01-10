import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../_service/data-service.service';
declare var $:any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(
    private dataService:DataService,
    private fb:FormBuilder,
    private router:Router
  ) { 
    this.loginForm = this.fb.group({
      user_type:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit() {
    this.callingJQuery();
  }

  get f(){
    return this.loginForm.controls;
  }

  public submit(){
    let data = this.loginForm.value;
    // this.dataService.startLoader();
    this.dataService.post('admin/login', data).subscribe(res=>{
      // this.dataService.stopLoader();
      this.dataService.showSuccess(res['responseMessage']);
      this.dataService.setCookies('currentUsertoken', res['data'].token, 0.25);
      this.dataService.setCookies('currentUser', JSON.stringify(res['data']), 0.25);
      this.router.navigate(['/admin/dashboard']).then(() => {
        // window.location.reload();
      });
    });
  }

  public callingJQuery(){
    $('.mdb-select').materialSelect();
  }

}
