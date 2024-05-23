import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInformationComponent } from '../general-information/general-information.component';
import { AppRoutingModule } from './articles-routing.module';



@NgModule({
  declarations: [GeneralInformationComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ArticlesModule { }
