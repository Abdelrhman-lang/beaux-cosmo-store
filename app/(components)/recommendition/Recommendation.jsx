import { Spinner } from "@/components/ui/spinner";
import ProductCard from "../product-card/ProductCard";

export default function Recommendation({ items, loading }) {
  const recommendation = items?.slice(0, 4);
  return (
    <div className="mt-20">
      <h2 className="text-2xl capitalize">you may also like</h2>
      <div className="mt-10">
        {loading ? (
          <div className="flex items-center justify-center">
            <Spinner className={"w-10 h-10"} />
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {recommendation?.map((product) => {
              return (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
