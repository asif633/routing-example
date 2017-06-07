import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-query-params-child',
  templateUrl: './query-params-child.component.html',
  styleUrls: ['./query-params-child.component.css']
})
export class QueryParamsChildComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router ) {}

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ( element )
    });
  }
  
  uuid: string;
  uuid1: string;

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.uuid = params['uuid']);
  }
  
  navigateToGrandChild(){
    this.uuid1 = UUID.UUID();
    this.router.navigate(['grandchild'], {relativeTo: this.route, fragment: 'top', preserveFragment: true, queryParams: {uuid1: this.uuid1}, queryParamsHandling: 'merge'});
  }
  

}
