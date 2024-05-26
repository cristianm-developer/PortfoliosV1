import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-container3d',
  templateUrl: './container3d.component.html',
  styleUrl: './container3d.component.scss'
})
export class Container3dComponent implements AfterViewInit {

  constructor(){
  }
  
  async ngAfterViewInit() {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    const app = new Application(canvas);
    await app.load('https://prod.spline.design/CFaoHqVaw0ENkZcF/scene.splinecode');
  }
}



