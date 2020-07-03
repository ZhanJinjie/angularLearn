import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 双向数据绑定

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HightlightDirective } from './directives/hightlight.directive';

// 引入并配置（声明）服务（service）
import { StorageService } from './services/storage.service';
import { TransitionComponent } from './components/transition/transition.component';

@NgModule({
  // 组件
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeroComponent,
    SearchComponent,
    TodolistComponent,
    HightlightDirective,
    TransitionComponent
  ],
  // 模块
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 服务
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
