import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesNewComponent } from './articles-new/articles-new.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../core/material.module';
import { ROUTES } from '../../core/constants/routes';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [
      {
        path: ROUTES.articles.list,
        component: ArticlesListComponent,
      },
      {
        path: ROUTES.articles.new,
        component: ArticlesNewComponent
      },
      {
        path: '**', redirectTo: ''
      }
    ]
  }
];

@NgModule({
  declarations: [ArticlesComponent, ArticlesListComponent, ArticlesNewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule {
}
