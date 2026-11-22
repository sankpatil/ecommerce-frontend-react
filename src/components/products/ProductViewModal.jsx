
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

function ProductViewModal({ product, onClose }) {
  return (
    <Dialog
      open={Boolean(product)}
      onClose={onClose}
      className="relative z-50"
    >
      {/* Background Overlay */}
      <DialogBackdrop className="fixed inset-0 bg-slate-950/50" />

      {/* Modal Position */}
      <div className="fixed inset-0 flex items-center justify-center p-4">

        {/* Modal Content */}
        <DialogPanel className="relative w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-xl">

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close product details"
            className="absolute right-4 top-4 text-2xl text-slate-400 transition-colors hover:text-slate-900"
          >
            &times;
          </button>

          <div className="grid gap-6 sm:grid-cols-2">

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.productName}
              className="h-64 w-full rounded-md bg-slate-50 object-cover"
            />

            {/* Product Details */}
            <div>
              <DialogTitle className="mb-3 text-2xl font-semibold text-slate-900">
                {product.productName}
              </DialogTitle>

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
              {/* Available Quantity */}
              <p className="mb-5 text-sm text-slate-500">
                Available Quantity: {product.quantity}
              </p>

              {/* Stock Condition */}
              {product.quantity > 0 ? (
                <button className="w-full rounded-md bg-slate-900 px-4 py-2.5 font-medium text-white transition-colors hover:bg-slate-700">
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
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default ProductViewModal;
