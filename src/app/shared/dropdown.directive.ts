import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  menuOpened = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
  }

  @HostListener('click') onclick() {
    this.menuOpened = !this.menuOpened;
    if (this.menuOpened) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
  }
}
