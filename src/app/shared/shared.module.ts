import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from './components/inputs/input-select/input-select.component';
import { LabelComponent } from './components/label/label.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ButtonIconComponent } from './components/buttons/button-icon/button-icon.component';
import { InputNumberComponent } from './components/inputs/input-number/input-number.component';



@NgModule({
  declarations: [
    InputSelectComponent,
    LabelComponent,
    ButtonIconComponent,
    InputNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [
    InputSelectComponent,
    ButtonIconComponent,
    InputNumberComponent
  ],
  providers: [
    provideNgxMask()
  ]
})
export class SharedModule { }
