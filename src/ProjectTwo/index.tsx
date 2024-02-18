import { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const fetchProducts = async () => {
    let result = [];
    setloading(true);
    const response = await fetch('https://dummyjson.com/posts');
    result = await response.json();
    console.log(result);

    const data = result.posts as any;
    setloading(false);
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return <h1>loading....</h1>;
  }

  return (
    <div className="container">
      {products.map((k: any) => {
        return (
          <div className="product">
            <h4>{k.title}</h4>
            <p>{k.body}</p>
            {k.tags.map((m: any) => (
              <span className="chip">{m}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
export default Products;
