import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';

export const HOME_ROUTES: Routes = [
    {path:'homepage',
        component: HomepageComponent
    },
    {path:'articleView/:id',
        component: ArticleViewComponent
    }
];
