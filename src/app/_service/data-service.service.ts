import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  httpOptions:any;

  constructor(
    private http: HttpClient,
    private router:Router,
    private toastr:ToastrService,
    private loader:NgxUiLoaderService
  ) {
  }

  post(url, data) {
    return this.http.post(environment.baseUrl + url, data);
  }

  get(url) {
    return this.http.get(environment.baseUrl + url);
  }

  delete(url) {
    return this.http.delete(environment.baseUrl + url);
  }

  public setCookies(name, value, days?: any): any {
    let date,
      expires;
    if (days) {
      date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toGMTString();
    } else {
      expires = '';
    }
    return document.cookie = name + '=' + value + expires + '; path=/';
  }

  public getCookies(cname): any {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  public removeCookies(name, value): any {
    let date,
      expires;
    date = new Date();
    date.setTime(date.getTime());
    expires = '; expires=' + date.toGMTString();

    document.cookie = name + '=' + value + expires + '; path=/';
  }

  showSuccess(message) {
    this.toastr.success(message);
  }

  showError(message) {
    this.toastr.error(message);
  }

  startLoader() {
    this.loader.start();
  }

  stopLoader() {
    this.loader.stop();
  }

  public logout() {
    // this.stopLoader();
    this.removeCookies('currentUsertoken', '');
    this.removeCookies('currentUser', '');
    window.location.href = "auth/login";
  }

}
