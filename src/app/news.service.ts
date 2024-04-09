import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getLatestNews(){
    const url =
      'https://newsapi.org/v2/everything?q=tesla&from=2024-03-04&sortBy=publishedAt&apiKey=fa4a10a290364437bd03a99caaf3f494';

      return this.http.get(url);
  }
}
