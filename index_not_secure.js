const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const http = require('http')

app.get('/api/abc', (req, res) => {
	res.json({
		msg: 'what the fucking fuck'
	})
})

http.createServer(app)
	.listen(9999, () => {
		console.info(9999);
  });
