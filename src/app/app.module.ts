import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientSignUpComponent } from './components/login/client-sign-up/client-sign-up.component';
import { CoachSignUpComponent } from './components/login/coach-sign-up/coach-sign-up.component';
import { StartPageComponent } from './components/login/start-page/start-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { ClientProfileComponent } from './components/dashboard/client-profile/client-profile.component';
import { ClientMealPlansComponent } from './components/dashboard/client-meal-plans/client-meal-plans.component';
import { ClientStatisticsComponent } from './components/dashboard/client-statistics/client-statistics.component';
import { ClientTrainingRoutineComponent } from './components/dashboard/client-training-routine/client-training-routine.component';
import { CoachClientsComponent } from './components/dashboard/coach-clients/coach-clients.component';
import { CoachMealAddComponent } from './components/dashboard/coach-meal-add/coach-meal-add.component';
import { CoachMealPlansComponent } from './components/dashboard/coach-meal-plans/coach-meal-plans.component';
import { CoachTrainingRoutineComponent } from './components/dashboard/coach-training-routine/coach-training-routine.component';
import { CoachProfileComponent } from './components/dashboard/coach-profile/coach-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ClientTrainingInformationComponent } from './components/dashboard/client-training-information/client-training-information.component';
import { SafePipe } from './pipes/safe.pipe';
import { CoachClientsDetailComponent } from './components/dashboard/coach-clients-detail/coach-clients-detail.component';
import { CoachTrainingAddComponent } from './components/dashboard/coach-training-add/coach-training-add.component';
import { CoachTrainingDetailComponent } from './components/dashboard/coach-training-detail/coach-training-detail.component';
import { ClientMealInformationComponent } from './components/dashboard/client-meal-information/client-meal-information.component';
import { CoachMealInformationComponent } from './components/dashboard/coach-meal-information/coach-meal-information.component';
import { CoachStatisticsComponent } from './components/dashboard/coach-statistics/coach-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientSignUpComponent,
    CoachSignUpComponent,
    StartPageComponent,
    SignInComponent,
    HomeComponent,
    BodyComponent,
    SidenavComponent,
    ClientProfileComponent,
    ClientMealPlansComponent,
    ClientStatisticsComponent,
    ClientTrainingRoutineComponent,
    CoachClientsComponent,
    CoachMealAddComponent,
    CoachMealPlansComponent,
    CoachTrainingRoutineComponent,
    CoachProfileComponent,
    DashboardComponent,
    ClientTrainingInformationComponent,
    SafePipe,
    CoachClientsDetailComponent,
    CoachTrainingAddComponent,
    CoachTrainingDetailComponent,
    ClientMealInformationComponent,
    CoachMealInformationComponent,
    CoachStatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
