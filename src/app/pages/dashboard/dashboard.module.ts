import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { PageService } from 'src/app/services/page.service';

@NgModule({
  imports: [
  ],
  declarations: [DashboardComponent],
  providers: [PageService]
})
export class DashboardModule { }
