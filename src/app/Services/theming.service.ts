import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  constructor( private renderer2:Renderer2) { }

  public ToggleTheme(){
    const theme = document.body.classList.toggle('dark-theme');
  }

}
