import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInformationComponent } from '../general-information/general-information.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralInformationComponent
  },
  {
    path: 'contact-me',
    component: ContactMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
