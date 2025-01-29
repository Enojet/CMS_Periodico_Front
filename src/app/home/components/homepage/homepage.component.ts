import { Component, inject, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ RouterModule, HeaderComponent,FooterComponent, CommonModule, SearchComponent, SubscribeComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  
  articleService: HomepageService = inject(HomepageService)

  publishedArticles: any [] = []
  highlightArticles:any []= []
  genericArticles: any []= []

  highlightLimit =2
  genericLimit = 6

  ngOnInit(): void {
    this.articleService.publishedArticles().subscribe ((data:any)=>{
      this.publishedArticles = data
      console.log('Datos completos:', data);
     
      this.highlightArticles = this.publishedArticles
      .filter((article) => article.hightlight === true)
      .slice(0, this.highlightLimit);

      this.genericArticles = data.filter((article:any)=> article.hightlight === false).slice(0,this.genericLimit)

      console.log('Artículos destacados:', this.highlightArticles);
      console.log('Artículos genéricos:', this.genericArticles);
    })
  }

loadMoreHighlight(){
  const currentLength = this.highlightArticles.length;
  const nextLimit = currentLength + 2;

  const allHighlightArticles = this.publishedArticles.filter(
    (article: any) => article.highlight === true && article.status === 'published'
  );

  this.highlightArticles = allHighlightArticles.slice(0, nextLimit);
}
  

loadMoreGeneric() {
  const currentLength = this.genericArticles.length;
  const nextLimit = currentLength + 4;

  const allGenericArticles = this.publishedArticles.filter(
    (article: any) => article.highlight === false && article.status === 'published'
  );

  this.genericArticles = allGenericArticles.slice(0, nextLimit);
}
  

}
