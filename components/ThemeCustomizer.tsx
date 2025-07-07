'use client';

import { useState, useEffect, useCallback } from 'react';

interface Theme {
    name: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
    };
}

const themes: Theme[] = [
    {
        name: 'Dark Red (Default)',
        colors: {
            primary: '#ef4444',
            secondary: '#fbbf24',
            accent: '#fef3c7',
            background: '#0a0a0a',
            text: '#ffffff',
        },
    },
    {
        name: 'Dark Blue',
        colors: {
            primary: '#3b82f6',
            secondary: '#06b6d4',
            accent: '#a78bfa',
            background: '#0f172a',
            text: '#f1f5f9',
        },
    },
    {
        name: 'Dark Green',
        colors: {
            primary: '#10b981',
            secondary: '#34d399',
            accent: '#fbbf24',
            background: '#064e3b',
            text: '#ecfdf5',
        },
    },
    {
        name: 'Dark Purple',
        colors: {
            primary: '#8b5cf6',
            secondary: '#a78bfa',
            accent: '#fbbf24',
            background: '#1e1b4b',
            text: '#f3f4f6',
        },
    },
    {
        name: 'Light Mode',
        colors: {
            primary: '#dc2626',
            secondary: '#f59e0b',
            accent: '#059669',
            background: '#ffffff',
            text: '#111827',
        },
    },
];

// Helper functions moved outside component to prevent recreation
const adjustBrightness = (color: string, amount: number) => {
    // Simple brightness adjustment for hex colors
    const hex = color.replace('#', '');
    const num = parseInt(hex, 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amount));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

const adjustOpacity = (color: string, opacity: number) => {
    // Convert hex to rgba
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export function ThemeCustomizer() {
    const [showCustomizer, setShowCustomizer] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(themes[0]);
    const [customColors, setCustomColors] = useState(themes[0].colors);

    useEffect(() => {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('dashboard-theme');
        if (savedTheme) {
            const theme = JSON.parse(savedTheme);
            setCurrentTheme(theme);
            setCustomColors(theme.colors);
            applyTheme(theme.colors);
        }
    }, []);

    const applyTheme = useCallback((colors: Theme['colors']) => {
        const root = document.documentElement;

        // Update CSS variables
        root.style.setProperty('--bg-primary', colors.background);
        root.style.setProperty('--bg-secondary', adjustBrightness(colors.background, 10));
        root.style.setProperty('--bg-tertiary', adjustBrightness(colors.background, 20));
        root.style.setProperty('--text-primary', colors.text);
        root.style.setProperty('--text-secondary', adjustOpacity(colors.text, 0.7));
        root.style.setProperty('--text-muted', adjustOpacity(colors.text, 0.5));
        root.style.setProperty('--accent-red', colors.primary);
        root.style.setProperty('--accent-yellow', colors.secondary);
        root.style.setProperty('--accent-cream', colors.accent);
        root.style.setProperty(
            '--gradient-primary',
            `linear-gradient(135deg, ${colors.primary} 0%, ${adjustBrightness(colors.primary, -20)} 100%)`,
        );
        root.style.setProperty(
            '--gradient-secondary',
            `linear-gradient(135deg, ${colors.secondary} 0%, ${adjustBrightness(colors.secondary, -20)} 100%)`,
        );
    }, []);

    const selectTheme = (theme: Theme) => {
        setCurrentTheme(theme);
        setCustomColors(theme.colors);
        applyTheme(theme.colors);

        // Save to localStorage
        localStorage.setItem('dashboard-theme', JSON.stringify(theme));
    };

    const updateCustomColor = (colorKey: keyof Theme['colors'], value: string) => {
        const newColors = { ...customColors, [colorKey]: value };
        setCustomColors(newColors);

        const customTheme = { name: 'Custom', colors: newColors };
        setCurrentTheme(customTheme);
        applyTheme(newColors);

        // Save to localStorage
        localStorage.setItem('dashboard-theme', JSON.stringify(customTheme));
    };

    return (
        <>
            {/* Theme Toggle Button */}
            <button
                onClick={() => setShowCustomizer(!showCustomizer)}
                className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg transition-all hover:scale-110 z-40"
                style={{
                    background: 'var(--gradient-primary)',
                    color: 'white',
                }}
                data-oid="3m3f.7w"
            >
                🎨
            </button>

            {/* Theme Customizer Panel */}
            {showCustomizer && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    data-oid="op.h-.1"
                >
                    <div
                        className="glass-effect rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
                        style={{ background: 'var(--bg-secondary)' }}
                        data-oid="r:d89i2"
                    >
                        <div className="flex items-center justify-between mb-6" data-oid="g5x:ckx">
                            <h3
                                className="text-xl font-bold"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid=":5ujr9x"
                            >
                                🎨 Theme Customizer
                            </h3>
                            <button
                                onClick={() => setShowCustomizer(false)}
                                className="text-2xl hover:text-red-400 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="mc4bpqf"
                            >
                                ×
                            </button>
                        </div>

                        {/* Preset Themes */}
                        <div className="mb-6" data-oid="5b3n_2q">
                            <h4
                                className="font-medium mb-3"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="d2lspd2"
                            >
                                Preset Themes
                            </h4>
                            <div className="space-y-2" data-oid="1:_ts48">
                                {themes.map((theme, index) => (
                                    <button
                                        key={index}
                                        onClick={() => selectTheme(theme)}
                                        className={`w-full p-3 rounded-lg text-left transition-all hover:scale-105 ${
                                            currentTheme.name === theme.name
                                                ? 'ring-2 ring-red-500'
                                                : ''
                                        }`}
                                        style={{
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--border-primary)',
                                        }}
                                        data-oid="cajzyfu"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="mrtprk:"
                                        >
                                            <div className="flex space-x-1" data-oid="_rsud4z">
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{
                                                        backgroundColor: theme.colors.primary,
                                                    }}
                                                    data-oid="zecbmd_"
                                                ></div>
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{
                                                        backgroundColor: theme.colors.secondary,
                                                    }}
                                                    data-oid="92lajby"
                                                ></div>
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{ backgroundColor: theme.colors.accent }}
                                                    data-oid="fcqx8_4"
                                                ></div>
                                            </div>
                                            <span
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="y_27.6z"
                                            >
                                                {theme.name}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Custom Colors */}
                        <div data-oid="x8v0xdg">
                            <h4
                                className="font-medium mb-3"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="8gwyues"
                            >
                                Custom Colors
                            </h4>
                            <div className="space-y-3" data-oid="ks-k_6r">
                                <div data-oid="9xw7_bm">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="q5313x7"
                                    >
                                        Primary Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="94cgd1s">
                                        <input
                                            type="color"
                                            value={customColors.primary}
                                            onChange={(e) =>
                                                updateCustomColor('primary', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="m6z1b4a"
                                        />

                                        <input
                                            type="text"
                                            value={customColors.primary}
                                            onChange={(e) =>
                                                updateCustomColor('primary', e.target.value)
                                            }
                                            className="flex-1 p-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                            style={{
                                                background: 'var(--bg-tertiary)',
                                                color: 'var(--text-primary)',
                                            }}
                                            data-oid="01yd8:t"
                                        />
                                    </div>
                                </div>

                                <div data-oid="fitx-uc">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="x2nee-2"
                                    >
                                        Secondary Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="qyglgia">
                                        <input
                                            type="color"
                                            value={customColors.secondary}
                                            onChange={(e) =>
                                                updateCustomColor('secondary', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="b2lwuzh"
                                        />

                                        <input
                                            type="text"
                                            value={customColors.secondary}
                                            onChange={(e) =>
                                                updateCustomColor('secondary', e.target.value)
                                            }
                                            className="flex-1 p-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                            style={{
                                                background: 'var(--bg-tertiary)',
                                                color: 'var(--text-primary)',
                                            }}
                                            data-oid="_lmwjdy"
                                        />
                                    </div>
                                </div>

                                <div data-oid="7ceh8vl">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid=":_m6_s4"
                                    >
                                        Accent Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="d.j3s9-">
                                        <input
                                            type="color"
                                            value={customColors.accent}
                                            onChange={(e) =>
                                                updateCustomColor('accent', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid=":fd.tax"
                                        />

                                        <input
                                            type="text"
                                            value={customColors.accent}
                                            onChange={(e) =>
                                                updateCustomColor('accent', e.target.value)
                                            }
                                            className="flex-1 p-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                            style={{
                                                background: 'var(--bg-tertiary)',
                                                color: 'var(--text-primary)',
                                            }}
                                            data-oid="r-jimqo"
                                        />
                                    </div>
                                </div>

                                <div data-oid="idqm3pc">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="4ocbs.y"
                                    >
                                        Background Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="5k0ywlr">
                                        <input
                                            type="color"
                                            value={customColors.background}
                                            onChange={(e) =>
                                                updateCustomColor('background', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="ncbalve"
                                        />

                                        <input
                                            type="text"
                                            value={customColors.background}
                                            onChange={(e) =>
                                                updateCustomColor('background', e.target.value)
                                            }
                                            className="flex-1 p-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                            style={{
                                                background: 'var(--bg-tertiary)',
                                                color: 'var(--text-primary)',
                                            }}
                                            data-oid="f:xbrcu"
                                        />
                                    </div>
                                </div>

                                <div data-oid="o4:7na:">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="k5n6do-"
                                    >
                                        Text Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="qs3u1xb">
                                        <input
                                            type="color"
                                            value={customColors.text}
                                            onChange={(e) =>
                                                updateCustomColor('text', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="7wyc6bm"
                                        />

                                        <input
                                            type="text"
                                            value={customColors.text}
                                            onChange={(e) =>
                                                updateCustomColor('text', e.target.value)
                                            }
                                            className="flex-1 p-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                            style={{
                                                background: 'var(--bg-tertiary)',
                                                color: 'var(--text-primary)',
                                            }}
                                            data-oid="lcvrt.e"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={() => selectTheme(themes[0])}
                            className="w-full mt-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                            style={{
                                background: 'var(--bg-tertiary)',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border-primary)',
                            }}
                            data-oid="pmkat5a"
                        >
                            Reset to Default
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
