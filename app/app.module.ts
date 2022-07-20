import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HostelDetailComponent } from './hostel-detail/hostel-detail.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { AvailableRoomComponent } from './available-room/available-room.component';
import { FeatureAvailableComponent } from './feature-available/feature-available.component';
import { RoomListComponent } from './room-list/room-list.component';

import { AddFeatureComponent } from './add-feature/add-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    HomeComponent,
    AboutComponent,
    EmployeeLoginComponent,
    HostelDetailComponent,
    BookRoomComponent,
    AllBookingComponent,
    AvailableRoomComponent,
    FeatureAvailableComponent,
    RoomListComponent,
  
    AddFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
