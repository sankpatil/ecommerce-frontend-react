
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductViewModal from "./ProductViewModal";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { fetchProducts } from "../../redux/features/product/productThunks";

function Products() {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.product.products);
    

const loading = useSelector((state) => state.product.loading);

console.log("Products Count:", products.length);
console.log("Loading:", loading);
console.log("Redux Products:", products);


    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="w-full px-4 py-10 sm:px-8 lg:px-14">
            <div className="mx-auto max-w-7xl">

                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                        Our Products
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Explore our collection and find the products you love.
                    </p>
                </div>

                {/* Filter */}
                <Filter />

                {/* Product Content */}
                {products.length === 0 ? (
                    <div className="flex min-h-[300px] items-center justify-center">
                        <p className="text-base text-slate-500">
                            No products found.
                        </p>
                    </div>
                ) : (
                    <div className="min-h-[500px]">
                        <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

                            {products.map((item) => (
                                <ProductCard
                                    key={item.productId}
                                    product={item}
                                    onViewDetails={() => setSelectedProduct(item)}
                                />
                            ))}

                        </div>
                    </div>
                )}

                {/* Pagination */}
                {products.length > 0 && <Pagination />}

            </div>

            {/* Product Details Modal */}
            {selectedProduct && (
                <ProductViewModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
}

export default Products;
