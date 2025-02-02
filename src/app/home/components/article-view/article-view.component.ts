import { Component, inject, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-article-view',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, DatePipe],
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'],
})
export class ArticleViewComponent implements OnInit {
  articleService: HomepageService = inject(HomepageService);
  route = inject(ActivatedRoute);

  publishedArticles: any[] = []; 
  article: any = null; 

  ngOnInit() {
    
    this.route.params.subscribe((params) => {
      const id = params['_id']; 
      console.log('ID recibido desde la URL:', id);

      
      this.articleService.publishedArticles().subscribe((data: any) => {
        this.publishedArticles = data;
        console.log('Artículos recibidos desde la API:', data);

        
        this.article = this.publishedArticles.find((article) => article._id === id); 
        console.log('Artículo encontrado:', this.article);

       
       
      });
    });
  }
}
