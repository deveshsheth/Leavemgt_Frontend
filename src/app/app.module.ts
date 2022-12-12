import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { StudentsModule } from './students/students.module';
import { FacultyModule } from './faculty/faculty.module';
import { ClassteacherModule } from './classteacher/classteacher.module';
import { AdminModule } from './admin/admin.module';
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent } from './students/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ToastrModule.forRoot({
      timeOut: 3000, 
      closeButton: true,
      progressBar: true,
    }),
    StudentsModule,
    FacultyModule,
    ClassteacherModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
