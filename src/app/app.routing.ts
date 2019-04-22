import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HomePageComponent} from './pages/home-page/home-page.component';
import {StudentsPageComponent} from './pages/students-page/students-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentEditComponent } from './pages/student-edit/student-edit.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';
import { AuthService } from './services/auth.service';




const appRoutes : Routes = 
[
    {path: '', component:LoginPageComponent},
    {path: 'home', canActivate:[AuthService], component:HomePageComponent},
    {path: 'alunos',  canActivate:[AuthService],component:StudentsPageComponent},
    {path: 'aluno/:id', canActivate:[AuthService], component:StudentDetailsComponent},
    {path: 'editar-aluno/:id', canActivate:[AuthService], component:StudentEditComponent},
    {path: 'novo-aluno',   canActivate:[AuthService], component:StudentCreateComponent}

]


export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);