const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors(
  {origin : "*",
  }));
app.get('/', (req, res) => {
  const results = [];

  fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
