import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-double-level-child1',
  templateUrl: './double-level-child1.component.html',
  styleUrls: ['./double-level-child1.component.css']
})
export class DoubleLevelChild1Component implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }
  
  uuid: string;
  
  ngOnInit() {
    this.actRoute.params.subscribe(parma => this.uuid = parma['someId']);
  }

}
