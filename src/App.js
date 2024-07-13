import React, { useState } from 'react';
import DataFetcher from './DataFetcher';
import './App.css';

function App() {

  const [symbols, setSymbols] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSymbol, setSelectedSymbol] = useState('');

  // Handles data fetched from request
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

  // Handles dropdown selection updates
  const handleSelectChange = (event) => {
    setSelectedSymbol(event.target.value)
  }

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
              <select id="symbolSelect" onChange={handleSelectChange}>
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
          <input type="text" name="crypto_value" placeholder="1.234"/>
          <br />
          {selectedSymbol ? (
            <input type="text" name="usd_value" placeholder="1,234.56" value={selectedSymbol} readOnly/>
          ) : (
            <p>Please select a symbol from the dropdown</p>
          )}
        </form>
      </header>
    </div>
  );
}

export default App;
