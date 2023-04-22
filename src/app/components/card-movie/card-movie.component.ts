import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { environmenteTMDB as env } from 'src/environments/environment.tbdm';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent implements OnInit {
  @Input() imgUrl: string = '';
  @Input() title: string = '';
  @Input() releaseDate: string = '';
  @Input() evaluationNote: number = 0;
  @Input() voteCount: number = 0;

  @Output() emmiterClick = new EventEmitter();

  faStar = faStar;
  baseImgUrl = env.baseImageUrl;

  constructor() {}

  ngOnInit(): void {}

  formatDate(data: string) {
    const formattedDate = data.split('-');
    return `${formattedDate[2]}/${formattedDate[1]}/${formattedDate[0]}`;
  }

  emitterClick() {
    this.emmiterClick.emit();
  }
}
