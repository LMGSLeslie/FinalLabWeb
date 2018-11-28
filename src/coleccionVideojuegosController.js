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

exports.obtener_plataforma_nombre = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var nombrePlataforma = req.params.nombre;
        db.collection("consolas").find({nombre:nombrePlataforma}).project({nombre:1, imagen:1, "ficha_tecnica":1}).toArray(function(err,result){
            if (err){
                throw err;
            }
            console.log("Consulta ejecutada...");
            mdbclient.close();
            res.end( JSON.stringify(result));
        });
    });
};

exports.buscar_plataformas_palabra = function(req,res){
    MongoClient.connect(url,{useNewUrlParser:true},function(err,mdbclient){
        if(err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var palabraClave = req.params.palabraClave;

        db.collection("consolas").find({nombre:new RegExp(palabraClave,'i')}).project({nombre:1, imagen:1, "ficha tecnica":1}).toArray(function(err,result){
            if(err){
                throw err;
            }
            console.log("Resultados obtenidos: " + result.length);
            mdbclient.close();
            console.log(res);
            res.end(JSON.stringify(result));
        });
    });
};

exports.obtener_juegos_nombrePlataforma = function(req,res){
    MongoClient.connect(url,{useNewUrlParser:true},function(err,mdbclient){
        if(err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var nombrePlataforma = req.params.nombrePlataforma;
        var juegos = [3];
        db.collection("consolas").find({nombre:nombrePlataforma}).project({juegos:1}).toArray(function(err,result){
            if(err){
                console.log(err);
                throw err;
            }
            console.log("...Resultados obtenidos: " + result.length);
            mdbclient.close();
            juegos = result[0].juegos;
        });
        db.collection("videojuegos").find({_id: {$in: ['4','5','6']}}).project({nombre:1, imagen:1, "imagen portada":1}).toArray(function(err,result){
            if(err){
                console.log(err);
                throw err;
            }
            console.log(juegos[0])
            console.log("Resultados obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};

exports.buscar_juegos_palabra = function(req,res){
    MongoClient.connect(url,{useNewUrlParser:true},function(err,mdbclient){
        if(err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var palabraClave = req.params.palabraClave;

        db.collection("videojuegos").find({nombre:new RegExp(palabraClave,'i')}).project({nombre:1, imagen:1, "imagen portada":1}).toArray(function(err,result){
            if(err){
                console.log(err);
                throw err;
            }
            console.log("Resultados obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};

exports.obtener_juego = function(req,res){
    MongoClient.connect(url,{useNewUrlParser:true},function(err,mdbclient){
        if(err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        var nombreConsola = req.params.nombreConsola;
        var idJuego = req.params.idJuego;
        var juegos = [3];
        db.collection("consolas").find({nombre:nombreConsola}).project({juegos:1}).toArray(function(err,result){
            if(err){
                console.log(err);
                throw err;
            }
            console.log("Resultados obtenidos: " + result.length);
            mdbclient.close();
            juegos = result[0].juegos;
            console.log(juegos);
        });
        db.collection("videojuegos").find({$and:[{_id: {$in: juegos}},{_id:idJuego}]}).project({_id:0}).toArray(function(err,result){
            if(err){
                console.log(err);
                throw err;
            }
            console.log("Resultados obtenidos: " + result.length);
            mdbclient.close();
            res.end(JSON.stringify(result));
        });
    });
};

exports.obtener_blogs = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err){
            throw err;
        }
        const db = mdbclient.db(dbName);
        db.collection("blogs").find({}).project({_id:0}).toArray(function(err, result) {
            if (err){
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end( JSON.stringify(result));
        });
    });
};
