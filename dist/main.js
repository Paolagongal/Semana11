// main.ts
import { Canal } from './canal.js';
import { Plataforma } from './plataforma.js';
import { Streamer } from './streamer.js';
import { Stream } from './stream.js';
import { ListaCategorias } from './listaCategorias.js';
// Variables de ejemplo
let plataforma1 = new Plataforma('Plataforma1', 'logo1.png', 'Descripción de la plataforma 1', 'Empresa 1');
console.log(plataforma1);
let canal1 = new Canal('Canal1', 'banner1.png', 'Streamer1', 'Descripción del canal 1');
console.log(canal1);
let streamer1 = new Streamer('Streamer1', 'Descripción del streamer 1', ['Red social 1', 'Red social 2'], canal1);
console.log(streamer1);
let stream1 = new Stream('2023-06-06', 120, canal1);
console.log(stream1);
let listaCategorias1 = new ListaCategorias('Categoría 1', 'Descripción de la categoría 1', 'imagen1.png');
console.log(listaCategorias1);
// Métodos
function mostrarListadoPlataformas() {
    // Lógica para mostrar el listado de plataformas
}
function mostrarDetallePlataforma(plataforma) {
    // Lógica para mostrar el detalle de una plataforma específica
}
function mostrarListadoCanales() {
    // Lógica para mostrar el listado de canales
}
function mostrarDetalleCanal(canal) {
    // Lógica para mostrar el detalle de un canal específico
}
function mostrarListadoStreamers() {
    // Lógica para mostrar el listado de streamers
}
function mostrarDetalleStreamer(streamer) {
    // Lógica para mostrar el detalle de un streamer específico
}
function mostrarListadoStreams() {
    // Lógica para mostrar el listado de streams
}
function mostrarDetalleStream(stream) {
    // Lógica para mostrar el detalle de un stream específico
}
function agregarPlataforma(plataforma) {
    // Lógica para agregar una plataforma al sistema
}
function agregarCanal(canal) {
    // Lógica para agregar un canal al sistema
}
function agregarStreamer(streamer) {
    // Lógica para agregar un streamer al sistema
}
function agregarStream(stream) {
    // Lógica para agregar un stream al sistema
}
function agregarCanalAStreamer(canal, streamer) {
    // Lógica para agregar un canal a un streamer
}
function agregarStreamAStreamer(stream, streamer) {
    // Lógica para agregar un stream a un streamer
}
// Ejemplo de uso de los métodos
mostrarListadoPlataformas();
mostrarDetallePlataforma(plataforma1);
mostrarListadoCanales();
mostrarDetalleCanal(canal1);
mostrarListadoStreamers();
mostrarDetalleStreamer(streamer1);
mostrarListadoStreams();
mostrarDetalleStream(stream1);
agregarPlataforma(plataforma1);
agregarCanal(canal1);
agregarStreamer(streamer1);
agregarStream(stream1);
agregarCanalAStreamer(canal1, streamer1);
agregarStreamAStreamer(stream1, streamer1);
