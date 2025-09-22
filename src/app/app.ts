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
  
  // Método para abrir la página de productos
  abrirProductos() {
    console.log('Abriendo productos...');
    window.open('productos.html', '_blank');
  }
  
  // Método para navegación del menú
  navegarA(seccion: string) {
    console.log(`Navegando a: ${seccion}`);
    
    if (seccion === 'inicio') {
      // Recargar la página principal
      window.location.reload();
    } else if (seccion === 'servicios') {
      // Llevar directamente a la sección de servicios
      const elemento = document.getElementById('servicios');
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Para otras secciones, hacer scroll suave
      const elemento = document.getElementById(seccion);
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
  // Método para el botón "Reservar Ahora" del hero
  reservarAhora() {
    console.log('Reservando servicio...');
    alert('¡Excelente elección! Te ayudaremos a reservar el mejor servicio para tu mascota.');
  }
  
  // Método para los botones "RESERVAR CITA"
  reservarCita(servicio: string) {
    console.log(`Reservando: ${servicio}`);
    alert(`¡Perfecto! Te ayudaremos a reservar ${servicio} para tu mascota.`);
  }
  
  // Método para redes sociales
  abrirRedSocial(red: string) {
    console.log(`Abriendo ${red}...`);
    const urls: { [key: string]: string } = {
      'facebook': 'https://facebook.com/esteticaveterinaria',
      'instagram': 'https://instagram.com/esteticaveterinaria',
      'tiktok': 'https://tiktok.com/@esteticaveterinaria',
      'whatsapp': 'https://wa.me/51961433163'
    };
    
    if (urls[red]) {
      window.open(urls[red], '_blank');
    }
  }
}
