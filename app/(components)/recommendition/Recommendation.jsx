import { getRelatedProducts } from "@/services/productServices";
import ProductCard from "../product-card/ProductCard";

export default async function Recommendation({
  productType,
  currentProductId,
}) {
  try {
    if (!productType || !currentProductId) {
      return null;
    }

    const recommendation = await getRelatedProducts(
      productType,
      currentProductId
    );

    if (!recommendation || recommendation.length === 0) return null;
    return (
      <div className="mt-20">
        <div className="custom-container">
          <h2 className="text-2xl capitalize">you may also like</h2>
          <div className="mt-10">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {recommendation?.map((product) => {
                return (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in Recommendation component:", error);
    return null;
  }
}
