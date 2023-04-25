import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { GestionClientesComponent } from '../gestion-clientes';



@Component({
  standalone: true,
  imports: [MatTabsModule, MatIconModule, GestionClientesComponent],
  selector: 'app-tabs-admin',
  templateUrl: './tabs-admin.component.html',
  styleUrls: ['./tabs-admin.component.css'],

})
export class TabsAdminComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }


}

