import { useDispatch, useSelector } from "react-redux";
import { clearGlobalError } from "../../redux/features/global/globalSlice";

function GlobalError() {
    const dispatch = useDispatch();

    const error = useSelector((state) => state.global.error);

    if (!error) {
        return null;
    }

    return (
        <div className="fixed right-5 top-5 z-[10000] flex items-center gap-4 rounded-lg bg-red-600 px-5 py-3 text-white shadow-lg">
            <p className="text-sm font-medium">{error}</p>

            <button
                onClick={() => dispatch(clearGlobalError())}
                className="font-bold hover:text-red-200"
            >
                ✕
            </button>
        </div>
    );
}

export default GlobalError;