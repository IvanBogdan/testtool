import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../services/user/user';

@Component({
  selector: 'app-content-in',
  templateUrl: './content-in.component.html',
  styleUrls: ['./content-in.component.css']
})
export class ContentInComponent implements OnInit {

  @Input('user') private _user: User;

  constructor() { }

  ngOnInit() {
  }

}
