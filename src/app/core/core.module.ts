import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    HttpClientModule,
    MaterialModule
  ],
  declarations: [NavBarComponent],
  exports: [NavBarComponent, MaterialModule]
})
export class CoreModule {
}
