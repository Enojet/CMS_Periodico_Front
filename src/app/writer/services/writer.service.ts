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
  
}
