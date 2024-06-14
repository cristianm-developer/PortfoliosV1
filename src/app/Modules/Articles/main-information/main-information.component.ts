import { Component } from '@angular/core';
import { PersonalDataObj } from '../../../Constants/PersonalData';
import { IconsOrigin } from '../../../Components/icon/icon.component';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrl: './main-information.component.scss'
})
export class MainInformationComponent {
  PersonalDataObj = PersonalDataObj;
  IconsOrigin = IconsOrigin;
}
