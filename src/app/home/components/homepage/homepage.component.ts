import { Component, inject, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ RouterModule, HeaderComponent,FooterComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  
  articleService: HomepageService = inject(HomepageService)

  publishedArticles: any [] = []
  highlighArticles:any []= []
  genericArticles: any []= []

  highlighLimit =2
  genericLimit = 6

  ngOnInit(): void {
    this.articleService.publishedArticles().subscribe ((data:any)=>{
      this.publishedArticles = data
     
     
      this.highlighArticles = this.publishedArticles
      .filter((article) => article.highlight === true)
      .slice(0, this.highlighLimit);

      this.genericArticles = data.filter((article:any)=> article.highlight === false).slice(0,this.genericLimit)

      
    })
  }

/*loadMoreHighlight(){
  const currentLength = this.highlighArticles.length;
  const nextLimit = currentLength + 2;

  const allHighlightArticles = this.publishedArticles.filter(
    (article: any) => article.highlight === true && article.status === 'published'
  );

  this.highlighArticles = allHighlightArticles.slice(0, nextLimit);
}
  

loadMoreGeneric() {
  const currentLength = this.genericArticles.length;
  const nextLimit = currentLength + 4;

  const allGenericArticles = this.publishedArticles.filter(
    (article: any) => article.highlight === false && article.status === 'published'
  );

  this.genericArticles = allGenericArticles.slice(0, nextLimit);
}
  */

}
