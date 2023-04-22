import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() controlName: string = '';
  @Input() validacaoInput: boolean = false;
  @Input() list: any[] = [];
  @Input() textLabel?: any;

  @Output() emmiterClick = new EventEmitter();

  isSelected: boolean = true;


  constructor() {}

  ngOnInit(): void {}

  emitterClick() {
    this.emmiterClick.emit();
  }

  get formControl(): AbstractControl {
    return this.formGroup?.controls[this.controlName] ?? new FormControl();
  }
}
