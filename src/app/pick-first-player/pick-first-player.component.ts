import { Component, HostListener, ViewChild, ElementRef, Inject } from '@angular/core';

const colorPalettes: Map<string, string[]> = new Map([
  ['rainbowdash', ["#ee4035", "#f37736", "#fdf498", "#7bc043",  "#0392cf"]],
  ['google', ["#008744","#0057e7","#d62d20","#ffa700","#ffffff"]],
  ['metroUI', ["#d11141", "#00b159", "#00aedb", "#f37735", "#ffc425"]],
  ['programCatalog', ["#edc951", "#eb6841", "#cc2a36", "#4f372d", "#00a0b0"]]
])

interface TouchesTemplate {
  identifier: number,
  color:string,
}

@Component({
  selector: 'app-pick-first-player',
  templateUrl: './pick-first-player.component.html',
  styleUrls: ['./pick-first-player.component.scss']
})
export class PickFirstPlayerComponent {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  width = 0;
  height = 0;
  paletteName= "";

  private ctx: CanvasRenderingContext2D | null = null;
  private toucheTemplates: TouchesTemplate[] = [];
  private touchList: TouchList;

  constructor (private elementRef: ElementRef<HTMLElement>){
    this.generateTouchesTemplate();
  }

  private generateTouchesTemplate() {
    this.paletteName = Array.from(colorPalettes.keys())[Math.floor(Math.random()*colorPalettes.size)];
    let palette = colorPalettes.get(this.paletteName);
    for (let i = 0; i < palette.length; i++) {
      this.toucheTemplates.push({
        identifier: i,
        color: palette[i],
      })
    }
  }

  ngOnInit(): void {
    this.width = this.elementRef.nativeElement.offsetWidth;
    this.height = this.elementRef.nativeElement.offsetHeight;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    window.requestAnimationFrame(this.display.bind(this));
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('touchmove', ['$event'])
  handleTouch(event:TouchEvent){
    if (event.type ==='touchstart') {
    }
    this.touchList = event.touches;
    //this.drawTouches(event.touches);
  }

  @HostListener('touchend', ['$event'])
  handleTouchEnd(event:TouchEvent){
    console.log(`%c ${event.type}`, 'color: orange');
    console.log(event)
    this.removeTouch(event.changedTouches);
  }

  private removeTouch(touchList: TouchList) {
    
  }

  private display() {
    if (this.touchList) {
      this.drawTouches(this.touchList);
    }
    window.requestAnimationFrame(this.display.bind(this))
  }

  private drawTouches(touchList: TouchList) {

    if (!this.ctx) return;
    //this.ctx.clearRect(0, 0, this.width, this.height);
    for (var i = 0; i < touchList.length; i++) {
      var touch = touchList[i];
      //get color
      let touchTemplate = this.toucheTemplates[touch.identifier]
      let color = touchTemplate ? touchTemplate.color : '#000000';

      this.ctx.beginPath();
      this.ctx.arc(touch.pageX, touch.pageY, 50, 0, 2* Math.PI, true);
      this.ctx.fillStyle = color;

      this.ctx.fill();
      this.ctx.lineWidth = 2.0;
		  this.ctx.strokeStyle = "rgba(0, 0, 200, 0.8)";
      this.ctx.stroke();
    }
  }
  
}
