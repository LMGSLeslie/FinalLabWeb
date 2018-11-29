import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ConsolasService } from '../../servicios/consolas.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  formulario:FormGroup;
  constructor(public consolasService : ConsolasService) {
    this.formulario = new FormGroup({
      'nombre': new FormControl(''),
      'imagen': new FormControl(''),
      'ficha': new FormControl(''),

      'juegos': new FormArray([
        new FormGroup({
          '_id': new FormControl(''),
          'nombre': new FormControl('')
        }),
        new FormGroup({
          '_id': new FormControl(''),
          'nombre': new FormControl('')
        }),
        new FormGroup({
          '_id': new FormControl(''),
          'nombre': new FormControl('')
        })
      ])
      
    })
  }
  get juegos(): FormArray {
    return this.formulario.get('juegos') as FormArray;
  }
  ngOnInit() {
  }
  guardar(){
    console.log(this.formulario.value);

    new Promise( (resolve, reject) => {
      this.consolasService.agregarPlataforma(this.formulario.value).subscribe(
        plataformas => {
          resolve()
        }
      )
    })
  }
}
