import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../Components/icon/icon.component';
import { NgxMaskDirective, NgxMaskPipe, NgxMaskService, provideEnvironmentNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [IconComponent],
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
    NgxMaskDirective
  ]
})
export class SharedModule { }
