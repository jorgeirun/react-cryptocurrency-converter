import React, { useState } from 'react';
import DataFetcher from './DataFetcher';
import './App.css';

function App() {

  const [symbols, setSymbols] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDataFetched = (fetchedData) => {
    if (fetchedData.error) {
      setError(fetchedData.error);
    } else {
      const symbolsList = fetchedData.data.map(coin => ({
        symbol: coin.symbol,
        price_usd: coin.metrics.market_data.price_usd,
      }));
      setSymbols(symbolsList);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <DataFetcher onDataFetched={handleDataFetched} />
        {loading && <p>Loading..</p>}
        {error && <p>Error: {error}</p>}
        <form>
          {!loading && !error && (
            <div>
              <h1>Crypto Converter</h1>
              <h5>Select a Coin</h5>
              <select id="symbolSelect">
                <option>--</option>
                {symbols.map((coin, index) => (
                  <option key={index} value={coin.price_usd}>
                    {coin.symbol}
                  </option>
                ))}
              </select>
            </div>
          )}
          <br />
          <input type="text" name="crypto_value" placeholder="1.234" value="1" />
          <br />
          <input type="text" name="usd_value" placeholder="1,234.56" />
        </form>
      </header>
    </div>
  );
}

export default App;
