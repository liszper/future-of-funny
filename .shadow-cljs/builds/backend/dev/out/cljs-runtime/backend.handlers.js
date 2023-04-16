goog.provide('backend.handlers');
backend.handlers.index = (function backend$handlers$index(req,res){
return res.send(backend.html.render_page(req.path));
});

//# sourceMappingURL=backend.handlers.js.map
