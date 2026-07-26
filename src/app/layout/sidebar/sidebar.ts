import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL_MODULES } from '../../shared/material';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
  MATERIAL_MODULES,
  RouterLink
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {}