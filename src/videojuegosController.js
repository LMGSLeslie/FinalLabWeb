'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'portal_videojuegos';

exports.obtener_plataformas = function(req,res){
    MongoClient.connect(url,{useNewUrlParser:true},function(err,mdbclient){
        if(err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        db.collection("plataforma").find({}).toArray(function(err,result){
            if (err){
                throw err;
            }
            console.log("Consulta ejecutada...");
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};

exports.obtener_plataforma_id = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err) {
            throw err;
        }
        const db = mdbclient.db(dbName);
        var idPlataforma = req.params.idPlataforma;
        db.collection("plataforma").find({_id: parseInt(idPlataforma)}, {_id:0}).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log(idPlataforma);
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};

exports.obtener_plataformas_palabra = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err) {
            throw err;
        }
        const db = mdbclient.db(dbName);
        var palabraClave = req.params.palabraClave;
        db.collection("plataforma").find({nombre: new RegExp(palabraClave, 'i')}, {_id:0}).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};

exports.obtener_juegos_plataforma = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err) {
            throw err;
        }
        const db = mdbclient.db(dbName);
        var idPlataforma = req.params.idPlataforma;
        db.collection("juego").find({id_plataforma: parseInt(idPlataforma)}, {_id:0, developer:0, lanzamiento:0, imagenes:0, links:0, id_plataforma:0}).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};

exports.obtener_juegos_palabra = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err) {
            throw err;
        }
        const db = mdbclient.db(dbName);
        var palabraClave = req.params.palabraClave;
        db.collection("juego").find({nombre: new RegExp(palabraClave, 'i')}, {_id:0, developer:0, lanzamiento:0, imagenes:0, links:0, id_plataforma:0}).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};

exports.obtener_juego_plataforma = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err) {
            throw err;
        }
        const db = mdbclient.db(dbName);
        var idPlataforma = req.params.idPlataforma;
        var idJuego = req.params.idJuego;
        db.collection("juego").find({_id: parseInt(idJuego), id_plataforma: parseInt(idPlataforma)}, {_id: 0, id_plataforma: 0}).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};

exports.obtener_blogs = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err) {
            throw err;
        }
        const db = mdbclient.db(dbName);
        db.collection("blog").find({}, {_id: 0}).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};
