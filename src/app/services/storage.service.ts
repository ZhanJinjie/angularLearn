import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: any, value: any): void{
    /* 设置保存的键值对 */
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: any): any{
    /* 通过键，获得值 */
    return JSON.parse(localStorage.getItem(key));
  }

  remove(key: any): void{
    /* 通过键，删除键值对 */
    localStorage.removeItem(key);
  }

  update(key: any, value: any): void{
    /* 更新 键 对应的 值 */
    this.remove(key);
    this.set(key, value);
  }
}
