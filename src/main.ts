
import { Canal } from './canal.js'
import { Plataforma } from './plataforma.js'
import { Streamer } from './streamer.js'
import { Stream } from './stream.js'
import { Categoria } from './categoria.js';


const canal1 = new Canal('Angela', 'banner1.jpg', 'divertido,chat')
console.log(canal1)
const canal2 = new Canal('Dross', 'banner2.jpg', 'entretenimiento,aprendizaje,terror')
console.log(canal2)

const plataforma1 = new Plataforma('twitch', 'logo1.jpg', 'juegos,chat,entretenimiento', 'Empresa 1',canal1)
console.log(plataforma1)
const plataforma2 = new Plataforma('youtube ', 'logo2.jpg', 'videos,entretenimiento', 'Empresa 2',canal2)
console.log(plataforma2)

const streamer1 = new Streamer('Streamer 1', 'Descripción del Streamer 1',[],canal1)
console.log(streamer1)
const streamer2 = new Streamer('Streamer 2', 'Descripción del Streamer 2',[],canal2)
console.log(streamer2)

const stream1 = new Stream('2023-06-08', 120, canal1)
const stream2 = new Stream('2023-06-09', 180, canal2)

const categoria1 = new Categoria('Categoría 1', 'Descripción de la Categoría 1', 'imagen1.jpg')
const categoria2 = new Categoria('Categoría 2', 'Descripción de la Categoría 2', 'imagen2.jpg')


class PlataformaService {
  plataformas: Plataforma[] = [plataforma1, plataforma2]
mostrarListadoPlataformas() {
    return this.plataformas.map(plataforma => plataforma.nombre)
  }

  mostrarDetallePlataforma(nombre: string) {
    return this.plataformas.find(plataforma => plataforma.nombre === nombre)
  }

  agregarPlataforma(plataforma: Plataforma) {
    this.plataformas.push(plataforma)
  }
}


class CanalService {
  canales: Canal[] = [canal1, canal2]

  mostrarListadoCanales() {
    return this.canales.map(canal => canal.nombre)
  }

  mostrarDetalleCanal(nombre: string) {
    return this.canales.find(canal => canal.nombre === nombre)
  }

  agregarCanal(canal: Canal) {
    this.canales.push(canal)
  }
}

class StreamerService {
  streamers: Streamer[] = [streamer1, streamer2]

  mostrarListadoStreamers() {
    return this.streamers.map(streamer => streamer.nickName)
  }

  verDetalleStreamer(nickName: string) {
    return this.streamers.find(streamer => streamer.nickName === nickName);
  }

  agregarStreamer(streamer: Streamer) {
    this.streamers.push(streamer);
  }

  agregarCanalAStreamer(canal: Canal, streamer: Streamer) {
    streamer.canal = canal;
  }
}

class StreamService {
  streams: Stream[] = [stream1, stream2]

  mostrarListadoStreams() {
    return this.streams.map(stream => stream.fecha)
  }

  mostrarDetalleStream(fecha: string) {
    return this.streams.find(stream => stream.fecha === fecha)
  }

  agregarStream(stream: Stream) {
    this.streams.push(stream)
  }

  agregarStreamAStreamer(stream: Stream, streamer: Streamer) {
    stream.canal = streamer.canal
  }
}


const plataformaService = new PlataformaService();
console.log('Listado de plataformas:', plataformaService.mostrarListadoPlataformas())
console.log('Detalle de plataforma:', plataformaService.mostrarDetallePlataforma('Plataforma 1'))

const canalService = new CanalService();
console.log('Listado de canales:', canalService.mostrarListadoCanales())
console.log('Detalle de canal:', canalService.mostrarDetalleCanal('Canal 1'))

const streamerService = new StreamerService();
console.log('Listado de streamers:', streamerService.mostrarListadoStreamers())
console.log('Detalle de streamer:', streamerService.verDetalleStreamer('Streamer 1'))

const streamService = new StreamService();
console.log('Listado de streams:', streamService.mostrarListadoStreams())
console.log('Detalle de stream:', streamService.mostrarDetalleStream('2023-06-08'))
