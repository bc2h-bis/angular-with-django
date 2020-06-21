import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherDjango(location) {
    return this.http.get('http://127.0.0.1:8000/weather/' + location);
  }
}
