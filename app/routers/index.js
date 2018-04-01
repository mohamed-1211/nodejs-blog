var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send(`
        <h1>Welcome to blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at elit convallis quam facilisis ornare eu a enim. Aliquam a purus enim. Vivamus leo metus, scelerisque sit amet porttitor eu, tincidunt et urna. Nullam dignissim arcu sed eleifend egestas. Pellentesque sagittis id odio ut ornare. Curabitur dictum libero nec enim tempor, nec faucibus augue euismod. Curabitur dictum quam urna, luctus gravida libero ultricies in. Vestibulum auctor egestas venenatis. Vestibulum gravida nibh eu mi malesuada egestas. Nulla elementum libero neque, in bibendum augue pharetra at. Suspendisse interdum nisl eu est accumsan, in venenatis erat rutrum. Etiam quis rutrum ipsum. Nullam ut erat eget augue rutrum fringilla. Mauris a feugiat dolor. Aliquam neque nulla, consectetur non faucibus in, sollicitudin non magna. Suspendisse vel lacinia mi, vitae hendrerit tellus.</p>
        <p><a href="/user">list of bloggers</a></p>
        <p>Picture source : https://loremflickr.com/</p>
        <p>JSON data source : https://www.json-generator.com/</p>
        <p>Lorem ipsum : https://fr.lipsum.com/</p>
    `);
});

module.exports = router;