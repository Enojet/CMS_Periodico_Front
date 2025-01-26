import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { CategoryComponent } from './components/category/category.component';

export const HOME_ROUTES: Routes = [
    {path:'homepage',
        component: HomepageComponent
    },
    {path:'articleView/:id',
        component: ArticleViewComponent
    },
    {
        path:'category/:category',
        component: CategoryComponent
    }
];
