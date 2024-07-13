import { useEffect } from 'react';

function DataFetcher({ onDataFetched }) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://data.messari.io/api/v1/assets?fields=symbol,metrics/market_data/price_usd");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                onDataFetched(data);
            } catch (error) {
                onDataFetched({ error: error.message });
            }
        };
        fetchData();
    }, []);

    return null;
}

export default DataFetcher;