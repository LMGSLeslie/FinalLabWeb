'use strict';
module.exports = function(app) {
    var coleccionVideojuegos = require('./coleccionVideojuegosController');
    app.route('/plataformas')
    .get(coleccionVideojuegos.obtener_plataformas);
    app.route('/plataformas/:nombre')
    .get(coleccionVideojuegos.obtener_plataforma_nombre);
    app.route('/plataformas/busqueda/:palabraClave')
    .get(coleccionVideojuegos.buscar_plataformas_palabra);
    app.route('/juegos/:nombrePlataforma')
    .get(coleccionVideojuegos.obtener_juegos_nombrePlataforma);
    app.route('/juegos/busqueda/:palabraClave')
    .get(coleccionVideojuegos.buscar_juegos_palabra);
    app.route('/juegos/:nombreConsola/:idJuego')
    .get(coleccionVideojuegos.obtener_juego);
    app.route('/blogs')
    .get(coleccionVideojuegos.obtener_blogs);
};
