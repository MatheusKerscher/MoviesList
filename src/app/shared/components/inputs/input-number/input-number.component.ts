import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() placeholder: string = '';
  @Input() inputName?: any;
  @Input() label?: any;
  @Input() controlName?: any;
  @Input() placeHolder?: string = '';
  @Input() validacaoInput: boolean = false;

  @Output() emmiterChange = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  get formControl(): AbstractControl {
    return this.formGroup?.controls[this.controlName] ?? new FormControl();
  }

  emitterChange(){
    this.emmiterChange.emit();
  }
}
