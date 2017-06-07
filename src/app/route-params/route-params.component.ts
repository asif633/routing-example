import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.css']
})
export class RouteParamsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  uuid: string;

  ngOnInit() {
    this.uuid = UUID.UUID();
  }

  child3() {
    this.router.navigate(['double-child3', this.uuid], { relativeTo: this.activatedRoute });
  }

}
