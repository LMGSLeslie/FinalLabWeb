import { BlogService, BlogEntry } from './../../servicios/blog.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  entradaBlog: FormGroup;
  hoy: Date;
  blogEntries: BlogEntry[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.blogEntries = []; // this.blogService.getBlogEntries();

    this.entradaBlog = new FormGroup({
      'nombre': new FormControl(),
      'entrada': new FormControl(),
    });
  }

  guardar() {
    if (this.entradaBlog.valid) {
      this.hoy = new Date();
      this.hoy.toDateString();
      const data = this.entradaBlog.value;
      data.fecha = this.hoy;
      // this.blogService.postBlogEntry(data);
      // this.blogService.getBlogEntries();
      console.log(this.entradaBlog.value);
    }
  }
}
