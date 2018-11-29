'use strict';
module.exports = function(app) {
  var collections = require('./videojuegosController');
  app.route('/plataforma')
  .get(collections.obtener_plataformas);
  app.route('/plataforma/:idPlataforma')
  .get(collections.obtener_plataforma_id);
  app.route('/plataforma/busqueda/:palabraClave')
  .get(collections.obtener_plataformas_palabra);
  app.route('/plataforma/:idPlataforma/juegos')
  .get(collections.obtener_juegos_plataforma);
  app.route('/juegos/busqueda/:palabraClave')
  .get(collections.obtener_juegos_palabra);
  app.route('/plataforma/:idPlataforma/juego/:idJuego')
  .get(collections.obtener_juego_plataforma);
  app.route('/blogs')
  .get(collections.obtener_blogs)
  .post(collections.agregar_blog);
};
