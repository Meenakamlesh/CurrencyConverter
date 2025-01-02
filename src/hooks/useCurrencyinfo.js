import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  const [data, setData] = useState({}); // State initialized at the top level

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const result = await response.json();
        setData(result[currency]); // Set data for the selected currency
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchData();
  }, [currency]); // Dependency array ensures it re-fetches on currency change

  return data;
}

export default useCurrencyinfo;
