import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = '我是首页组件';

  public msg: string;

  public tishi: string;

  public a: number = 1;
  public b: number = 2;


  constructor() {
    this.msg = '我是首页的私有信息';
    this.tishi = '这是一条提示信息';
  }

  ngOnInit(): void {
  }

}
