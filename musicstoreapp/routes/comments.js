module.exports = function (app, commentsRepository) {
    app.post('/comments/:song_id', function (req, res) {
        if ( req.session.user == null){
            res.send("El usuario no está autenticado");
            return;
        }

        let comment = {
            author: req.session.user,
            text: req.body.text,
            song_id: req.params.song_id
        }

        commentsRepository.insertComment(comment).then(commentId => {
            res.send('Comentario insertado ' + commentId);
        }).catch(error => {
            res.send("Error al insertar el comentario");
        });
    });
}