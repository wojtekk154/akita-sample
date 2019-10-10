import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ArticleEntity, ArticleState } from '../../models/article.model';
import { ArticleStore } from './article.store';
import { PageEvent } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class ArticleQuery extends QueryEntity<ArticleState, ArticleEntity> {
  constructor(private articleStore: ArticleStore) {
    super(articleStore);
  }

  public setPage(page: PageEvent): void {
    this.articleStore.update(state => ({
      ...state,
      pagination: page
    }));
  }
}
