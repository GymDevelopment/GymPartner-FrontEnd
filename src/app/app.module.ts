import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientSignInComponent } from './components/login/client-sign-in/client-sign-in.component';
import { ClientSignUpComponent } from './components/login/client-sign-up/client-sign-up.component';
import { CoachSignInComponent } from './components/login/coach-sign-in/coach-sign-in.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ClientSignInComponent,
    ClientSignUpComponent,
    CoachSignInComponent,
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
    CoachProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
