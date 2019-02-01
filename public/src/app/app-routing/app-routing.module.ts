import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingComponent } from './app-routing.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AboutComponent } from '../about/about.component';
import { FAQComponent } from '../FAQ/FAQ.component';
import { Routes, RouterModule } from '@angular/router'
import { ChatComponent } from '../chat/chat.component';
import { ProfileComponent } from '../profile/profile.component';
import { QuestionsComponent } from '../questions/questions.component';

const routes: Routes = [
  {path:'',component:AppRoutingComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'about', component:AboutComponent},
  {path:'faq', component:FAQComponent},
  {path:'chat', component:ChatComponent},
  {path:'profile', component:ProfileComponent},
  {path:'questions', component:QuestionsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  declarations: [AppRoutingComponent]
})
export class AppRoutingModule { }
