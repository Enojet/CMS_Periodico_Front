import { Routes } from '@angular/router';
import { ModifyArticleComponent } from './components/modify-article/modify-article.component';
import { RevisableListComponent } from './components/revisable-list/revisable-list.component';

export const EDITOR_ROUTES: Routes = [
    {
        path:"modify-article",
        component:ModifyArticleComponent
    },
    {
        path:"revisable-list",
        component:RevisableListComponent
    }
];


