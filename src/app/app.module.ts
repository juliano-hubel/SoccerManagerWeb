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


import { AuthService } from './services/auth.service';
//Directives
import {NumberDirective} from './directives/number.directive';
import {MaskDirective} from './directives/mask.directive';
import { TeachersPageComponent } from './pages/teachers-page/teachers-page.component';
import { TeacherDetailsComponent } from './pages/teacher-details/teacher-details.component';
import { TeacherEditComponent } from './pages/teacher-edit/teacher-edit.component';
import { TeacherCreateComponent } from './pages/teacher-create/teacher-create.component';

@NgModule({
  declarations: [
    MaskDirective,
    NumberDirective,
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
    StudentCreateComponent,
    TeachersPageComponent,
    TeacherDetailsComponent,
    TeacherEditComponent,
    TeacherCreateComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    Routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
