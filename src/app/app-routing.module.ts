import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddappoinmentComponent } from './appointment/addappoinment/addappoinment.component';
import { AllappoinmentComponent } from './appointment/allappointment/allappoinment.component';
import { CancelappointmentComponent } from './appointment/cancelappointment/cancelappointment.component';
import { EditappointmentComponent } from './appointment/editappointment/editappointment.component';

import { AsidenavComponent } from './mastertheme/asidenav/asidenav.component';
import {AdddoctorComponent } from './doctor/adddoctor/adddoctor.component'
import { AlldoctorsComponent } from './doctor/alldoctors/alldoctors.component';
import { DoctordetailsComponent } from './doctor/doctordetails/doctordetails.component';
import { EditdoctorsComponent } from './doctor/editdoctors/editdoctors.component';
import { AddpatientsComponent } from './patients/addpatients/addpatients.component';
import { AllpatientsComponent } from './patients/allpatients/allpatients.component';
import { EditpatientdetailsComponent } from './patients/editpatientdetails/editpatientdetails.component';
import { PatientdetailsComponent } from './patients/patientdetails/patientdetails.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'patients', 
  children:[{path:'addpatients',component:AddpatientsComponent,  pathMatch: 'full'},
{path:'allpatients', component:AllpatientsComponent,  pathMatch: 'full'},
{path:'patientdetails',component:PatientdetailsComponent,pathMatch:'full'},
{path:'editpatientdetails',component:EditpatientdetailsComponent,pathMatch:'full'}]
},
{path:'doctor',
children:[{path:'adddoctor',component:AdddoctorComponent,pathMatch:'full'},
{path:'alldoctors',component:AlldoctorsComponent,pathMatch:'full'},
{path:'doctordetails',component:DoctordetailsComponent,pathMatch:'full'},
{path:'editdoctors',component:EditdoctorsComponent,pathMatch:'full'}]
},
{path:'appointment',
children:[{path:'addappoinment',component:AddappoinmentComponent,pathMatch:'full'},
{path:'allappointment',component:AllappoinmentComponent,pathMatch:'full'},
{path:'editappointment',component:EditappointmentComponent,pathMatch:'full'},
{path:'cancelappointment',component:CancelappointmentComponent,pathMatch:'full'},
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
