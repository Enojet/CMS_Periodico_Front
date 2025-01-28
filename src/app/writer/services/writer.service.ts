import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriterService {

  http: HttpClient = inject(HttpClient);

  getArticlesByAuthorId(id: string){
    return this.http.get(`http://localhost:4000/articles/getArticlesByAuthor/${id}`)
  } // endpoint bueno

  getArticleById(id: string){ 
    return this.http.get(`http://localhost:4000/articles/articleById/${id}`)
    } // endpoint bueno

  createNewArticle(article: any){
    return this.http.post("http://localhost:3000/articles/", article)
  }

  modifyArticle(id: string, article: any){
    return this.http.put(`http://localhost:3000/articles/${id}`, article)
  }

  getAllUsers(){
    return this.http.get("http://localhost:3000/users")
  }

  modifyArticleStatus(id: string, status: string){
    return this.http.put(`http://localhost:3000/articles/${id}`, status)
  }
  
  assignArticleEditor(id: string, editorId: string){
    return this.http.put(`http://localhost:3000/articles/${id}`, editorId)
  }
  
}
