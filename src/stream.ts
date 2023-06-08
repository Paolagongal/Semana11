
import { Canal } from './canal.js';

export class Stream {
  fecha: string
  duracion: number
  canal: Canal

  constructor(fecha: string, duracion: number,canal:Canal) {
    this.fecha = fecha
    this.duracion = duracion
    this.canal = canal
  }
}
