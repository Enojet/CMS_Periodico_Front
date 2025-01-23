import { Component, inject, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  articleService: HomepageService = inject(HomepageService)
  publishedArticles: any = []
  ngOnInit(): void {
    this.articleService.publishedArticles().subscribe ((data:any)=>{
      this.publishedArticles = data.articles.filter((article: any) => article.status === 'published');
     
    })
  }

}
