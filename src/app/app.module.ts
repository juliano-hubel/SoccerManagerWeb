import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Routes
import{ Routing, RoutingProviders} from './app.routing';

//root
import { AppComponent } from './app.component';

//shared
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';

//components
import { StudentListComponent } from './components/student-list/student-list.component';

//pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentEditComponent } from './pages/student-edit/student-edit.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SubMenuComponent,
    StudentListComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    StudentsPageComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentCreateComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
