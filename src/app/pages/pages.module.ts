import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { MovieService } from './services/movie/movie.service';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { SobreComponent } from './sobre/sobre.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsType: SPINNER.ballSpinClockwise,
  bgsColor: 'rgba(255,255,255,0)',
  bgsPosition: POSITION.centerCenter,
  bgsSize: 60,
  bgsOpacity: 0.5,
  blur: 1,
  fgsType: SPINNER.ballSpinClockwise,
  fgsColor: '#FFD93D',
  fgsPosition: POSITION.centerCenter,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
  hasProgressBar: false,
  overlayColor: 'rgba(40, 40, 40, 0.6)',
};

@NgModule({
  declarations: [HomeComponent, SobreComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ComponentsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ToastrModule.forRoot()
  ],
  providers: [MovieService],
})
export class PagesModule {}
