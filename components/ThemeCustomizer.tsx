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
                data-oid="gxo0em4"
            >
                🎨
            </button>

            {/* Theme Customizer Panel */}
            {showCustomizer && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    data-oid="iqs4230"
                >
                    <div
                        className="glass-effect rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
                        style={{ background: 'var(--bg-secondary)' }}
                        data-oid=":5ljxw2"
                    >
                        <div className="flex items-center justify-between mb-6" data-oid="wdvb65p">
                            <h3
                                className="text-xl font-bold"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="0t.zirm"
                            >
                                🎨 Theme Customizer
                            </h3>
                            <button
                                onClick={() => setShowCustomizer(false)}
                                className="text-2xl hover:text-red-400 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="bq1uh_b"
                            >
                                ×
                            </button>
                        </div>

                        {/* Preset Themes */}
                        <div className="mb-6" data-oid="70e:kq0">
                            <h4
                                className="font-medium mb-3"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="llc_rme"
                            >
                                Preset Themes
                            </h4>
                            <div className="space-y-2" data-oid="gsb8d20">
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
                                        data-oid="m0z.535"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="wus9zsh"
                                        >
                                            <div className="flex space-x-1" data-oid="gjsj5d9">
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{
                                                        backgroundColor: theme.colors.primary,
                                                    }}
                                                    data-oid="q_mrn30"
                                                ></div>
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{
                                                        backgroundColor: theme.colors.secondary,
                                                    }}
                                                    data-oid="r38hyow"
                                                ></div>
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{ backgroundColor: theme.colors.accent }}
                                                    data-oid="gyg7.sq"
                                                ></div>
                                            </div>
                                            <span
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="pku5y2f"
                                            >
                                                {theme.name}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Custom Colors */}
                        <div data-oid="p0aqz1w">
                            <h4
                                className="font-medium mb-3"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="f_e:hoi"
                            >
                                Custom Colors
                            </h4>
                            <div className="space-y-3" data-oid="6hx-o5e">
                                <div data-oid="dhq-zqo">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="jown-e3"
                                    >
                                        Primary Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="olqzwrp">
                                        <input
                                            type="color"
                                            value={customColors.primary}
                                            onChange={(e) =>
                                                updateCustomColor('primary', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="9ojrn6i"
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
                                            data-oid="67ga43g"
                                        />
                                    </div>
                                </div>

                                <div data-oid="gkonqlt">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="c4ak8:q"
                                    >
                                        Secondary Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="4qqlcvj">
                                        <input
                                            type="color"
                                            value={customColors.secondary}
                                            onChange={(e) =>
                                                updateCustomColor('secondary', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="zl1lt2v"
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
                                            data-oid="xbrzgpv"
                                        />
                                    </div>
                                </div>

                                <div data-oid="2g31rf5">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="75sk9r_"
                                    >
                                        Accent Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="yxj0doq">
                                        <input
                                            type="color"
                                            value={customColors.accent}
                                            onChange={(e) =>
                                                updateCustomColor('accent', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="itj:922"
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
                                            data-oid="vtgs3mh"
                                        />
                                    </div>
                                </div>

                                <div data-oid="73jn8vr">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="wvvnag5"
                                    >
                                        Background Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="ei2pyrx">
                                        <input
                                            type="color"
                                            value={customColors.background}
                                            onChange={(e) =>
                                                updateCustomColor('background', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="s3b31ic"
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
                                            data-oid="f:x80wi"
                                        />
                                    </div>
                                </div>

                                <div data-oid="bnk1elu">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="-fk.rat"
                                    >
                                        Text Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="p5bwb:w">
                                        <input
                                            type="color"
                                            value={customColors.text}
                                            onChange={(e) =>
                                                updateCustomColor('text', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="ljv1.h7"
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
                                            data-oid="5::1-1i"
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
                            data-oid="iy8vj:l"
                        >
                            Reset to Default
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
