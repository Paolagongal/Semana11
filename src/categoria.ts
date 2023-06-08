
import { Stream } from './stream.js';

export class Categoria {
  nombre: string;
  descripcion: string;
  imagen: string;
  streams: Stream[];

  constructor(nombre: string, descripcion: string, imagen: string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.streams = [];
  }
}
