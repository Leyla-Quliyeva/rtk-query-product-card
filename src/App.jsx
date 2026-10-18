import ProductCard from "./components/ProductCard";
import { useGetProductsQuery } from "./services/productsApi";

const App = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
    isFetchhing,
  } = useGetProductsQuery();

  if (isLoading) return <p>...loading</p>;
  if (isError) {
    return <p>Xəta baş verdi. {error?.message || error?.statusText}</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-8">Products</h1>
      <div className="m-30 grid grid-cols-3  gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
