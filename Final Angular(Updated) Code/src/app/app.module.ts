import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewCategoryComponent } from './components/view-category/view-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventsComponent } from './components/events/events.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarEventComponent } from './components/navbar-event/navbar-event.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { OfferComponent } from './components/offer/offer.component';
import { ViewOfferComponent } from './components/view-offer/view-offer.component';
import { EditOfferComponent } from './components/edit-offer/edit-offer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './components/index/index.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ViewUserEventComponent } from './components/view-user-event/view-user-event.component';
import { BookdialogComponent } from './components/bookdialog/bookdialog.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SearchEventPipe } from './utility/search-event.pipe';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RaiseComplaintComponent } from './components/raise-complaint/raise-complaint.component';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { ViewComplaintsComponent } from './components/view-complaints/view-complaints.component';
import { EditComplaintComponent } from './components/edit-complaint/edit-complaint.component';
import { ViewusercomplaintComponent } from './components/viewusercomplaint/viewusercomplaint.component';
import { UserbookinghistoryComponent } from './components/userbookinghistory/userbookinghistory.component';
import { ViewOrganizerBookingComponent } from './components/view-organizer-booking/view-organizer-booking.component';
import { EditbookingsComponent } from './components/editbookings/editbookings.component';
import { OrganizerToolbarComponent } from './components/organizer-toolbar/organizer-toolbar.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { OrganizernavbarComponent } from './components/organizernavbar/organizernavbar.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UsernavbarComponent } from './components/usernavbar/usernavbar.component';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';
import { UpdateOrganizerProfileComponent } from './components/update-organizer-profile/update-organizer-profile.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    EditCategoryComponent,
    AddEventComponent,
    EventsComponent,
    EditEventComponent,
    HomepageComponent,
    NavbarEventComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    OfferComponent,
    ViewOfferComponent,
    EditOfferComponent,
    IndexComponent,
    MembersListComponent,
    ToolbarComponent,
    LoginComponent,
    UserComponent,
    ViewUserEventComponent,
    BookdialogComponent,
    HomeComponent,
    RegisterFormComponent,
    LoginFormComponent,
    SearchEventPipe,
    FeedbackFormComponent,
    RaiseComplaintComponent,
    ComplaintComponent,
    ViewComplaintsComponent,
    EditComplaintComponent,
    ViewusercomplaintComponent,
    UserbookinghistoryComponent,
    ViewOrganizerBookingComponent,
    EditbookingsComponent,
    OrganizerToolbarComponent,
    AdminnavbarComponent,
    OrganizernavbarComponent,
    UserlistComponent,
    UsernavbarComponent,
    UpdateUserProfileComponent,
    UpdateOrganizerProfileComponent,
   
    
    

     //MatToolbarModule,
     //MatIconModule
    ////MatSidenavModule
    
  ],
  imports: [
    MaterialModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
