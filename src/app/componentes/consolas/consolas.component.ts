import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola } from '../../servicios/consolas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  consolas;

  constructor( private consolasService: ConsolasService ) {
    this.consolas = new Promise((resolve, reject) => {
      this.consolasService.obtieneConsolas().subscribe(
        consolas => {
          console.log(consolas);
          resolve(consolas);
        }
      );
    });
  }

  ngOnInit() {
    console.log(this.consolas);
  }

}
