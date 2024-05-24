import { Component } from '@angular/core';
import { PersonalDataObj } from '../../../Constants/PersonalData';
@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.scss'
})
export class GeneralInformationComponent {
  PersonalData = PersonalDataObj;
}
