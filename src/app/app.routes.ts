import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent }
];
