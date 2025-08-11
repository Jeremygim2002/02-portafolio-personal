import { useEffect, useState } from "react";

export default function useFetch(serviceFn) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetch = async () => {
      try {
        const res = await serviceFn();
        if (isMounted) {
          setData(Array.isArray(res) ? res : []); 
        }
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetch();
    return () => {
      isMounted = false;
    };
  }, [serviceFn]);

  return { data, loading, error };
}
