import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './articles-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MainInformationComponent } from '../main-information/main-information.component';

@NgModule({
  declarations: [MainInformationComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class ArticlesModule { }
