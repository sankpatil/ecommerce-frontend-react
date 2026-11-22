
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product, onViewDetails }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.productName}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">

        {/* Product Name */}
        <h2 className="mb-2 text-xl font-semibold text-slate-900">
          {product.productName}
        </h2>

        {/* Product Description */}
        <p className="mb-4 text-sm leading-relaxed text-slate-600">
          {product.description}
        </p>

        {/* Product Price */}
        <div className="mb-5 flex items-center gap-3">

          {product.specialPrice != null ? (
            <>
              <span className="text-xl font-bold text-slate-900">
                ${product.specialPrice}
              </span>

              <span className="text-sm text-slate-400 line-through">
                ${product.price}
              </span>

              <span className="rounded bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                {product.discount}% OFF
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-slate-900">
              ${product.price}
            </span>
          )}

        </div>

        {/* View Details Button */}
        <button
          onClick={onViewDetails}
          className="mb-2 w-full rounded-md border border-slate-300 px-4 py-2.5 font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          View Details
        </button>

        {/* Add to Cart / Out of Stock */}
        {product.quantity > 0 ? (
          <button
            onClick={() => {}}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 font-medium text-white transition-colors hover:bg-slate-700"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        ) : (
          <button
            disabled
            className="w-full cursor-not-allowed rounded-md bg-slate-100 px-4 py-2.5 font-medium text-slate-400"
          >
            Out of Stock
          </button>
        )}

      </div>
    </div>
  );
}

export default ProductCard;
