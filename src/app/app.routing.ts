import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HomePageComponent} from './pages/home-page/home-page.component';
import {StudentsPageComponent} from './pages/students-page/students-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentEditComponent } from './pages/student-edit/student-edit.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';




const appRoutes : Routes = 
[
    {path: '', component:StudentCreateComponent},
    {path: 'home', component:HomePageComponent},
    {path: 'alunos', component:StudentsPageComponent},
    {path: 'aluno/:id', component:StudentDetailsComponent},
    {path: 'editar-aluno/:id', component:StudentEditComponent},
    {path: 'novo-aluno', component:StudentCreateComponent}

]


export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);