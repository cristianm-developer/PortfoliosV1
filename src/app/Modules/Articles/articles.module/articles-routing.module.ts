import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInformationComponent } from '../main-information/main-information.component';

const routes: Routes = [
  {path: '', component: MainInformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
