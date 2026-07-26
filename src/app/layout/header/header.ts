import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MATERIAL_MODULES,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {}