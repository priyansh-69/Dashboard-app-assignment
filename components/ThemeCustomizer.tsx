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
                data-oid="jyg30bp"
            >
                🎨
            </button>

            {/* Theme Customizer Panel */}
            {showCustomizer && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    data-oid="0huuajt"
                >
                    <div
                        className="glass-effect rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
                        style={{ background: 'var(--bg-secondary)' }}
                        data-oid="07.808_"
                    >
                        <div className="flex items-center justify-between mb-6" data-oid="ssbjgpq">
                            <h3
                                className="text-xl font-bold"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="yxy1y0x"
                            >
                                🎨 Theme Customizer
                            </h3>
                            <button
                                onClick={() => setShowCustomizer(false)}
                                className="text-2xl hover:text-red-400 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="am5mab7"
                            >
                                ×
                            </button>
                        </div>

                        {/* Preset Themes */}
                        <div className="mb-6" data-oid="6b00e2z">
                            <h4
                                className="font-medium mb-3"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="ke0.eux"
                            >
                                Preset Themes
                            </h4>
                            <div className="space-y-2" data-oid="x72icav">
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
                                        data-oid="jzxzb9b"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="iit84g9"
                                        >
                                            <div className="flex space-x-1" data-oid="_g8dbxh">
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{
                                                        backgroundColor: theme.colors.primary,
                                                    }}
                                                    data-oid="vp0vs8h"
                                                ></div>
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{
                                                        backgroundColor: theme.colors.secondary,
                                                    }}
                                                    data-oid="3hfywez"
                                                ></div>
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{ backgroundColor: theme.colors.accent }}
                                                    data-oid="pzgdtq2"
                                                ></div>
                                            </div>
                                            <span
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="www.wvz"
                                            >
                                                {theme.name}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Custom Colors */}
                        <div data-oid=".xx2bst">
                            <h4
                                className="font-medium mb-3"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="f1ss8m."
                            >
                                Custom Colors
                            </h4>
                            <div className="space-y-3" data-oid="l5leu_a">
                                <div data-oid="zz17g::">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="i5c79np"
                                    >
                                        Primary Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="mqt7jxn">
                                        <input
                                            type="color"
                                            value={customColors.primary}
                                            onChange={(e) =>
                                                updateCustomColor('primary', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="f8kf21k"
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
                                            data-oid="op0ei2c"
                                        />
                                    </div>
                                </div>

                                <div data-oid="-6.1y.c">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="hz6dln5"
                                    >
                                        Secondary Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="qvct3_.">
                                        <input
                                            type="color"
                                            value={customColors.secondary}
                                            onChange={(e) =>
                                                updateCustomColor('secondary', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="6_rgo7k"
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
                                            data-oid="q0vy.th"
                                        />
                                    </div>
                                </div>

                                <div data-oid="k0xss0s">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="2dsbf18"
                                    >
                                        Accent Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="sr34moe">
                                        <input
                                            type="color"
                                            value={customColors.accent}
                                            onChange={(e) =>
                                                updateCustomColor('accent', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="11kldp9"
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
                                            data-oid="m9ai81f"
                                        />
                                    </div>
                                </div>

                                <div data-oid="5s-zr3b">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="z.rxr_r"
                                    >
                                        Background Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="7hfzt27">
                                        <input
                                            type="color"
                                            value={customColors.background}
                                            onChange={(e) =>
                                                updateCustomColor('background', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="4or84pw"
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
                                            data-oid="ce0av1i"
                                        />
                                    </div>
                                </div>

                                <div data-oid="i0i_p1c">
                                    <label
                                        className="block text-sm mb-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="kwh-701"
                                    >
                                        Text Color
                                    </label>
                                    <div className="flex items-center space-x-2" data-oid="niopl5s">
                                        <input
                                            type="color"
                                            value={customColors.text}
                                            onChange={(e) =>
                                                updateCustomColor('text', e.target.value)
                                            }
                                            className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                                            data-oid="vexfr99"
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
                                            data-oid="ns:1bg5"
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
                            data-oid="k2e:1:d"
                        >
                            Reset to Default
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
