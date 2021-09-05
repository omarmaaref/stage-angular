import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminNavBarComponent } from './components/admin-nav-bar/admin-nav-bar.component';
import { ClientNavBarComponent } from './components/client-nav-bar/client-nav-bar.component';
import { FormationListComponent } from './client/formation-list/formation-list.component';
import { CreateFormationComponent } from './admin/create-formation/create-formation.component';
import { AddReviewComponent } from './client/add-review/add-review.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    LoadingComponent,
    MainNavComponent,
    NavBarComponent,
    ProfileComponent,
    HomeComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    DashboardComponent,
    AdminNavBarComponent,
    ClientNavBarComponent,
    FormationListComponent,
    CreateFormationComponent,
    AddReviewComponent,

  ],
  imports: [
  FormsModule,
  ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
        BrowserModule,

        AuthModule.forRoot({
          ...env.auth,
        }),
           AuthModule.forRoot({
              ...env.auth,
              httpInterceptor: {
                allowedList: [`${env.dev.serverUrl}/formation`],
              },
            }),
  ],
  providers: [
  HttpClientModule,
  {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthHttpInterceptor,
                    multi: true,
                  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
