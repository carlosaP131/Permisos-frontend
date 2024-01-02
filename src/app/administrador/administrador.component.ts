import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminPermisoComponent } from './admin-permiso/admin-permiso.component';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [FlexLayoutModule,CommonModule,MatIconModule,AdminMenuComponent,AdminPermisoComponent],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
