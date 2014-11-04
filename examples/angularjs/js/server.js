var Hapi = require('hapi');
var server = new Hapi.Server('localhost', 9000, {
    cors:true
});

var sampleObject = [{
    'title': 'Uncompleted Item 0',
    'completed': false,
}, {
    'title': 'Uncompleted Item 1',
    'completed': false
}, {
    'title': 'Uncompleted Item 2',
    'completed': false
}, {
    'title': 'Completed Item 0',
    'completed': true
}, {
    'title': 'Completed Item 1',
    'completed': true
}];


server.route ({
    path:"/",
    method: "GET",
    handler: function (request, reply) {
        //console.log(JSON.stringify(sampleObject));
        reply(JSON.stringify(sampleObject));
		    
    }
});


server.route ({
    path:"/push",
    method: "POST",
    handler: function (request, reply) {
        //console.log("something request")
        //console.log("got a post request");
        //console.log(request.payload);
        sampleObject = request.payload;
    }
});

server.start (function () {

});
