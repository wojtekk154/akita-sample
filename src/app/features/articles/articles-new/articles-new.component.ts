import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../../core/services/article.service';
import { Subscription } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-articles-new',
  templateUrl: './articles-new.component.html',
  styleUrls: ['./articles-new.component.scss']
})
export class ArticlesNewComponent implements OnInit, OnDestroy {
  public articleForm: FormGroup;

  private subscription = new Subscription();

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
  }

  public onSubmitArticle(): void {
    if (this.articleForm.valid) {
      this.articleService.createArticle(this.articleForm.value)
        .pipe(debounceTime(300), take(1))
        .subscribe(() => {
          this.articleForm.reset();
        });
    }
  }

  ngOnInit(): void {
    this.setForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setForm(): void {
    this.articleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', [Validators.required, Validators.minLength(200)]]
    });
  }
}
