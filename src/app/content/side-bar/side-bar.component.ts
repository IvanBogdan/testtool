import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  private _accessLevel: string;

  constructor() { }

  ngOnInit() {
    this._accessLevel = Cookie.get('accessLevel');
  }
  
  isAdmin(): boolean {
    return this._accessLevel === '0';
  }

  isOper(): boolean {
    return this._accessLevel === '1';
  }
}
