import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { BusinessManagementComponent } from './business-management/business-management.component';
import { ResourceComponent } from './resource/resource.component';
import { AnimalComponent } from './animal/animal.component';


import { HttpClientModule } from '@angular/common/http';

import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import {LoadingBarHttpModule} from '@ngx-loading-bar/http';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HomeComponent,
    MaintenanceComponent,
    BusinessManagementComponent,
    ResourceComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule.forRoot(),
    // LoadingBarHttpClientModule,
    // LoadingBarHttpModule,
    LoadingBarRouterModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
