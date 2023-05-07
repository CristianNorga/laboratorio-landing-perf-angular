import { Component, Input, AfterContentInit } from '@angular/core';

interface Source {
  path: string;
  media: string;
}

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html'
})
export class ImgComponent implements AfterContentInit {

  @Input() path = '';
  @Input() alt = '';
  sources: Source[] = [];

  constructor() { }

  ngAfterContentInit(): void {
    this.generateSizes();
  }

  generateSizes() {
    const splitPath = this.path.split('/');
    const fileName = splitPath.pop();
    const path = splitPath.join('/');
    const splitFileName = fileName?.split('.') ?? [];
    const ext = splitFileName.pop();
    const name = splitFileName.pop();

    this.sources = [
      {
        path: `${path}/${name}-large.webp`,
        media: '(max-width: 2000px)'
      },
      {
        path: `${path}/${name}-medium.webp`,
        media: '(max-width: 640px)'
      },
      {
        path: `${path}/${name}-small.webp`,
        media: '(max-width: 200px)'
      },
      {
        path: `${path}/${name}-large.${ext}`,
        media: '(max-width: 2000px)'
      },
      {
        path: `${path}/${name}-medium.${ext}`,
        media: '(max-width: 640px)'
      },
      {
        path: `${path}/${name}-small.${ext}`,
        media: '(max-width: 200px)'
      },
    ];

  }
}
