import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
     loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
    // canActivate: [RoleGuardService],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
