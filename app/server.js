var express = require('express');
var app = express();
var homePage = require('./routers/index');
var data = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('listData', data);

app.use(express.static('app/public'));
app.use('/', homePage);
app.use(require('./routers/user'));


var server = app.listen(app.get('port'), function(){
    //console.log('PORT=4000 node app/server.js to change to PORT 4000');
    //console.log(data);
});