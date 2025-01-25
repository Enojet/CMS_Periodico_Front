import { Component, inject, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  
  articleService: HomepageService = inject(HomepageService)

  publishedArticles: any = []

  ngOnInit(): void {
    this.articleService.publishedArticles().subscribe ((data:any)=>{
      this.publishedArticles = data.filter((article: any) => article.status === 'published');
     
    })
  }

}
