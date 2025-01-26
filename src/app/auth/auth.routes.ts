import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


export const AUTH_ROUTES: Routes = [
    {
        path: '', // Ruta principal de eventos (sin un sub-path específico)
        children: [  // Rutas hijas dentro de la ruta principal
            {
                path: '', // Ruta vacía redirige a login
                redirectTo: 'login',
                pathMatch: 'full'
                                // 'pathMatch: full' indica que si la ruta es exactamente igual a la ruta vacía,
                // se debe redirigir a la ruta especificada ('login' en este caso)
            },
            {
                path: 'register', // Ruta para acceder a registro
                component: RegisterComponent 
            },
            {
                path: 'login', // Ruta para acceder a los detalles de un evento específico
                //canActivate: [authGuard], // El guardia 'authGuard' protege esta ruta
                component: LoginComponent
            },
        ]
    },
];
