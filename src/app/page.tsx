import { ProductProps } from "@/types/product";
import ProductCard from "@/components/product-card";

export default async function Home() {
  const response = await fetch(`${process.env.API_URL}/product`, {
    cache: "no-cache",
  });

  const products: ProductProps[] = (await response.json()) || [];

  const handleDelete = async (productId: string) => {
    await fetch(`${process.env.API_URL}/product/${productId}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <main className="flex flex-col items-center h-screen p-6">
        <div className="w-full max-w-[1280px] grid grid-cols-5 gap-2">
          {products.map((product) => (
            <ProductCard
              handleDelete={handleDelete}
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </main>
    </>
  );
}
