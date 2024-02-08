import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then(async (res) => {
        const jsonData = await res.json();
        setData(jsonData[currency]);
      })
      .catch((error) => {
        console.error('Error fetching currency data:', error);
      });
  }, [currency]);

  return data
}
export default useCurrencyInfo;