import { Component, inject, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ RouterModule, HeaderComponent,FooterComponent, CommonModule, SearchComponent],
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

  mostrarMensaje: boolean = false;
  tooltipX: number = 0;
  tooltipY: number = 0;
  moverTooltip(event: MouseEvent) {
    this.tooltipX = event.clientX + 10; 
    this.tooltipY = event.clientY + 20
  }

  

}
