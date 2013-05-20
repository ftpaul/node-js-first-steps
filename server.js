var http = require('http');
var url = require('url');
var fs = require('fs');

var newPostFormHTML = fs.readFileSync('views/post/new.html');

function renderNewPostForm(request, response) {

	response.writeHead(200, {
		'Content-type': 'text/html; charset=uft-8'
	});
	response.end(newPostFormHTML);

}

function render404(request, response) {

	response.writeHead(404);
	response.end('file not found bitch');
}


var server = http.createServer(function(request, response) {
	var renderNewPostFormRegex = new RegExp('^/posts/new/?$');
	var pathname = url.parse(request.url).pathname;
	if (renderNewPostFormRegex.test(pathname)) {
		renderNewPostForm(request, response);
	} else {
		render404(request, response);
	}
	
});

server.listen(8000);

console.log('Listening on http://127.0.0.1:8000');