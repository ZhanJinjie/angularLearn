import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  @ViewChild('aside') aside: any;
  constructor() { }

  ngOnInit(): void {
  }

  showAside(): void {
    /* 显示侧边栏 */
    this.aside.nativeElement.style.transform = 'translate(0, 0)';
  }

  hiddenAside(): void {
    /* 显示侧边栏 */
    this.aside.nativeElement.style.transform = 'translate(100%, 0)';
  }


}
