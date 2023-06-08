
import { Plataforma } from './plataforma.js';
import { Stream } from './stream';

export class Canal {
  nombre: string
  banner: string
 
  descripcion: string
  streams: Stream []
  plataforma: Plataforma[]

  constructor(nombre: string, banner: string, descripcion: string){
    this.nombre = nombre
    this.banner = banner    
    this.descripcion = descripcion
    this.streams = []
    this.plataforma = []
    
  }

  agregarPlataforma(plataforma: Plataforma) {
    this.plataforma.push(plataforma)
  }
}

