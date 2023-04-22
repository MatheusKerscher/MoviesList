import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInformacoesComponent } from './modal-informacoes/modal-informacoes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ModalInformacoesComponent,
    CardMovieComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    CardMovieComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
