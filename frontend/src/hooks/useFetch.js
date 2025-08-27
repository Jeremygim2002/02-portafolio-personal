import { useEffect, useState } from "react";

export default function useFetch(serviceFn) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const fetch = async () => {
      try {
        const res = await serviceFn({ signal: controller.signal });
        if (isMounted) {
          setData(Array.isArray(res) ? res : []); 
        }
      } catch (err) {
        if (isMounted && err.name !== 'AbortError') setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetch();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [serviceFn]);

  return { data, loading, error };
}
