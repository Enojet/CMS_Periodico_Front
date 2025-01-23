import { Routes } from '@angular/router';

export const routes: Routes = [
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
    }
];
