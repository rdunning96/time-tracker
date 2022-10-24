import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingListComponent } from './scheduler/components/booking-list/booking-list.component';
import { RoomListComponent } from './scheduler/components/room-list/room-list.component';
import { TimeListComponent } from './scheduler/components/time-list/time-list.component';
import { CreateRoomComponent } from './board-admin/create-room/create-room.component';
import { AdminRoomListComponent } from './board-admin/admin-room-list/admin-room-list.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
//import material datepicker
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { CalendarComponent } from './scheduler/components/calendar/calendar.component';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    SchedulerComponent,
    BookingListComponent,
    RoomListComponent,
    TimeListComponent,
    CreateRoomComponent,
    AdminRoomListComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatRadioModule,
    MatListModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
