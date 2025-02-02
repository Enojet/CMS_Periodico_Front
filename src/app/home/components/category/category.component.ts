import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  articleService: HomepageService = inject(HomepageService);
  route = inject(ActivatedRoute);
  publishedArticles: any[] = [];
  article: any = [];
  sectionFromParams: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const sectionFromParams = params['category'];

      this.articleService.publishedArticles().subscribe((data: any) => {
        this.publishedArticles = data.filter(
            (article: any) =>
             article.section === sectionFromParams
        );
      });
    });

    this.route.params.subscribe(params=> {
      this.sectionFromParams = params['category']
    })
  }
  
}
