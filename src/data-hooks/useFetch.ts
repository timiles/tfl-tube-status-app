import { useEffect, useState } from 'react';

export interface IFetchStatus<T> {
  loading: boolean;
  error?: string;
  data?: T;
}

export default function useFetch<T>(url: string): IFetchStatus<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          setData(await response.json() as T);
        } else {
          setError(await response.text());
        }
      } catch (e) {
        // TODO: handle error better
        setError(e.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error, data };
}
