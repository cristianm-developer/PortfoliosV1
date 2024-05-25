import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInformationComponent } from '../general-information/general-information.component';
import { AppRoutingModule } from './articles-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@NgModule({
  declarations: [GeneralInformationComponent, ContactMeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class ArticlesModule { }
