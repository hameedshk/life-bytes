import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.scss']
})
export class TileDetailComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    const tileId=this._route.snapshot.queryParamMap.get('id');
    console.log(tileId);
    
  }

}
