import { AfterViewInit, Component, ElementRef, Input, ViewChild, viewChild } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-container3d',
  templateUrl: './container3d.component.html',
  styleUrl: './container3d.component.scss'
})
export class Container3dComponent implements AfterViewInit {

  @Input('url')urlScene: string = 'https://prod.spline.design/aE4EBMgvd44GUzuJ/scene.splinecode';

  constructor(){
  }
  
  async ngAfterViewInit() {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    const app = new Application(canvas);
    await app.load(this.urlScene);
  }
}



