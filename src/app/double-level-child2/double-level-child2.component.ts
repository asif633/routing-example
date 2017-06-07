import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-double-level-child2',
  templateUrl: './double-level-child2.component.html',
  styleUrls: ['./double-level-child2.component.css']
})
export class DoubleLevelChild2Component implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }
  
  uuid: string;
  id: number;

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.uuid = params['uuid'];
      this.id = +params['id'];
    });
  }

}
