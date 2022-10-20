const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
port = 8080

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (request, response) => {
	response.status(200).send('GET / 200')
})

app.post('/post/:id', (request, response) => {
	console.log(request.params);
	const { title } = request.body
	const { price } = request.body

	response.status(200).send({
		numero: request.params.id,
		title: title,
		price: price
	})
})

app.listen(port, () => {
	console.log(`server.js has been successfully launched on => http://localhost:${port}`);
})