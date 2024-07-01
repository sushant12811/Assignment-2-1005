import React, { useEffect, useState } from 'react';
import {
  Card
} from "@tremor/react";



/**
 *Fetching the stock data from the alphavantage API and displaying it in card components
 *
 * @return {*} 
 */
const StockData = () => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      const apiKey = '01WUKPUVR43WYTEN';
      const symbols = ['TSLA', 'AAPL', 'GOOGL', 'MSFT', 'AMZN'];
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Checking if the API response contains an error message
        if (data['Error Message']) {
          throw new Error('Failed to fetch stock data for symbol: ' + symbol);
        }
        setStock(data);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch stock data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  if (loading) {
    return <div>Loading stock data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Card className="max-w-3xl" decoration="top" decorationColor="blue">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="px-4 py-5 bg-green-500">
        <h2 className="text-xl font-bold text-white">Stock API</h2>
    </div>
    <div>
      {stock ? (
        <pre>{JSON.stringify(stock, null, 2)}</pre>
      ) : (
        <p>Unable to fetch.</p>
      )}
    </div>
    </div>
    </Card>
  );
};

export default StockData;