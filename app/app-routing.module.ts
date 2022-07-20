import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddFeatureComponent } from './add-feature/add-feature.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { AvailableRoomComponent } from './available-room/available-room.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { FeatureAvailableComponent } from './feature-available/feature-available.component';

import { HomeComponent } from './home/home.component';
import { HostelDetailComponent } from './hostel-detail/hostel-detail.component';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [

{path:'employees', component:EmployeeListComponent},
{path: 'create-employee', component: CreateEmployeeComponent},
{path:'',redirectTo:'employee-login',pathMatch:'full'},
{ path: 'home', component: HomeComponent },
{path:'about',component:AboutComponent},
{path: 'update-employee/:id', component: UpdateEmployeeComponent},
{path: 'employee-details/:id', component: EmployeeDetailsComponent},
{path:'employee-login',component:EmployeeLoginComponent},
{path:'hostel-detail',component:HostelDetailComponent},
{path:'hostel-detail/book-room',component:BookRoomComponent},
{path:'hostel-detail/all-booking',component:AllBookingComponent},
{path:'hostel-detail/available-room',component:AvailableRoomComponent},
{path:'hostel-detail/feature-available',component:FeatureAvailableComponent},
{path:'hostel-detail/room-list',component:RoomListComponent},
{path:'hostel-detail/add-feature',component:AddFeatureComponent}




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
