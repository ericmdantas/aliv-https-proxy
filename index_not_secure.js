const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const http = require('http')

const PORT = 9998

app.get('/api/abc', (req, res) => {
	res.json({
		msg: 'what the fucking fuck'
	})
})

http.createServer(app)
	.listen(PORT, () => {
		console.info(PORT);
  });
