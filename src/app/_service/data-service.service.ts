import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router:Router) { }

  public logout(){
    this.router.navigate(['/logout']);
  }

}
