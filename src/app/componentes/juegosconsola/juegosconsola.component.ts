import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola } from '../../servicios/consolas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})
export class JuegosconsolaComponent implements OnInit {

  juego;
  juegos: any = [];
  idConsola: string;

  constructor( private consolasService: ConsolasService,
               private activatedRoute: ActivatedRoute) {
     this.activatedRoute.params.subscribe(params => {
       console.log(params['id']);
       this.idConsola = params['id'];
       this.juego = new Promise((resolve, reject) => {
         this.consolasService.obtieneJuegosConsola(params['id']).subscribe(
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
    // this.juegos = this.consolasService.obtieneJuegosConsola(this.idConsola);
  }

}
