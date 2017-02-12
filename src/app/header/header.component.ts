import { Component, OnInit, Output, EventEmitter} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() propagateTheme = new EventEmitter <any>();
  public theme: string;

  constructor() { }


  ngOnInit() {
  	$('.button-collapse').sideNav();
  	$('.dropdown-buton').dropdown();
  }

  setTheme(value: string) {
  	this.theme = value;
  	this.propagateTheme.emit(this.theme);
  }
}
