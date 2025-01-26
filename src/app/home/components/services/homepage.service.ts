import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

    http: HttpClient = inject(HttpClient)
    
    publishedArticles(){
    return this.http.get('http://localhost:3000/articles')
    }
    getArticleById(id: string){
      return this.http.get(`http://localhost:3000/articles/${id}`)

    }
    getArticleBySection(section: string){
      return this.http.get(`http://localhost:3000/articles/${section}`)
    }
}
