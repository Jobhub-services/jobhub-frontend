const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
console.log(process.env.APP_PORT);
app.listen(process.env.APP_PORT || 3000);
