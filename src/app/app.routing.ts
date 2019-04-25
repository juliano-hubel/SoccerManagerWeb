import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';

//student
import {StudentsPageComponent} from './pages/students-page/students-page.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentEditComponent } from './pages/student-edit/student-edit.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';

//teacher
import { TeachersPageComponent } from './pages/teachers-page/teachers-page.component';
import { TeacherDetailsComponent } from './pages/teacher-details/teacher-details.component';
import { TeacherEditComponent } from './pages/teacher-edit/teacher-edit.component';
import { TeacherCreateComponent } from './pages/teacher-create/teacher-create.component';

//authentication
import { AuthService } from './services/auth.service';


const appRoutes : Routes = 
[
    {path: '', component:LoginPageComponent},
    {path: 'home', canActivate:[AuthService], component:HomePageComponent},
    
    //students
    {path: 'alunos',  canActivate:[AuthService],component:StudentsPageComponent},
    {path: 'aluno/:id', canActivate:[AuthService], component:StudentDetailsComponent},
    {path: 'editar-aluno/:id', canActivate:[AuthService], component:StudentEditComponent},
    {path: 'novo-aluno',   canActivate:[AuthService], component:StudentCreateComponent},

    //teachers
    {path: 'professores',  canActivate:[AuthService],component:TeachersPageComponent},
    {path: 'professor/:id', canActivate:[AuthService], component:TeacherDetailsComponent},
    {path: 'editar-professor/:id', canActivate:[AuthService], component:TeacherEditComponent},
    {path: 'novo-professor',   canActivate:[AuthService], component:TeacherCreateComponent}

]


export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);