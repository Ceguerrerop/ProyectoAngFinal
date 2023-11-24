import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private apiKey = 'live_SM8Tl3VauMgiZGh2wz3GSK1xTB8M2jw9hhhFMw8MxkJ6iGseu2wNSjLQu3eZ4dM7'; // Reemplaza con tu clave de acceso real
  private apiUrl = 'https://api.thecatapi.com/v1'; // URL base de la API de gatos

  constructor(private http: HttpClient) {}

  getCatsImages() {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-api-key': this.apiKey,
      }),
    };

    // Realiza la solicitud a la API de gatos para obtener imágenes
    return this.http.get(`${this.apiUrl}/images/search`, httpOptions);
  }
}
