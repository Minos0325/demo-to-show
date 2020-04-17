import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {RouterModule} from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule
  ],
  providers: [
    CookieService,
  ],
  entryComponents: [
  ]
})
export class SharedModule {
}
