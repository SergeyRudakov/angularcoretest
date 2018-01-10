import { Component, OnInit, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.css']
})
export class ContentLoaderComponent implements OnInit {

  NEWS_URL  = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=XXX';
  public news: NewsList;
  public newsItem: any;
  public newsItemIndex = 0;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

   }

   private Load() {
    this.http.get<NewsList>(this.NEWS_URL).subscribe(result => {
      this.news = result;
      if (this.news != null && this.news.articles != null) {
          this.newsItemIndex = 0;
          this.newsItem = this.news.articles[this.newsItemIndex];
      }
    }, error => console.error(error));
   }

   public goNext(index: number) {
    this.newsItemIndex = this.newsItemIndex + index;
      if (this.newsItemIndex === -1 ) {
        this.newsItemIndex = this.news.articles.length - 1;
      }
      if ( this.newsItemIndex >= this.news.articles.length ) {
        this.newsItemIndex = 0;
      }
      this.newsItem = this.news.articles[this.newsItemIndex];

   }

  ngOnInit() {
    this.Load();
  }

}
interface NewsList {
  totalResults: number;
  articles: any[];
}
