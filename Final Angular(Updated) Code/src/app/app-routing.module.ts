import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { BookdialogComponent } from './components/bookdialog/bookdialog.component';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditComplaintComponent } from './components/edit-complaint/edit-complaint.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { EditOfferComponent } from './components/edit-offer/edit-offer.component';
import { EditbookingsComponent } from './components/editbookings/editbookings.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './components/login/login.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { OfferComponent } from './components/offer/offer.component';
import { OrganizerToolbarComponent } from './components/organizer-toolbar/organizer-toolbar.component';
import { OrganizernavbarComponent } from './components/organizernavbar/organizernavbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UpdateOrganizerProfileComponent } from './components/update-organizer-profile/update-organizer-profile.component';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';
import { UserComponent } from './components/user/user.component';
import { UserbookinghistoryComponent } from './components/userbookinghistory/userbookinghistory.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UsernavbarComponent } from './components/usernavbar/usernavbar.component';
import { ViewCategoryComponent } from './components/view-category/view-category.component';
import { ViewComplaintsComponent } from './components/view-complaints/view-complaints.component';
import { ViewOfferComponent } from './components/view-offer/view-offer.component';
import { ViewOrganizerBookingComponent } from './components/view-organizer-booking/view-organizer-booking.component';
import { ViewUserEventComponent } from './components/view-user-event/view-user-event.component';
import { ViewusercomplaintComponent } from './components/viewusercomplaint/viewusercomplaint.component';

const routes: Routes = [
                        // {path:"homepage", component:HomepageComponent},
                        {path:"adminnavbar",component:AdminnavbarComponent},
                        {path:"organizernavbar",component:OrganizernavbarComponent},
                        {path:"usernavbar",component:UsernavbarComponent},

                        {path:"organizerdashboard",component:ViewOrganizerBookingComponent},
                        {path:"admintoolbar",component:ToolbarComponent},
                        {path:"usertoolbar",component:UserComponent},
                        {path:"addCategory",component:AddCategoryComponent},
                        {path:"viewCategory",component:ViewCategoryComponent},
                        {path:"editCategory/:id",component:EditCategoryComponent},
                        // {path:"home",component:HomeComponent},
                        {path:"addEvent",component:AddEventComponent},
                        {path:"edit/:id",component:EditEventComponent},
                        {path:"registration",component:RegistrationComponent},
                        {path:"addOffer",component:OfferComponent},
                        {path:"viewOffers",component:ViewOfferComponent},
                        {path:"viewOrganizerBookings",component:ViewOrganizerBookingComponent},
                        {path:"editBooking/:id",component:EditbookingsComponent},
                        {path:"editOffer/:id",component:EditOfferComponent},
                        {path:"organizerList",component:MembersListComponent},
                        {path:"events",component:EventsComponent},
                        {path:"viewComplaints",component:ViewComplaintsComponent},
                        {path:"updateOrganizerProfile",component:UpdateOrganizerProfileComponent},
                        //{path:"login",component:LoginComponent},
                         

                        {path:"updateUserProfile",component:UpdateUserProfileComponent},
                        {path:"viewUserEvent",component:ViewUserEventComponent},
                        {path:"viewUserbookings",component:UserbookinghistoryComponent},
                        {path:"userComplaint" ,component:ComplaintComponent},
                        
                        {path:"viewUserComplaints",component:ViewusercomplaintComponent},
                        {path:"editComplaint/:id",component:EditComplaintComponent},
                      {path:"confirmBooking/:id",component:BookdialogComponent},
                      {path:"loginform",component:LoginFormComponent},
                      {path:"userList",component:UserlistComponent},
                      // {path:'',redirectTo:"home",pathMatch:'full'},
                      {path:'',component:HomeComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
