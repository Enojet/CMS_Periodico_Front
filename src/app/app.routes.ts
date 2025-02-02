import { Routes } from '@angular/router';
import { writerGuard } from './writer/guard/writer.guard';
import { NotFoundComponent } from './notfound/not-found/not-found.component';
import { editorGuard } from './editor/guard/editor.guard';

export const routes: Routes = [
    {

        path: "auth",
        loadChildren: () => import("./auth/auth.routes").then(module => module.AUTH_ROUTES)
    },
    {
        path: "editor",
        canActivate: [editorGuard],
        loadChildren: () => import("./editor/editor.routes").then(module => module.EDITOR_ROUTES)
    },
    {
        path: "writer",
        canActivate: [writerGuard],
        loadChildren: () => import("./writer/writer.routes").then(module => module.WRITER_ROUTES)
    },
    {
        path: "home",
        loadChildren: () => import("./home/home.routes").then(module => module.HOME_ROUTES)
    },
    {
        path: "",
        redirectTo: "/home/homepage",
        pathMatch: 'full'
        // si no se introduce ruta redirige a la homepage
    },
    {
        path: "**",
        component: NotFoundComponent
        // si la ruta es incorrecta muestra el error
    }

];
