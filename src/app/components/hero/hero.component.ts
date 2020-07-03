import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <p>
      {{msg}}
      这是通过   ng generate component components/hero -t    生成的模板。注意，这里是内联模板，没有用单独的html文件
    </p>

    <ul>
      <li *ngFor='let hero of heros'>
        {{hero}}
      </li>
    </ul>

    <br>

    <ol>
      <li *ngFor="let hero of heroList">
        {{hero}}
      </li>
    </ol>

    <ol>
      <li *ngFor="let item of heroArr">
        {{item}}
      </li>
    </ol>

  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public msg: string;

  public heros = ['lisi', 'liwu', 'liliu'];
  public heroList: string[] = ['zhangsan', 'wangwu', 'zhaoliu'];
  public heroArr: Array<number> = [1, 2, 3, 4, 5];

  constructor() {
   this.msg = 'hero works!';
  }

  ngOnInit(): void {
  }

}
