import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../core/services/article.service';
import { ArticleQuery } from '../../../core/store/articles/article.query';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public loading$ = this.articleQuery.selectLoading();

  constructor(private articlesService: ArticleService, private articleQuery: ArticleQuery) {
  }

  ngOnInit() {
    this.articlesService.getArticles();
  }

}
