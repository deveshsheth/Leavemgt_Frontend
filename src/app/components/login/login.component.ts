import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLoginForm!: FormGroup;

  constructor(private rut: Router, private toastr: ToastrService, private login: LoginService) { }

  ngOnInit(): void {

    this.myLoginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  submit(): void {

    this.login.getlogin(this.myLoginForm.value).subscribe(res => {
      if (res.code == 200) {

        if (res.results[0].roleid == 1) {
          this.toastr.success('Successfully login!', res.message);
          this.rut.navigateByUrl('admindashboard')
        }
        else if (res.results[0].roleid == 43) {

          this.rut.navigateByUrl('ctdashboard');
          this.toastr.success('Successfully login!', res.message);

        } else if (res.results[0].roleid == 5) {

          this.rut.navigateByUrl('facdashboard');
          this.toastr.success('Successfully login!', res.message);

        } else if (res.results[0].roleid == 2) {

          this.rut.navigateByUrl('studashboard');
          this.toastr.success('Successfully login!', res.message);
        }

      } else {
        this.toastr.error('Please Enter Correct Choice!', 'Invalid Credentials!');
        console.log("Resss " + res.message);
      }
    });


  }

}
