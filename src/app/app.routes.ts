import { Routes } from '@angular/router';

export const routes: Routes = [

    {        
        // Ruta principal de la aplicación: si el usuario no pone ruta, se va a /auth
        // El redirectTo indica la ruta a la que se redirigirá
        // El pathMatch indica que se debe hacer match con la ruta vacía (no con una ruta que comience con /)
        path: '',
        redirectTo: 'auth',  
        pathMatch: 'full'
    },
    {
        
        path: "auth",
        // cuando esté listo el guard se añade aquí para que solo los usuarios autorizados puedan acceder a estas rutas
        loadChildren: () => import("./auth/auth.routes").then(module => module.AUTH_ROUTES)
    },
    {
        path: "editor",
        // cuando esté listo el guard se añade aquí para que solo los usuarios autorizados puedan acceder a estas rutas
        loadChildren: () => import("./editor/editor.routes").then(module => module.EDITOR_ROUTES)
    },
    {
        path: "writer",
        // cuando esté listo el guard se añade aquí para que solo los usuarios autorizados puedan acceder a estas rutas
        loadChildren: () => import("./writer/writer.routes").then(module => module.WRITER_ROUTES)
    },
    {
        path: "home",
        loadChildren: () => import("./home/home.routes").then(module => module.HOME_ROUTES)
    },


    {
        // ruta por defecto: si el usuario no pone ruta, se va a /auth
        path: "**",
        redirectTo: "auth"
    },
];
