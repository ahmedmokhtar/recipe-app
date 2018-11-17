import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerLinkClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onLinkClicked(linkName: string) {
    this.headerLinkClicked.emit(linkName);
  }

}
