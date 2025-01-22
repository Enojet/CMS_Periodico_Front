import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomepageComponent} from './app/home/components/homepage/homepage.component'



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
