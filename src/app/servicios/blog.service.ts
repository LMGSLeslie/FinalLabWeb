
import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

    blogEntries: BlogEntry[] = [];

    getBlogEntries(): BlogEntry[] {
        return this.blogEntries;
    }

    postBlogEntry(data): any {
        const blogEntry: BlogEntry = { 'nombre': data.nombre, 'entrada': data.entrada, 'fecha': data.fecha};
        this.blogEntries.push(blogEntry);
    }
}

export class BlogEntry {
    'nombre': string;
    'entrada': string;
    'fecha': string;
}
