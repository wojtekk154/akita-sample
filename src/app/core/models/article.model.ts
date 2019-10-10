import { EntityState } from '@datorama/akita';
import { PageEvent } from '@angular/material';

export interface ArticleModel {
  id: string;
  createdAt: string;
  title: string;
  content: string;
}

export interface ArticleEntity {
  articles: ArticleModel[];
  selectedArticle?: ArticleModel;
}

export interface ArticleState extends EntityState<ArticleEntity> {
  pagination: PageEvent
}

