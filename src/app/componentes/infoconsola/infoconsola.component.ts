import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService, Consola } from '../../servicios/consolas.service';
import { resolve } from 'url';

@Component({
  selector: 'app-infoconsola',
  templateUrl: './infoconsola.component.html',
  styleUrls: ['./infoconsola.component.css']
})
export class InfoconsolaComponent implements OnInit {

  consola;
  idConsola: string;

  constructor(private activatedRoute: ActivatedRoute,
              private consolasService: ConsolasService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['nombre']);

      // tslint:disable-next-line:no-shadowed-variable
      this.consola = new Promise((resolve, reject) => {
        this.consolasService.obtieneConsola(params['nombre']).subscribe(
          consola => {
            // console.log(consola);
            resolve(consola);
          }
        );
      });
    });
  }

  ngOnInit() {
    console.log(this.consola);
  }

}
