import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  
  WindowSize:number;
  
  @HostListener('window:resize', ['$event']) 
  onResize(event: Event){
    this.CheckWindowsSize();
  }

  constructor() { 
    this.WindowSize = this.CheckWindowsSize()
    
  }

  CheckWindowsSize(){
    if (window.innerWidth <= 600)
      return WindowsSize.Sm
    return WindowsSize.Md
  }

}

export enum WindowsSize{
  Sm, Md, Lg, Xl
}