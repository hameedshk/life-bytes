import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { BodyComponent } from './layout/body/body/body.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageService } from './services/page.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
