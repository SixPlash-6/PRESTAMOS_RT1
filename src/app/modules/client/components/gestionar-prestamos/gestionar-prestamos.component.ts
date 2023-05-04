import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';




@Component({

  selector: 'app-gestionar-prestamos',
  templateUrl: './gestionar-prestamos.component.html',
  styleUrls: ['./gestionar-prestamos.component.css']
})
export class GestionarPrestamosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }




}
