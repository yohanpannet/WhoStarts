import { Component, HostListener, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pick-first-player',
  templateUrl: './pick-first-player.component.html',
  styleUrls: ['./pick-first-player.component.scss']
})
export class PickFirstPlayerComponent {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D | null = null;
  width = 0;
  height = 0;

  constructor (private elementRef: ElementRef<HTMLElement>){
    
  }

  ngOnInit(): void {
    this.width = this.elementRef.nativeElement.offsetWidth;
    this.height = this.elementRef.nativeElement.offsetHeight;
    //console.log(this.elementRef);
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('touchmove', ['$event'])
  handleTouch(event:TouchEvent){
    console.log(`%c ${event.type}`, 'color: pink');
    console.log(event)
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      this.ctx.beginPath();
      this.ctx.arc(touch.pageX, touch.pageY, 20, 0, 2* Math.PI, true);
      this.ctx.fill();
      this.ctx.stroke();
    }
  }

  @HostListener('touchend', ['$event'])
  handleTouchEnd(event:TouchEvent){
    console.log(`%c ${event.type}`, 'color: orange');
    console.log(event)
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  
}
