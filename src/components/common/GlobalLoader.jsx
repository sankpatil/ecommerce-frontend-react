
import { useSelector } from "react-redux";

function GlobalLoader() {

    const activeRequests = useSelector(
        (state) => state.global.activeRequests
    );

    if (activeRequests === 0) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 rounded-lg bg-white px-6 py-4 shadow-lg">
                <div className="h-6 w-6 animate-spin rounded-full border-4 border-slate-200 border-t-slate-800"></div>

                <p className="text-sm font-medium text-slate-700">
                    Please wait...
                </p>
            </div>
        </div>
    );
}

export default GlobalLoader;
