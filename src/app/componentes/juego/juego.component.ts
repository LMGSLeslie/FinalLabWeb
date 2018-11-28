import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService, Consola } from '../../servicios/consolas.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juego: any;
  idConsola: string;
  idJuego: string;

  constructor(private activatedRoute: ActivatedRoute,
              private consolasService: ConsolasService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['idConsola']);
      console.log(params['idJuego']);
      // this.juego = this.consolasService.obtieneJuego(this.idConsola, this.idJuego);
      this.juego = new Promise((resolve, reject) => {
        this.consolasService.obtieneJuego(params['idConsola'], params['idJuego']).subscribe(
          juego => {
            // console.log(consola);
            console.log(juego);
            resolve(juego);
          }
        );
      });
    });
  }

  ngOnInit() {
  }

}
