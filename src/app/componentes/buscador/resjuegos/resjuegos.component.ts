import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from '../../../servicios/consolas.service';

@Component({
  selector: 'app-resjuegos',
  templateUrl: './resjuegos.component.html',
  styleUrls: ['./resjuegos.component.css']
})
export class ResjuegosComponent implements OnInit {

  juegos;
  palabrasBusqueda: string;

  constructor(private activatedRoute: ActivatedRoute,
    private consolasService: ConsolasService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['palabrasBusqueda']);
      this.palabrasBusqueda = params['palabrasBusqueda'];
      //this.juegos = []; // this.consolasService.buscarJuegos(this.palabrasBusqueda);
      this.juegos = new Promise((resolve, reject) => {
        this.consolasService.buscarJuegos(params['palabrasBusqueda']).subscribe(
          juegos => {
            console.log(juegos);
            resolve(juegos);
          }
        );
      });
      console.log(this.juegos);
    });
  }

}
