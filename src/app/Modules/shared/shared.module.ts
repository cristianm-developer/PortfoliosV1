import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../Components/icon/icon.component';
import { NgxMaskDirective, NgxMaskPipe, NgxMaskService, provideEnvironmentNgxMask } from 'ngx-mask';
import { Container3dComponent } from '../../Components/container3d/container3d.component';


@NgModule({
  declarations: [IconComponent, Container3dComponent],
  imports: [
    CommonModule,
    NgxMaskPipe,
    NgxMaskDirective
  ],
  providers:[
    provideEnvironmentNgxMask()
  ],
  exports:[
    IconComponent,
    NgxMaskPipe,
    NgxMaskDirective,
    Container3dComponent
  ]
})
export class SharedModule { }
