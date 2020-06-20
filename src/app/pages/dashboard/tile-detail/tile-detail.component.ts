import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
import { TileDetail } from 'src/app/model/TileDetail';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.scss']
})
export class TileDetailComponent implements OnInit {
  titleId:number;
  titleDetails:TileDetail;
  constructor(private _router: Router, private _route: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    const tileid = this._route.snapshot.paramMap.get('id');
    this.titleId=Number(tileid);
    console.log(this.titleId);
    const tileListData=this._route.snapshot.data['tileData'];
    this.titleDetails=tileListData.filter(x=>x.id==tileid)[0];

  }

}
