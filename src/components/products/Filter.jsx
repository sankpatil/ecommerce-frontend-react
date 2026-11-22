
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../redux/features/product/productThunks";

function Filter() {
    const dispatch = useDispatch();

    const [keyword, setKeyword] = useState("");

    const handleSearch = () => {
        const trimmedKeyword = keyword.trim();

        if (!trimmedKeyword) {
            return;
        }

        dispatch(searchProducts(trimmedKeyword));
    };

    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
                type="text"
                placeholder="Search products..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-500 sm:max-w-md"
            />

            <button
                onClick={handleSearch}
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
                Search
            </button>
        </div>
    );
}

export default Filter;
