import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-query-params-grand-child',
  templateUrl: './query-params-grand-child.component.html',
  styleUrls: ['./query-params-grand-child.component.css']
})
export class QueryParamsGrandChildComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router ) {}

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ( element )
    });
  }
  
  uuid1: string;
  uuid: string;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.uuid1 = params['uuid1'];
      this.uuid = params['uuid'];
    });
  }

  back(){
    this.router.navigate(['../'], {relativeTo: this.route, queryParamsHandling: 'merge'});
  }

}
