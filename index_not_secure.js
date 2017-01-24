const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const http = require('http')

const PORT = 9998

app.get('/api/not_secure', (req, res) => {
	res.json({
		msg: 'works, yay'
	})
})

http.createServer(app)
	.listen(PORT, () => {
		console.info(PORT);
  });
