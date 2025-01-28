import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  http: HttpClient = inject(HttpClient);

  getAllArticles(){
    return this.http.get("http://localhost:3600/articles/getArticlesByEditor/6798c73baa3532efadbfa6a8")
  }
}