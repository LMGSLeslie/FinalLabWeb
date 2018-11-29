import { BlogService, BlogEntry } from './../../servicios/blog.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsolasService } from '../../servicios/consolas.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  entradaBlog: FormGroup;
  hoy: Date;
  blogEntries: BlogEntry[];

  constructor(private consolasService: ConsolasService) {
    this.blogEntries = []; // this.blogService.getBlogEntries();

    this.entradaBlog = new FormGroup({
      'autor': new FormControl(''),
      'texto': new FormControl('')
    });
   }

  ngOnInit() {
    this.blogEntries = []; // this.blogService.getBlogEntries();

    this.entradaBlog = new FormGroup({
      'autor': new FormControl(),
      'texto': new FormControl(),
    });
  }

  guardar() {
    if (this.entradaBlog.valid) {
      this.hoy = new Date();
      this.hoy.toDateString();
      //console.log(this.entradaBlog.id.value);
      //this.entradaBlog.id = parseInt(this.entradaBlog.id);
      const data = this.entradaBlog.value;
      data.fecha = this.hoy;
      // this.blogService.postBlogEntry(data);
      // this.blogService.getBlogEntries();
      console.log(this.entradaBlog.value);

      new Promise( (resolve, reject) => {
        this.consolasService.agregarBlog(this.entradaBlog.value).subscribe(
          blogs => {
            resolve()
          }
        )
      })
    }
  }
}
