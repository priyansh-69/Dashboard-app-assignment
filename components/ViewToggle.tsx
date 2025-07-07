'use client';

interface ViewToggleProps {
    isMinimal: boolean;
    onToggle: (minimal: boolean) => void;
}

export function ViewToggle({ isMinimal, onToggle }: ViewToggleProps) {
    return (
        <div className="fixed top-4 right-4 z-50" data-oid="8gx1vdw">
            <div
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-2"
                data-oid="zaivtbh"
            >
                <div className="flex items-center space-x-2" data-oid="0y0x.ys">
                    <span className="text-sm text-slate-600 dark:text-slate-300" data-oid="_uob4rc">
                        View:
                    </span>
                    <button
                        onClick={() => onToggle(false)}
                        className={`px-3 py-1 text-sm rounded transition-colors ${
                            !isMinimal
                                ? 'bg-indigo-600 text-white'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                        data-oid="7b2dvx:"
                    >
                        Full
                    </button>
                    <button
                        onClick={() => onToggle(true)}
                        className={`px-3 py-1 text-sm rounded transition-colors ${
                            isMinimal
                                ? 'bg-indigo-600 text-white'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                        data-oid=".fj65u0"
                    >
                        Minimal
                    </button>
                </div>
            </div>
        </div>
    );
}
