const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const marketController = require('./controllers/marketController.js')


app.use('/build/bundle.js', express.static(path.resolve(__dirname, '../build')));

app.get('/markets', marketController.getMarkets, marketController.addTime, (req, res) => {
  res.status(200).json(res.locals.marketList);
})

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use(express.json());

app.use(({ code, error }, req, res, next) => {
  res.status(code).json({ error });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});