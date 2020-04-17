import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {throwError} from 'rxjs';
import { UsersApi } from '../users.api';

import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    private usersService: UsersApi,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private msg: NzMessageService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

  }

  doLogin() {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) {
      return;
    }
    this.usersService.getToken(this.validateForm.value.userName, this.validateForm.value.password)
      .subscribe(response => {
        console.log('Got token successfully');
        this.route.queryParams.subscribe(queryParam => {
          const redirectTo = queryParam['redirectTo'];
          if (!redirectTo) {
            this.router.navigate(['/main']);
          } else {
            this.router.navigateByUrl(redirectTo);
          }

        });
      }, error => {
        if (error.status === 404) {
          this.msg.error('Please double check your account name and password.');
        } else {
          throwError(error);
        }

      });
  }
}
