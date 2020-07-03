/* 模块 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 功能模块--双向数据绑定

/* 组件 */
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

/* 指令 */
import { HightlightDirective } from './directives/hightlight.directive';  // 属性指令--颜色高亮

/* 服务（service） */
import { StorageService } from './services/storage.service';
import { TransitionComponent } from './components/transition/transition.component';

@NgModule({
  // 组件，指令 的声明
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
  // 导入其他模块，表示该模块依赖其他模块的组件
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 服务
  providers: [StorageService],
  // 模块的启动组件，一般app模块才会用到
  bootstrap: [AppComponent]
})
export class AppModule { }
