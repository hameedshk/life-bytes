import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TileDetailComponent } from './tile-detail/tile-detail.component';
import { TileDetailResolverService } from 'src/app/services/tile-detail.resolver';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: TileDetailComponent,
        resolve:{tileData:TileDetailResolverService}
    },
    {
        path: '**', redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
