const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const https = require('https')

const PORT = 9999

app.get('/api/secure', (req, res) => {
	res.json({
		msg: 'y u no work'
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
		 .listen(PORT, () => {
		 		console.info(PORT);
	   });
