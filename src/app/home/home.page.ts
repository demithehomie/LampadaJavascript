import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 // constructor() {}

 interruptor(): void {
  const imagem = (<HTMLImageElement>document.getElementById('lamp')).src;

  const imagem_ligado = 'https://www.w3schools.com/js/pic_bulbon.gif';
  const imagem_desligado = 'https://www.w3schools.com/js/pic_bulboff.gif';

  if (imagem === imagem_ligado) {
    (<HTMLImageElement>document.getElementById('lamp')).src = imagem_desligado;
  } else {
    (<HTMLImageElement>document.getElementById('lamp')).src = imagem_ligado;
  }
}
}
