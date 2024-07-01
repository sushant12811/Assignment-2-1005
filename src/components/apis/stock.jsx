import React, { useEffect, useState } from 'react';
import { Card } from "@tremor/react";


//stock data API fetching
const StockData = () => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      const apiKey = 'K0WFv8ArBQvHwLxlFJr1pPw0ooeypB_Z';
      const symbols = ['TSLA', 'AAPL', 'GOOGL', 'MSFT', 'AMZN'];
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      const url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/2023-01-09/2023-01-09?apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.status !== 'OK') {
          throw new Error('Failed to fetch stock data for symbol: ' + symbol);
        }
        setStock(data.results[0]); 
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


  //Structured data of stock
  return (
    <Card className="max-w-3xl" decoration="top" decorationColor="blue">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 bg-green-500">
          <h2 className="text-xl font-bold text-white">Stock API</h2>
        </div>
        <div className="p-4">
          <p>Symbol: {stock.symbol}</p>
          <p>Open: {stock.o}</p>
          <p>High: {stock.h}</p>
          <p>Low: {stock.l}</p>
          <p>Close: {stock.c}</p>
          
        </div>
      </div>
    </Card>
  );
};

export default StockData;
