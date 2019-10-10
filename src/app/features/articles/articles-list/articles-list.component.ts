import { Component, OnInit } from '@angular/core';
import { ArticleQuery } from '../../../core/store/articles/article.query';
import { combineLatest, Observable } from 'rxjs';
import { ArticleModel } from '../../../core/models/article.model';
import { filter, map } from 'rxjs/operators';
import { PageEvent } from '@angular/material';
import { setPagingResults } from '../../../shared/utils/pagination';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  public articles$: Observable<ArticleModel[]>;
  public pagination$: Observable<PageEvent>;
  public columns = ['title', 'content', 'createdAt', 'Actions'];

  constructor(private articleQuery: ArticleQuery) {
  }

  public setPage(page: PageEvent): void {
    this.articleQuery.setPage(page);
  }

  ngOnInit() {
    this.articles$ = combineLatest([
      this.articleQuery.select(state => state.entities.articles || []),
      this.articleQuery.select(state => state.pagination)
    ]).pipe(
      filter(([articles, _]: [ArticleModel[], PageEvent]) => !!articles.length),
      map(setPagingResults)
    );

    this.pagination$ = this.articleQuery.select(state => state.pagination);
  }
}
