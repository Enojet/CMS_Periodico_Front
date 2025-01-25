import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriterService {

  http: HttpClient = inject(HttpClient);

  getAllArticles(){
    return this.http.get("http://localhost:3000/articles")
  }

  getArticleById(id: string){ 
    return this.http.get(`http://localhost:3000/articles/${id}`)
    }

  createNewArticle(article: any){
    return this.http.post("http://localhost:3000/articles/", article)
  }

  modifyArticle(id: string, article: any){
    return this.http.put(`http://localhost:3000/articles/${id}`, article)
  }
  
}
