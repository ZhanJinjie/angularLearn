import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword: string; // 输入框内容
  public historyList: any[] = ['1', '2', '3', '4'];

  constructor() { }

  ngOnInit(): void {
  }
  doSearch(): void {
    if (this.historyList.indexOf(this.keyword) === -1) {
      this.historyList.push(this.keyword);
      this.keyword = '';
    }
  }
  getLiColor(index: number): any {
    /* 用于对列表的样式名进行赋值 */
    return {
      red: index % 4 === 1,
      green: index % 4 === 0,
      yellow: index % 4 === 2,
      orange: index % 4 === 3,
    };
  }
  deleteItem(index): void {
    /* 删除列表中的数据 */
    this.historyList.splice(index, 1);
  }

}
