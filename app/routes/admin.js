module.exports = function(application){
    application.get('/admin',function(req,res){
        application.app.controllers.admin.form(application, req, res);
    });

    application.post('/noticias/salvar',function(req,res){
        application.app.controllers.admin.noticias_salvar(application, req, res);        
    });
}