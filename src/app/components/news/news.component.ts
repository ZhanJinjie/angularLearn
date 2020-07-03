import { Component, OnInit, ViewChild } from '@angular/core';
/* *
ViewChild 获取dom节点
*/

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public value: any;
  public color: 'red';

  @ViewChild('box') box: any;
  constructor() { }

  ngOnInit(): void {
    /* 组件和模板加载完毕 */
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    /* dom加载完毕之后 */
    console.log(this.box);
  }

  chick(value: any): void {
    this.value = value;
  }

}
