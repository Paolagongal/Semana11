import { Canal } from "./canal.js"


export class Plataforma {
    nombre: string
    logo: string
    descripcion: string
    empresa: string
    canal:Canal[]
  
    constructor(
      nombre: string,
      logo: string, 
      descripcion: string, 
      empresa: string,
      canal:Canal) 
      {

      if (canal){
        this.canal=[canal]
      }else {
        this.canal= []
      }
      this.nombre = nombre
      this.logo = logo
      this.descripcion = descripcion
      this.empresa = empresa

     
    }
  }

  
    
  