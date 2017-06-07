import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css']
})
export class QueryParamsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  uuid: string;

  ngOnInit() {
    this.uuid = UUID.UUID();
  }

  child() {
    this.router.navigate(['child'], { relativeTo: this.activatedRoute, fragment: 'top', preserveFragment: true, queryParams: { uuid: this.uuid }, queryParamsHandling: 'merge' });
  }

}
