import express from 'express';

const app = express();

app.use(express.json());

app.use('/exchange-rates', async (_req, res) => {
  try {
    const response = await fetch(
      'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
    );
    const text = await response.text();
    const lines = text.split('\n').slice(2, -1);
    const rates = lines.map((line) => {
      const [country, currencyName, amount, currencyCode, rate] = line.split('|');
      return {
        country,
        currencyName,
        currencyCode,
        amount: +amount,
        rate: parseFloat(rate),
      };
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(rates);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(4000, () => console.log('Proxy server listening on port 4000'));