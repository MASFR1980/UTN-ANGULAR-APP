import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggingIn:boolean = false;

  toggleLogin() {
    // Incluir logica de inicio de sesion aqui
    // Usar authorization de fierebase para autenticar al usuario
    // y guardar el estado de sesion en isLoggingIn
    this.isLoggingIn = !this.isLoggingIn;
  }
}
