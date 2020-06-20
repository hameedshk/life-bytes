import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { PageService } from 'src/app/services/page.service';
import { TileDetailComponent } from './tile-detail/tile-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule,DashboardRoutingModule],
  declarations: [DashboardComponent, TileDetailComponent],
  providers: [PageService]
})
export class DashboardModule { }
