import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent implements OnInit {
  @Input() textButton: string = '';
  @Input() bgColor: string = 'red';
  @Input() showIcon: boolean = false;
  @Input() iconFirst: boolean = true;
  @Input() icon: any;
  @Input() buttonDisabled: boolean = false;
  @Input() withColor: boolean = true;

  @Output() emmiterClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  clickButton(data: any): void {
    return this.emmiterClick.emit(data);
  }
}
