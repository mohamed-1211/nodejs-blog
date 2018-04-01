var express = require('express');
var router = express.Router();

router.get('/user', function(req, res){
    var list = '';
    var data = req.app.get('listData');
    data.forEach((element, index) => {
        list += `
        <h2>${element.name}</h2>
        <img src="${element.picture}" />
        <p>${element.about}</p>
        <p><a href="/user/${index}">Learn more</a></p>
         `
    });
    res.send(list);
});

router.get('/user/:id', function(req, res){
    var data = req.app.get('listData');
    var user = data[req.params.id];
    res.send(`
        <h2>${user.name}</h2>
        <p>${user.blog}</p>
    `);
});

module.exports = router;