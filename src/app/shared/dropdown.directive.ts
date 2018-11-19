import { Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  menuOpened = false;
  @HostBinding('class') elClass;
  originalClass: string;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.originalClass = this.elRef.nativeElement.className;
    this.elClass = this.originalClass;
  }

  @HostListener('click') onclick() {
    this.menuOpened = !this.menuOpened;
    this.elClass = this.menuOpened ? this.originalClass + ' open' : this.originalClass;
  }
}
