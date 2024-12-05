type Product = {
  id: number;
  title: string;
};

export default async function ProductsPage() {
  // Fetch the product data at build time (server-side)
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-orange-500 flex flex-col justify-center items-center text-white p-20">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">Product List</h1>
        <ul className="text-left">
          {products.map((product: Product) => (
            <li key={product.id} className="mb-2">
              {product.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
