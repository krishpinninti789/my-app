import { useState, useEffect } from "react";

type MyObject = Record<string, any>;

const CACHE_KEY = "fetchedData";
const CACHE_EXPIRY_TIME = 60 * 60 * 1000;

function useFetch(url: string) {
  const [data, setData] = useState<MyObject>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          const now = Date.now();

          if (now - timestamp < CACHE_EXPIRY_TIME) {
            console.log("Using cached data");
            setData(data);
            setLoading(false);
            return;
          } else {
            localStorage.removeItem(CACHE_KEY);
          }
        }

        console.log("Fetching new data from API...");
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");

        const result = await response.json();
        setData(result);
        setLoading(false);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data: result,
            timestamp: Date.now(),
          })
        );
      } catch (err: any) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
