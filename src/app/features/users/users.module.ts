import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  }
];

@NgModule({
  declarations: [UsersComponent, ListComponent, FilterBarComponent, ResultsTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule {
}
