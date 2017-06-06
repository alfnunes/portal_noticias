module.exports.noticias = function(application, req, res){
    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.noticiasModel(connection);
    
    noticiasModel.getNoticias(function(error, result){           
        res.render('noticias/noticias',{noticias : result});
    });         
}

module.exports.noticia = function(application, req, res){
    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.noticiasModel(connection);

    let id = req.query.id_noticia;
    
    noticiasModel.getNoticia(id,function(error, result){           
        res.render('noticias/noticia',{noticias : result});
    });     
}