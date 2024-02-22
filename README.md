# CRYPTO-TRACKER 📈

## Description

A simple cryptocurrency tracker that allows you to track the price of your favorite cryptocurrencies and also convert them to other currencies of any date in the past using the CoinGecko API.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
DB_URI=YOUR_MONGODB_URI
```

## Run Locally

```bash
git clone https://github.com/sparshmahajan/Crypto-Tracker.git
cd Crypto-Tracker
npm install
npm run dev
```

## Deployment

This project is deployed on Render. You can check it out [here](https://crypto-tracker-rjwc.onrender.com/api)

## Created API Endpoints

This project has the following API endpoints:

- `GET /api/v1/exchange-rates` - Get the exchange rates of a cryptocurrency to other currencies of any date in the past
- `GET /api/v1/public-treasury` - Get the public treasury of a cryptocurrency

## Tech Stack

**Server:** Node, Express, TypeScript

**Database:** MongoDB

## Public APIs

This project uses the following public APIs:

- [CoinGecko API](https://www.coingecko.com/api/documentation)

Remember to replace the technologies and APIs with the ones you are actually using in your project.
