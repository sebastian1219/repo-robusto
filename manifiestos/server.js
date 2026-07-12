const express = require('express');
const app = express();
const port = 8080;

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Orders service running on port ${port}`);
});
