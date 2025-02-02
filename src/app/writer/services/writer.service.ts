import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriterService {

  http: HttpClient = inject(HttpClient);
  token: any=localStorage.getItem("token");

  getArticlesByAuthorId(id: string){

    const headers=new HttpHeaders({
          Authorization:`Bearer ${this.token}`
        })
    return this.http.get(`http://localhost:3600/articles/getArticlesByAuthor/${id}`, {headers})
  } // endpoint bueno

  getArticleById(id: string){ 
    const headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    return this.http.get(`http://localhost:3600/articles/articleById/${id}`, {headers})
    } // endpoint bueno

  createNewArticle(article: any){
    return this.http.post("http://localhost:3600/articles/", article)
  }

  modifyArticle(id: string, article: any){
    return this.http.put(`http://localhost:3600/articles/${id}`, article)
  }

  getAllUsers(){
    return this.http.get("http://localhost:3600/users/allEditor")
  }

  modifyArticleStatus(id: string, status: string){
    return this.http.put(`http://localhost:3600/articles/${id}`, status)
  }
  
  assignArticleEditor(id: string, editorId: string){
    return this.http.put(`http://localhost:3600/articles/${id}`, editorId)
  }
  
}
