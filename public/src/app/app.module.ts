import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './FAQ/FAQ.component';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      AboutComponent,
      FAQComponent,
      RegisterComponent,
      QuestionsComponent,
      ChatComponent,
      ProfileComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      HttpService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
