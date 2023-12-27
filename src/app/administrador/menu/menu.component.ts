import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule,MatIconModule,NgbCollapseModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public isCollapsed = true;
  constructor(public snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }

 
}
