import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';



@Component({
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatFormFieldModule, MatButtonModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {

  }
  perfil() {
    this.router.navigate(["perfil"])
  }

  ngOnInit(): void {

  }
}
