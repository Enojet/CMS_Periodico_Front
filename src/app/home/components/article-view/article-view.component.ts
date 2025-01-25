import { Component, inject, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'] 
})
export class ArticleViewComponent implements OnInit {
  articleService: HomepageService = inject(HomepageService);
  route = inject(ActivatedRoute);

  article: any = []; 
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id: string = params['id'];
      this.articleService.getArticleById(id).subscribe((data: any) => {
        this.article = data; 
      });
    });
  }
}


