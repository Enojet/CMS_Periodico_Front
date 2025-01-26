import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ HomepageComponent} from './home/components/homepage/homepage.component'
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent, RegisterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CMS_Periodico';
}
