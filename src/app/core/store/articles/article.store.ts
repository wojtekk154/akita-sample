import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { ArticleEntity, ArticleState } from '../../models/article.model';
import { initPaginationState } from '../../../shared/constants/init.pagination';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'articles' })
export class ArticleStore extends EntityStore<ArticleState, ArticleEntity> {
  constructor() {
    super(initPaginationState);
  }
}
