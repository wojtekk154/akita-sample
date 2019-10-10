import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleModel } from '../models/article.model';
import { ArticleStore } from '../store/articles/article.store';
import { initPagination } from '../../shared/utils/pagination';
import { get } from 'lodash';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private articleStore: ArticleStore, private httpClient: HttpClient, private matSnackbar: MatSnackBar) {
  }

  public getArticles(): void {
    this.articleStore.setLoading(true);
    this.httpClient.get('/articles').subscribe((articles: ArticleModel[]) => {
      this.articleStore.update(state => ({
        entities: { articles },
        pagination: initPagination(articles)
      }));
      this.articleStore.setLoading(false);
    });
  }

  public createArticle(data: { title: string, content: string }): Observable<ArticleModel> {
    this.articleStore.setLoading(true);
    return this.httpClient.post('/articles', data).pipe(
      tap((article: ArticleModel) => {
        this.articleStore.update((state) => ({
          ...state,
          entities: { articles: [...get(state, 'entities.articles'), article] }
        }));
        this.articleStore.setLoading(false);
        this.matSnackbar.open('Dodano nowy artykuł', 'Success', { duration: 4000 });
      })
    );
  }
}
