module.exports = {
    subscribe: function (req, res) {
        if (!req.isSocket) {
            return res.badRequest();
        }

        sails.socket.join(req.socket, 'feed');

        return res.ok();
    }
}