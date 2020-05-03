import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    SkillsComponent,
    EducationComponent,
    WorkExperienceComponent,
    ProjectComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      closeButton: true,
      progressBar: true,
      messageClass: 'toast-message',
      tapToDismiss: true,
      onActivateTick: true,
      progressAnimation: 'decreasing',
      easing: 'ease-in',
      maxOpened: 7
    }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
