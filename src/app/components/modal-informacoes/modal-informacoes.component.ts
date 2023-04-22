import { Component, Input } from '@angular/core';
import { faXmark, faStar } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Movie } from 'src/app/shared/models/movie/movie.model';
import { environmenteTMDB as env } from 'src/environments/environment.tbdm';

@Component({
  selector: 'app-modal-informacoes',
  templateUrl: './modal-informacoes.component.html',
  styleUrls: ['./modal-informacoes.component.scss'],
})
export class ModalInformacoesComponent {
  @Input() movie!: Movie;
  @Input() genres!: string[]

  baseImgUrl = env.baseImageUrl;
  faStar = faStar;
  faClose = faXmark;

  constructor(public activeModal: NgbActiveModal) {}

  formatDate(data: string) {
    const formattedDate = data.split('-');
    return `${formattedDate[2]}/${formattedDate[1]}/${formattedDate[0]}`;
  }
}
