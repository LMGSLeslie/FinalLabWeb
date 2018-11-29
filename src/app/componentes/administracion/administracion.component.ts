import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ConsolasService } from '../../servicios/consolas.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})

export class AdministracionComponent implements OnInit {

  guardandoConsola = true;

  consola: FormGroup;
  games: FormArray;
  constructor(public consolasService: ConsolasService) {
    this.games = new FormArray([
      new FormGroup({
      'nombre': new FormControl(''),
      'portada': new FormControl(''),
      'developer': new FormControl(''),
      'lanzamiento': new FormControl(''),
      'imagenes': new FormGroup({
        'imagen1': new FormControl(''),
        'imagen2': new FormControl(''),
        'imagen3': new FormControl('')
      }),
      'links': new FormGroup({
        'imagen1': new FormControl(''),
        'imagen2': new FormControl(''),
        'imagen3': new FormControl('')
      }),
      'id_plataforma': new FormControl('')
    }),
    new FormGroup({
      'nombre': new FormControl(''),
      'portada': new FormControl(''),
      'developer': new FormControl(''),
      'lanzamiento': new FormControl(''),
      'imagenes': new FormGroup({
        'imagen1': new FormControl(''),
        'imagen2': new FormControl(''),
        'imagen3': new FormControl('')
      }),
      'links': new FormGroup({
        'imagen1': new FormControl(''),
        'imagen2': new FormControl(''),
        'imagen3': new FormControl('')
      }),
      'id_plataforma': new FormControl('')
    }),
    new FormGroup({
      'nombre': new FormControl(''),
      'portada': new FormControl(''),
      'developer': new FormControl(''),
      'lanzamiento': new FormControl(''),
      'imagenes': new FormGroup({
        'imagen1': new FormControl(''),
        'imagen2': new FormControl(''),
        'imagen3': new FormControl('')
      }),
      'links': new FormGroup({
        'imagen1': new FormControl(''),
        'imagen2': new FormControl(''),
        'imagen3': new FormControl('')
      }),
      'id_plataforma': new FormControl('')
    })
    ]);

    this.consola = new FormGroup({
      'nombre': new FormControl(''),
      'imagen': new FormControl(''),
      'ficha': new FormControl(''),
      'juegos': this.games
    });
  }


  get juegos(): FormArray {
    return this.consola.get('juegos') as FormArray;
  }
  ngOnInit() {
  }
  guardar() {
    console.log(this.games.at(0)['controls']['imagenes'].controls);
    console.log(this.consola.value);

    // tslint:disable-next-line:no-unused-expression
    new Promise((resolve, _reject) => {
      this.consolasService.agregarPlataforma(this.consola.getRawValue()).subscribe(
        _plataformas => {
          resolve();
        }
      );
    });
  }
}
