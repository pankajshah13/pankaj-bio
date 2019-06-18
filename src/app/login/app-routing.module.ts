import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
// import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from '../resume/resume.component';
import { MainComponent } from '../main/main.component';
import { LoginComponent } from './login.component';
const routes: Routes = [



  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'home', component: MainComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      // { path:'contact', component: ContactComponent},
      { path: 'resume', component: ResumeComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
