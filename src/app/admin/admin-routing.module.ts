import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './department/department.component';
import { FacultylistComponent } from './facultylist/facultylist.component';
import { GiveapprovalComponent } from './giveapproval/giveapproval.component';
import { RoleComponent } from './role/role.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { StudentComponent } from './student/student.component';
import { StuleavesComponent } from './stuleaves/stuleaves.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'admindashboard',component:DashboardComponent},
  {path:'admindepartment',component:DepartmentComponent},
  {path:'adminrole',component:RoleComponent},
  {path:'adminusers',component:UsersComponent,children:[
    // {path:'adminadduser',component:AdduserComponent},
    // {path:'adminedituser',component:EdituserComponent}
  ]},
  {path:'admingiveapproval',component:GiveapprovalComponent},
  {path:'adminfacultylist',component:FacultylistComponent},
  {path:'adminadduser',component:AdduserComponent},
    {path:'adminedituser',component:EdituserComponent},
    {path:'adminstudent',component:StudentComponent},
    {path:'adminaddstudent',component:AddstudentComponent},
    {path:'admineditstudent',component:EditstudentComponent},
    {path:'adminstuleaves',component:StuleavesComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
