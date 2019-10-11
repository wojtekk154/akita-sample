import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from './material.module';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AkitaNgDevtools.forRoot({ actionsBlacklist: ['@@INIT'] }),
    RouterModule
  ],
  declarations: [NavBarComponent],
  exports: [
    NavBarComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ]
})
export class CoreModule {
}
