import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { Tile } from 'src/app/model/tile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tiles:Tile;
  constructor(private pageService: PageService) { }

  ngOnInit() {
   this.pageService.getTileList().subscribe((data)=>{
    this.tiles=data;
    });
  }

  titleClick(id:number){
    console.log('tile clicked '+id);
  }

}
