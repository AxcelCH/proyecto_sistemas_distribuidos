import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { MatriculaComponent } from './modules/matricula/matricula.component';
import { RegistroComponent } from './modules/registro/registro.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'matricula', component: MatriculaComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
