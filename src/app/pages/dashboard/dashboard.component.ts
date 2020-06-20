import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { Tile } from 'src/app/model/tile';
import { Router, ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tiles: Tile;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.pageService.getTileList().subscribe((data) => {
      this.tiles = data;
    }, (err) => {
      console.log(err);
    });
  }

  titleClick(id: number) {
    this.router.navigateByUrl('dashboard/detail', { queryParams: { 'id': id } });

  }

}
