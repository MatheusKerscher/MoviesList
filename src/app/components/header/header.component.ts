import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  isActivatedRouter(rota: string): boolean {
    if (this.router.url == rota) {
      return true;
    } else {
      return false;
    }
  }
}
