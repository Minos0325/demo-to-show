import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';

import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(
      [{path: '', component: LoginComponent}]),
  ],
  declarations: [LoginComponent],
})
export class LoginModule {
}
