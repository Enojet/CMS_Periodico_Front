import { Routes } from '@angular/router';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { DraftListComponent } from './components/draft-list/draft-list.component';
import { DraftDetailsComponent } from './components/draft-details/draft-details.component';
import { ModifyArticleComponent } from './components/modify-article/modify-article.component';

export const WRITER_ROUTES: Routes = [
    {
        path: "create-article",
        component: CreateArticleComponent
    },
    {
        path: "draft-list",
        component: DraftListComponent
    },
    {
        path: "draft-details",
        component: DraftDetailsComponent
    },
    {
        path: "modify-article",
        component: ModifyArticleComponent
    },
];
