import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [MatListModule,MatIconModule,NgbCollapseModule],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.css'
})
export class AdminMenuComponent {
  public isCollapsed = true;
  constructor(public snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }
}
