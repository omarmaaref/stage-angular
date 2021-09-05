
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { FormationListComponent } from './client/formation-list/formation-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreateFormationComponent } from './admin/create-formation/create-formation.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'formation',
    component:FormationListComponent,
    canActivate: [AuthGuard],
  },
    {
      path: 'dashboard',
      component:DashboardComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'add_formation',
      component:CreateFormationComponent,
      canActivate: [AuthGuard],
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
