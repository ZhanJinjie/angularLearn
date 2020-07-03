import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'; // 导入服务

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  public title = 'todolist';

  public keyword: string; // 输入框内容
  public historyList: any[] = [];

  constructor(public storage: StorageService) {
  }

  ngOnInit(): void {
    console.log('页面刷新加载的生命周期函数');
    const list = this.storage.get('historyList');
    if (list) {
      this.historyList  = list;
    }
  }
  todolistHasKeyword(list: any[], word: any): boolean{
    /* 判断word是否已经存在于list */
    for (const item of list) {
      if ( item.keyword === word ) {
        // 列表中已存在该值
        alert('数据已经存在');
        this.keyword = '';
        return true;
      }
    }
    return false;
  }
  doAdd(e): void {
    /* 向代办事项中添加数据 */
    if (!this.keyword) { return; }
    if (e.keyCode === 13) {
      // 按下enter的时候
      this.keyword = this.keyword.trim(); // 去除前后的空白符
      if (this.keyword && !this.todolistHasKeyword(this.historyList, this.keyword)) {
        this.historyList.push({
          keyword: this.keyword,
          status: false       // 默认false，false是待办事项 ， true是已完成事项
        });
        this.storage.set('historyList', this.historyList); // 将数据添加到storage服务中
        this.keyword = '';
      }
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
  deleteItem(index: number): void {
    /* 删除列表中的数据 */
    this.historyList.splice(index, 1);
    this.storage.update('historyList', this.historyList);
  }

  changeStatus(): void{
    /* 改变数据的状态 */
    console.log(this.historyList);
    this.storage.update('historyList', this.historyList);
  }


}
