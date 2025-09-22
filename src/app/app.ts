import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Fede y Lu - Veterinaria & Estética');
  
  agendarCita() {
    // Aquí se implementará la lógica para agendar citas
    console.log('Cita agendada');
    alert('¡Gracias por agendar tu cita! Te contactaremos pronto para confirmar.');
  }
}
