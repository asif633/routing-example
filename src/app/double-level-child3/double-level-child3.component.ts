import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumb } from '../shared/breadcrumb.model';

@Component({
  selector: 'app-double-level-child3',
  templateUrl: './double-level-child3.component.html',
  styleUrls: ['./double-level-child3.component.css']
})
export class DoubleLevelChild3Component implements OnInit {

  constructor(private actroute:ActivatedRoute, private router: Router) { }
  
  breadcrumb: BreadCrumb[] = [];
  parameter: string;

  ngOnInit() {
    let bread: BreadCrumb = {title: '', url: ''};
    this.actroute.params.subscribe(param => this.parameter = param['id']);
    this.actroute.parent.data.subscribe(data => bread.title = data.title);
    this.actroute.parent.url.subscribe(url => {
      bread.url = url[0].path;
      this.breadcrumb.push(bread);
    }
    );
    this.actroute.data.subscribe(data => this.breadcrumb.push({title: data.title, url: null}));
  }

}
