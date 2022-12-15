import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLoginForm!: FormGroup;

  constructor(private rut: Router,private toastr : ToastrService) { }

  ngOnInit(): void {

    this.myLoginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  submit(): void {

    if (this.myLoginForm.value.username == "admin" && this.myLoginForm.value.password == "admin") {
      console.log(this.myLoginForm.value);
      this.rut.navigateByUrl('admindashboard')
      this.toastr.success('Successfully login!','Admin Welcome!');
    }else if(this.myLoginForm.value.username == "ct" && this.myLoginForm.value.password == "ct") {
      console.log(this.myLoginForm.value);
      this.rut.navigateByUrl('ctdashboard');
      this.toastr.success('Successfully login!','Class Teacher Welcome!');
    }else if(this.myLoginForm.value.username == "faculty" && this.myLoginForm.value.password == "faculty"){
      console.log(this.myLoginForm.value);
      this.rut.navigateByUrl('facdashboard');
      this.toastr.success('Successfully login!','Faculty Welcome!');
    }else if(this.myLoginForm.value.username == "student" && this.myLoginForm.value.password == "student"){
      console.log(this.myLoginForm.value);
      this.rut.navigateByUrl('studashboard');
      this.toastr.success('Successfully login!','Student Welcome!');
    }else{
      console.log("enter correct choice..");
      this.toastr.error('Please Enter Correct Choice!','Invalid Credentials!');
    }


  }

}
