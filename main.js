const url = require('url');
const http = require('http');
const port = 1234;

const app = http.createServer((request,response) => {
	var q, respJSON;
	q = url.parse(request.url,true).query;
	if(q.word && q.word == 'hello'){
		respJSON = {response:'world!'};
		console.log('query: '+q.word);
	} else {
		respJSON = {response:'hello?'};
	}
	
	response.writeHead(200, {'Content-Type': 'application/json','json':'true'});
	response.write(JSON.stringify(respJSON));
	response.end();
});

app.listen(port);
