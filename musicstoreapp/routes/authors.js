module.exports= function (app, twig) {
    app.get('/authors/add', function(req, res) {
        let roles = [{
            "name": "Batería"
        }, {
            "name": "Teclista"
        }, {
            "name": "Bajista"
        }, {
            "name": "Cantante"
        }, {
            "name": "Guitarrista"
        }];

        let response = {
            roles: roles
        }
        res.render("authors/add.twig", response)
    });

    app.post("/authors/add", function(req,res) {
        let response = "Autor añadido: "
        let notAddedMessage = " no añadido en la petición" + "<br>"
        if(req.body.name != null && typeof (req.body.name) != "undefined")
            response += req.body.name + "<br>"
        else {
            response += notAddedMessage
        }
        response+=" Group: "
        if(req.body.group != null && typeof (req.body.group) != "undefined")
            response += req.body.group + "<br>"
        else {
            response += notAddedMessage
        }
        response+=" Rol: "
        if(req.body.role != null && typeof (req.body.role) != "undefined")
            response += req.body.role + "<br>"
        else {
            response += notAddedMessage
        }

        res.send(response)
    });

    app.get("/authors", function(req, res) {
        let authors = [{
            "name": "Carlos",
            "group": "Weezer",
            "role": "Guitarrista"
        }, {
            "name": "Luis",
            "group": "Weezer",
            "role": "Batería"
        }, {
            "name": "Mark Knopfler",
            "group": "Dire Straits",
            "role": "Guitarrista"
        }];

        let response = {
            seller: "Autores",
            authors: authors
        };

        res.render("authors/authors.twig", response);

    });

    app.get("/authors/*", function(req, res) {
        res.redirect("/authors")
    });
};