const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(cors(), express.static(__dirname + '/build'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(port, () => console.log(`application is running on port: ${port}`));
