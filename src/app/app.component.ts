import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ HomepageComponent} from './home/components/homepage/homepage.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CMS_Periodico';
}
