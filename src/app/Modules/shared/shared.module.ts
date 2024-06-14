import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../Components/icon/icon.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import {MatIcon, MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    NgxMaskPipe,
    NgxMaskDirective,
    MatIconModule
  ],
  providers:[
    provideEnvironmentNgxMask()
  ],
  exports:[
    IconComponent,
    MatIconModule,
    NgxMaskPipe,
    NgxMaskDirective
  ]
})
export class SharedModule { }
