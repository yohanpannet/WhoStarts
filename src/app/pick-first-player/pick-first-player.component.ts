import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pick-first-player',
  templateUrl: './pick-first-player.component.html',
  styleUrls: ['./pick-first-player.component.scss']
})
export class PickFirstPlayerComponent {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  @HostListener('touchstart', ['$event'])
  handleTouch(event:TouchEvent){
    console.log(`%c ${event.type}`, 'color: pink');
    console.log(event)
    if (!this.ctx) return;
    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      this.ctx.beginPath();
      this.ctx.arc(touch.pageX, touch.pageY, 20, 0, 2* Math.PI, true);
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
  @HostListener('touchmove', ['$event'])
  handleTouchMove(event:TouchEvent){
    console.log(`%c ${event.type}`, 'color: lime');
    console.log(event)
  }
  @HostListener('touchend', ['$event'])
  handleTouchEnd(event:TouchEvent){
    console.log(`%c ${event.type}`, 'color: orange');
    console.log(event)
  }

  private ctx: CanvasRenderingContext2D | null = null;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }
  
}
