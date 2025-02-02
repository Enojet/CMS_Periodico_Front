import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

    http: HttpClient = inject(HttpClient)
    
    publishedArticles(){
      
    return this.http.get('http://localhost:3600/articles/publishArticles')
    }
    getArticleById(_id: string){
      return this.http.get(`http://localhost:3600/articles/publishArticles/${_id}`)

    }
    getArticleBySection(section: string){
      return this.http.get(`http://localhost:3600/publishArticles/${section}`)
    }
    //addSubscriber(email:string){
      //return this.http.post(`http://localhost:3000/subscribers/${email}`)
    //}
}
