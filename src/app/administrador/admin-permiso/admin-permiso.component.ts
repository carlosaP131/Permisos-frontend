import { Component, AfterViewInit, ViewChild } from '@angular/core';
//import { AdminMenuComponent } from '../admin-menu/admin-menu.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
//import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  folio: number;
  matricula: string;
  nombre: string;
  carrera: string;
  grupo: string;
  estado: string;
  ver: string;
  numeroTrabajador: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { folio: 1001, matricula: '2022001001', nombre: 'Juan Perez', carrera: 'Ingeniería', grupo: 'A', estado: 'En espera', ver: 'Ver', numeroTrabajador: 1234 },
  { folio: 1002, matricula: '2022001002', nombre: 'Ana Rodriguez', carrera: 'Ciencias de la Computación', grupo: 'B', estado: 'En espera', ver: 'Ver', numeroTrabajador: 5678 },
  { folio: 1003, matricula: '2022001003', nombre: 'Carlos Lopez', carrera: 'Medicina', grupo: 'C', estado: 'En espera', ver: 'Ver', numeroTrabajador: 9876 },
  // ... (resto de los datos)
];

@Component({
  selector: 'app-admin-permiso',
  standalone: true,
  //imports: [MatTableModule, MatSortModule,MenuComponent,MatIconModule,CommonModule],
  imports: [MatTableModule, MatSortModule,MatIconModule],
  templateUrl: './admin-permiso.component.html',
  styleUrl: './admin-permiso.component.css'
})
export class AdminPermisoComponent implements AfterViewInit {
  displayedColumns: string[] = ['folio', 'matricula', 'nombre', 'carrera', 'grupo', 'estado', 'ver', 'numeroTrabajador'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  showMenu = false;


  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  verDetalle(element: PeriodicElement) {
    // Lógica para manejar el clic en "Ver"
    console.log('Detalles:', element);
  }
  
}
