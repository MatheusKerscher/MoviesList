import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../services/movie/movie.service';
import { Movie } from 'src/app/shared/models/movie/movie.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalInformacoesComponent } from 'src/app/components/modal-informacoes/modal-informacoes.component';
import {
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  genres: any[] = [];
  languages: any[] = [];
  order: any[] = [];
  movies?: Movie[];

  currentGender: number = 0;
  currentLanguage: string = '';
  currentOrder: string = '';

  currentPage: number = 1;

  faNext = faAngleRight;
  faBack = faAngleLeft;
  faSearch = faMagnifyingGlass;

  public formSearchMovies: FormGroup = new FormGroup({
    gender: new FormControl(null, [Validators.required]),
    language: new FormControl(null, [Validators.required]),
    order: new FormControl(null, [Validators.required]),
  });

  public formCurrentPage: FormGroup = new FormGroup({
    currentPage: new FormControl(null, [Validators.required]),
  });

  constructor(
    private moviesService: MovieService,
    private modalService: NgbModal,
    private ngxUiLoaderService: NgxUiLoaderService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.ngxUiLoaderService.startLoader('loader-01');

    this.moviesService.getGeneros().subscribe({
      next: (result) => {
        result?.genres.forEach((g) => {
          this.genres?.push({ value: g.id?.toString()!, label: g.name! });
        });
      },
      error: (result) => console.log('Erro: ' + result),
    });

    this.moviesService.getLanguages().subscribe({
      next: (result) => {
        this.languages.push(
          { value: 'pt-BR', label: 'Portuguese (Brazil)' },
          { value: 'en-US', label: 'English (USA)' }
        );
        result?.forEach((g) => {
          if (g.iso_639_1 != 'xx') {
            this.languages?.push({
              value: g.iso_639_1!,
              label: g.english_name!,
            });
          }
        });

        this.languages.sort((a, b) => {
          const nameA = a.label.toUpperCase();
          const nameB = b.label.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        });
      },
      error: (result) => console.log('Erro: ' + result),
    });

    this.order = [
      { value: 'vote_count.asc', label: 'Contagem de votos (ascendente)' },
      { value: 'vote_count.desc', label: 'Contagem de votos (descendente)' },
      { value: 'release_date.asc', label: 'Data de lançamento (ascendente)' },
      { value: 'release_date.desc', label: 'Data de lançamento (descendente)' },
      { value: 'vote_average.asc', label: 'Média de votos (ascendente)' },
      { value: 'vote_average.desc', label: 'Média de votos (descendente)' },
      { value: 'popularity.asc', label: 'Popularidade (ascendente)' },
      { value: 'popularity.desc', label: 'Popularidade (descendente)' },
      { value: 'revenue.asc', label: 'Receita (ascendente)' },
      { value: 'revenue.desc', label: 'Receita (descendente)' },
      { value: 'original_title.asc', label: 'Título original (ascendente)' },
      { value: 'original_title.desc', label: 'Título original (descendente)' },
    ];
    this.ngxUiLoaderService.stopLoader('loader-01');
  }

  searchMovies() {
    if (this.formSearchMovies.valid) {
      if (
        this.formSearchMovies.get('gender')?.value != this.currentGender ||
        this.formSearchMovies.get('language')?.value != this.currentLanguage ||
        this.formSearchMovies.get('order')?.value !== this.currentOrder
      ) {
        this.currentPage = 1;
      }

      window.scrollTo(0, 0);
      this.ngxUiLoaderService.startLoader('loader-01');

      this.moviesService
        .getMoviesByGenre(
          this.formSearchMovies.get('gender')?.value.toString(),
          this.currentPage,
          this.formSearchMovies.get('language')?.value,
          this.formSearchMovies.get('order')?.value
        )
        .subscribe({
          next: (result) => {
            this.movies = result?.results;
            this.formCurrentPage.get('currentPage')?.setValue(this.currentPage);
          },
          error: (error) => {
            if (
              error.error?.errors?.[0].search(
                'page must be less than or equal'
              ) >= 0
            ) {
              this.currentPage = 1;
              this.formCurrentPage
                .get('currentPage')
                ?.setValue(this.currentPage);

              this.toastrService.info(
                'Você foi redirecionado para a primeira página',
                'Página não encontrada'
              );
              this.moviesService
                .getMoviesByGenre(
                  this.formSearchMovies.get('gender')?.value.toString(),
                  1,
                  this.formSearchMovies.get('language')?.value,
                  this.formSearchMovies.get('order')?.value
                )
                .subscribe((result) => {
                  this.movies = result?.results;
                });
            } else {
              this.toastrService.warning(
                'Por favor, tente novamente mais tarde',
                'Erro ao buscar filmes'
              );
            }
          },
        });

      this.currentGender = this.formSearchMovies.get('gender')?.value;
      this.currentLanguage = this.formSearchMovies.get('language')?.value;
      this.currentOrder = this.formSearchMovies.get('order')?.value;

      this.ngxUiLoaderService.stopLoader('loader-01');
    }
  }

  openModal(f: Movie) {
    const modalRef = this.modalService.open(ModalInformacoesComponent, {
      centered: true,
    });

    let moviesGenre: any[] = [];

    f.genre_ids?.forEach((g) => {
      moviesGenre.push(
        this.genres.filter((genre) => genre.value == g)[0].label
      );
    });

    modalRef.componentInstance.movie = f;
    modalRef.componentInstance.genres = moviesGenre;
  }

  changePage(type: string) {
    if (type == 'back') {
      this.currentPage--;
      this.formCurrentPage.get('currentPage')?.setValue(this.currentPage);
    } else {
      this.currentPage++;
      this.formCurrentPage.get('currentPage')?.setValue(this.currentPage);
    }
    this.searchMovies();
  }

  searchMoviesByPage() {
    if (this.formCurrentPage.valid) {
      this.currentPage = this.formCurrentPage.get('currentPage')?.value;
      this.formCurrentPage.get('currentPage')?.setValue(this.currentPage);
      this.searchMovies();
    }
  }
}
