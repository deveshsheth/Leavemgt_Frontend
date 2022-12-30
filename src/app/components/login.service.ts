import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //user:User={userid:0,fullname:"",phoneno:"",email:"",password:"",gender:"",roleId:0,status:0,statusReason:"",otp:""}
  constructor(private http:HttpClient) { }
  getlogin(model:any): Observable<any>{
    return this.http.post(`${environment.BASE_URL}user/userLogin`,model)
  }
}
