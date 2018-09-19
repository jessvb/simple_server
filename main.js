const url = require('url');
const http = require('http');
const port = 1234;

const app = http.createServer((request,response) => {
	var q, resp;
	q = url.parse(request.url,true).query;
	if(q.word && q.word == 'hello'){
		resp = 'world!';
		console.log('query: '+q.word);
	} else {
		resp = 'hello?';
	}
	
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(resp);
	response.end();
});

app.listen(port);
