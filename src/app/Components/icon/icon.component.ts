import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() icon:string | undefined;
  @Input() origin: number | undefined;
  @Input() fontSize: number = 24;
  @Input() color: string = 'var(--text-body)'

  IconsOrigin = IconsOrigin;
}

export enum IconsOrigin{
  Material, FontAwesome, Svg
}