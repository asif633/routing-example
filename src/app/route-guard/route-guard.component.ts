import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-guard',
  templateUrl: './route-guard.component.html',
  styleUrls: ['./route-guard.component.css']
})
export class RouteGuardComponent implements OnInit {

  constructor(private logServ: LoginService, private router: Router) { }

  ngOnInit() {
  }
  
  logout(){
    this.logServ.logout().then(onresolve=> this.router.navigate(['../']));
  }
}
