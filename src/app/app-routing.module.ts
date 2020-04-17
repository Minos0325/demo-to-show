import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { BusinessManagementComponent } from './business-management/business-management.component';
import { ResourceComponent } from './resource/resource.component';
import { AnimalComponent } from './animal/animal.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/main/home', pathMatch: 'full' },
  {
    path: 'main',
    component: CoreComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: '/main/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'maintenance', component: MaintenanceComponent },
      
      {
        path: 'businessManagement',
        component: BusinessManagementComponent,
        children: [
          { path: 'resource', component: ResourceComponent },
          { path: 'animal', component: AnimalComponent },
        ]
      }
    ],
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
