import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-double-level',
  templateUrl: './double-level.component.html',
  styleUrls: ['./double-level.component.css']
})
export class DoubleLevelComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  child3(){
    this.router.navigate(['double-child3'], {relativeTo: this.activatedRoute});
  }

}
