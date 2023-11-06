import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AddStudentComponent } from './features/add-student/add-student.component';
import { ViewAttendanceComponent } from './features/view-attendance/view-attendance.component';
import { ChartComponent } from './features/chart/chart.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent 
  },
  {
    path:"add-student",
    component:AddStudentComponent
  },
  {
    path:"view-attendance",
    component:ViewAttendanceComponent
  },
  {
    path:"chart",
    component:ChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
