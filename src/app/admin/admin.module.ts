import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EdituserComponent } from './users/edituser/edituser.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../components/header/header.component';
import { AppModule } from '../app.module';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { DepartmentComponent } from './department/department.component';
import { RoleComponent } from './role/role.component';
import { GiveapprovalComponent } from './giveapproval/giveapproval.component';
import { UsersComponent } from './users/users.component';
import { FacultylistComponent } from './facultylist/facultylist.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { StuleavesComponent } from './stuleaves/stuleaves.component';


@NgModule({
  declarations: [
    EdituserComponent,
    DashboardComponent,
    AdminsidebarComponent,
    AdminheaderComponent,
    DepartmentComponent,
    RoleComponent,
    GiveapprovalComponent,
    UsersComponent,
   AdduserComponent,
    FacultylistComponent,
    StudentComponent,
    AddstudentComponent,
    EditstudentComponent,
    StuleavesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    DataTablesModule,
    
  ]
})
export class AdminModule { }
