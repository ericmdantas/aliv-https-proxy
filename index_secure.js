const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const https = require('https')

app.get('/api/abc', (req, res) => {
	res.json({
		msg: 'what the fucking fuck'
	})
})

let options = {
	ca: [
	  fs.readFileSync(path.join(__dirname, 'node_modules/aliv/lib/crt/server.csr'))
	],
	cert: fs.readFileSync(path.join(__dirname, 'node_modules/aliv/lib/crt/server.crt')),
	key: fs.readFileSync(path.join(__dirname, 'node_modules/aliv/lib/crt/server.key'))
}

https.createServer(options, app)
		 .listen(9998, () => {
		 		console.info(9998);
	   });
