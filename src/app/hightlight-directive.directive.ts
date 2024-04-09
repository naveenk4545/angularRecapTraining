import { Directive, Input,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHightlightDirective]'
})
export class HightlightDirectiveDirective {

  @Input() highlightColor:string='yellow';
  @Input() fontSize:any='20px';
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.hightlight(this.highlightColor || 'yellow',this.fontSize);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hightlight('',null)
  }
  private hightlight(color:string, fontSize:any){
    this.el.nativeElement.style.backgroundcolor=color;
    this.el.nativeElement.style.fontSize=fontSize;
  }
}
