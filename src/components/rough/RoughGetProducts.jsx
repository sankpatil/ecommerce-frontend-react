
import { useEffect, useState } from "react";

import api from './../../api/axiosConfig';

function RoughGetProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get(
          "/public/categories/products",
          {
            signal: controller.signal,
          }
        );

        setProducts(response.data);

      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(err.message || "Failed to fetch products");
          console.error(err);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Products</h2>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}

export default RoughGetProducts;
