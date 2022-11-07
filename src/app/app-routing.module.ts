import { CoachClientsDetailComponent } from './components/dashboard/coach-clients-detail/coach-clients-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './components/login/start-page/start-page.component';
import { CoachSignUpComponent } from './components/login/coach-sign-up/coach-sign-up.component';
import { ClientSignUpComponent } from './components/login/client-sign-up/client-sign-up.component';
import { ClientMealPlansComponent } from './components/dashboard/client-meal-plans/client-meal-plans.component';
import { CoachMealPlansComponent } from './components/dashboard/coach-meal-plans/coach-meal-plans.component';
import { CoachMealAddComponent } from './components/dashboard/coach-meal-add/coach-meal-add.component';
import { CoachClientsComponent } from './components/dashboard/coach-clients/coach-clients.component';
import { CoachTrainingRoutineComponent } from './components/dashboard/coach-training-routine/coach-training-routine.component';
import { ClientTrainingRoutineComponent } from './components/dashboard/client-training-routine/client-training-routine.component';
import { CoachProfileComponent } from './components/dashboard/coach-profile/coach-profile.component';
import { ClientProfileComponent } from './components/dashboard/client-profile/client-profile.component';
import { ClientStatisticsComponent } from './components/dashboard/client-statistics/client-statistics.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { ClientTrainingInformationComponent } from './components/dashboard/client-training-information/client-training-information.component';
import { CoachTrainingAddComponent } from './components/dashboard/coach-training-add/coach-training-add.component';
import { CoachTrainingDetailComponent } from './components/dashboard/coach-training-detail/coach-training-detail.component';

const routes: Routes = [
  {path: '', redirectTo: "startPage", pathMatch: 'full'},
  {path: 'startPage', component: StartPageComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'coach-meal-plans', component: CoachMealPlansComponent},
    {path: 'coach-meal-add', component: CoachMealAddComponent},
    {path: 'coach-clients', component: CoachClientsComponent},
    {path: 'coach-clients-detail/:id', component: CoachClientsDetailComponent},
    {path: 'coach-training-routine', component: CoachTrainingRoutineComponent},
    {path: 'coach-training-add', component: CoachTrainingAddComponent},
    {path: 'coach-training-detail/:id', component: CoachTrainingDetailComponent},
    {path: 'coach-profile', component: CoachProfileComponent},
    {path: 'client-meal-plans', component: ClientMealPlansComponent},
    {path: 'client-training-routine', component: ClientTrainingRoutineComponent},
    {path: 'client-training-information/:id', component: ClientTrainingInformationComponent},
    {path: 'client-profile', component: ClientProfileComponent},
    {path: 'client-statistics', component: ClientStatisticsComponent},
  ]},
  {path: 'coach-sign-up', component: CoachSignUpComponent},
  {path: 'sign-in/:user', component: SignInComponent},
  {path: 'client-sign-up', component: ClientSignUpComponent},
  {path: '**', redirectTo: "startPage", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
