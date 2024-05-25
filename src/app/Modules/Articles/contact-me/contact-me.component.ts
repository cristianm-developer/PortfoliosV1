import { IconsOrigin } from './../../../Components/icon/icon.component';
import { Component } from '@angular/core';
import { PersonalDataObj } from '../../../Constants/PersonalData';
import { ResponsiveService } from '../../../Services/responsive.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  PersonalData = PersonalDataObj;

  IconsOrigin = IconsOrigin;

  constructor(public ResponsiveService: ResponsiveService){}
}
