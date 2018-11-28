import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsolasService {

  url = 'http://localhost:8585/';

  constructor(
    public httpClient: HttpClient
  ) {
    console.log('ConsolasService Creado...');
  }

  obtieneConsolas() {
    return this.httpClient.get(this.url + 'plataforma');
  }

   obtieneConsola(nombre: string) {
     return this.httpClient.get(this.url + 'plataforma/' + nombre);
   }

  obtieneJuegosConsola(idConsola: string) {
    console.log(idConsola);
    return this.httpClient.get(this.url + 'plataforma/' + idConsola + '/juegos');
   }

   obtieneJuego(idConsola: string, idJuego: string) {
     return this.httpClient.get(this.url + 'plataforma/' + idConsola + '/juego/' + idJuego);
   }

  buscarConsolas(palabras: string) {
    return this.httpClient.get(this.url + 'plataforma/busqueda/' + palabras);
  }

  buscarJuegos(palabras: string) {
    return this.httpClient.get(this.url + 'juegos/busqueda/' + palabras);
  }

}

export interface Consola {
  nombre: string;
  descripcion: string;
  caracteristicas: string;
  imagen: string;
  juegos: any;
}
export interface Juego {
  imagen: string;
  nombre: string;
  developer: string;
  lanzamiento: string;
}



// private consolas: Consola[] = [
  //   {
  //     nombre: 'PC Master Race',
  //     descripcion: 'Juegos para PC',
  //     caracteristicas: 'Texto y listado de las características de la consola PC Master Race...',
  //     imagen: 'assets/pcmr.jpg',
  //     juegos: [
  //       {
  //         imagen: 'assets/tlou.jpg',
  //         nombre: 'Juego PC 1',
  //         developer: 'Naughty Dog',
  //         lanzamiento: '2013'
  //       },
  //       {
  //         imagen: 'assets/p5.jpg',
  //         nombre: 'Juego PC 2',
  //         developer: 'P-Studio',
  //         lanzamiento: '2017'
  //       },
  //       {
  //         imagen: 'assets/hzd.jpg',
  //         nombre: 'Juego PC 3',
  //         developer: 'Guerrilla Games',
  //         lanzamiento: '2017'
  //       }
  //     ]
  //   },
  //   {
  //     nombre: 'Playstation 4',
  //     descripcion: 'Juegos para PS4',
  //     caracteristicas: 'Texto y listado de las características de la consola Playstation 4...',
  //     imagen: 'assets/ps4.jpg',
  //     juegos: [
  //       {
  //         imagen: 'assets/p5.jpg',
  //         nombre: 'Persona 5',
  //         developer: 'P-Studio',
  //         lanzamiento: '2017'
  //       },
  //       {
  //         imagen: 'assets/tlou.jpg',
  //         nombre: 'The Last of Us',
  //         developer: 'Naughty Dog',
  //         lanzamiento: '2013'
  //       },
  //       {
  //         imagen: 'assets/hzd.jpg',
  //         nombre: 'Horizon: Zero Dawn',
  //         developer: 'Guerrilla Games',
  //         lanzamiento: '2017'
  //       }
  //     ]
  //   },
  //   {
  //     nombre: 'Xbox One',
  //     descripcion: 'Juegos para Xbox One',
  //     caracteristicas: 'Texto y listado de las características de la consola Xbox One...',
  //     imagen: 'assets/xboxone.jpg',
  //     juegos: [
  //       {
  //         imagen: 'assets/tlou.jpg',
  //         nombre: 'Juego Xbox 1',
  //         developer: 'Naughty Dog',
  //         lanzamiento: '2013'
  //       },
  //       {
  //         imagen: 'assets/p5.jpg',
  //         nombre: 'Juego Xbox 2',
  //         developer: 'P-Studio',
  //         lanzamiento: '2017'
  //       },
  //       {
  //         imagen: 'assets/hzd.jpg',
  //         nombre: 'Juego Xbox 3',
  //         developer: 'Guerrilla Games',
  //         lanzamiento: '2017'
  //       }
  //     ]
  //   },
  //   {
  //     nombre: 'Nintendo Switch',
  //     descripcion: 'Juegos para Nintendo Switch',
  //     caracteristicas: 'Texto y listado de las características de la consola Nintendo Switch...',
  //     imagen: 'assets/nswitch.jpg',
  //     juegos: [
  //       {
  //         imagen: 'assets/tlou.jpg',
  //         nombre: 'Juego Switch 1',
  //         developer: 'Naughty Dog',
  //         lanzamiento: '2013'
  //       },
  //       {
  //         imagen: 'assets/p5.jpg',
  //         nombre: 'Juego Switch 2',
  //         developer: 'P-Studio',
  //         lanzamiento: '2017'
  //       },
  //       {
  //         imagen: 'assets/hzd.jpg',
  //         nombre: 'Juego Switch 3',
  //         developer: 'Guerrilla Games',
  //         lanzamiento: '2017'
  //       }
  //     ]
  //   }
  // ];
