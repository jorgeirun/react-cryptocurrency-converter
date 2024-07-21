import React, { useState } from 'react';
import DataFetcher from './DataFetcher';
import './App.css';

function App() {

  const [symbols, setSymbols] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [cryptoValue, setCryptoValue] = useState(1);
  const [calculatedValue, setCalculatedValue] = useState(0);

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
    const selectedPrice = parseFloat(event.target.value);
    setSelectedSymbol(event.target.options[event.target.selectedIndex].text);
    setSelectedPrice(selectedPrice);
    setCalculatedValue(selectedPrice * cryptoValue);
  }

  // Handles crypto value input change
  const handleCryptoValueChange = (event) => {
    const value = parseFloat(event.target.value) || 0;
    setCryptoValue(value);
    setCalculatedValue(selectedPrice * value);
  };

  // Format the value with thousand separators and 2 decimals
  const formattedValue = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(calculatedValue);

  return (
    <div className="App">
      <header className="App-header">
        <DataFetcher onDataFetched={handleDataFetched} />
        {loading && <p>Loading..</p>}
        {error && <p>Error: {error}</p>}

        <form>
          {!loading && !error && (
            <div className="MainContent">
              <h1>Convert crypto to USD</h1>
              <h5>Select a Coin</h5>
              <input
                type="number"
                name="crypto_value"
                placeholder="1.234"
                step="0.01"
                min="0"
                value={cryptoValue}
                onChange={handleCryptoValueChange}
              />
              <select id="symbolSelect" onChange={handleSelectChange}>
                <option>--</option>
                {symbols.map((coin, index) => (
                  <option key={index} value={coin.price_usd}>
                    {coin.symbol}
                  </option>
                ))}
              </select>
              {selectedSymbol ? (
                <div className="App">
                  <div className="displayValue" tabIndex="0">
                    $ {formattedValue}
                  </div>
                </div>
              ) : (
                <p>Please select a symbol from the dropdown</p>
              )}
            </div>
          )}

        </form>
      </header>
    </div>
  );
}

export default App;
