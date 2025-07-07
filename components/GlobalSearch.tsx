'use client';

import { useState, useEffect } from 'react';

interface SearchResult {
    id: string;
    title: string;
    description: string;
    type: 'task' | 'project' | 'announcement' | 'team' | 'activity';
    category: string;
    url?: string;
    metadata?: any;
}

interface GlobalSearchProps {
    data: {
        tasks?: any[];
        projects?: any[];
        announcements?: any[];
        teamMembers?: any[];
        activities?: any[];
    };
}

// Sample data for demonstration - moved outside component to prevent recreation
const searchData: SearchResult[] = [
    {
        id: '1',
        title: 'Priyansh-Dashboard-App',
        description: 'Main project for developing intern dashboard application',
        type: 'project',
        category: 'Projects',
        metadata: { status: 'In Progress', progress: 85 },
    },
    {
        id: '2',
        title: 'Implement time tracking feature',
        description: 'Build real-time time tracking with start/stop functionality',
        type: 'task',
        category: 'Tasks',
        metadata: { priority: 'high', status: 'in-progress' },
    },
    {
        id: '3',
        title: 'Daily Stand-up Meeting',
        description: 'Stand-up meeting at 10:00 AM in Conference Room B',
        type: 'announcement',
        category: 'Announcements',
        metadata: { priority: 'high', time: 'Today, 9:30 AM' },
    },
    {
        id: '4',
        title: 'Sarah Chen',
        description: 'Senior Developer - Engineering Department',
        type: 'team',
        category: 'Team Members',
        metadata: { role: 'Senior Developer', status: 'active' },
    },
    {
        id: '5',
        title: 'Code review completed',
        description: 'Reviewed pull request for dashboard components',
        type: 'activity',
        category: 'Recent Activities',
        metadata: { time: '4 hours ago', project: 'Priyansh-Dashboard-App' },
    },
];

export function GlobalSearch({ data }: GlobalSearchProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
                setQuery('');
                setResults([]);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filteredResults = searchData.filter(
            (item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase()),
        );

        setResults(filteredResults);
        setSelectedIndex(0);
    }, [query]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (results[selectedIndex]) {
                handleResultClick(results[selectedIndex]);
            }
        }
    };

    const handleResultClick = (result: SearchResult) => {
        // Handle navigation or action based on result type
        console.log('Selected:', result);
        setIsOpen(false);
        setQuery('');
        setResults([]);
    };

    const getResultIcon = (type: string) => {
        switch (type) {
            case 'project':
                return '🚀';
            case 'task':
                return '📋';
            case 'announcement':
                return '📢';
            case 'team':
                return '👤';
            case 'activity':
                return '⚡';
            default:
                return '📄';
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'project':
                return 'bg-blue-500';
            case 'task':
                return 'bg-green-500';
            case 'announcement':
                return 'bg-yellow-500';
            case 'team':
                return 'bg-purple-500';
            case 'activity':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <>
            {/* Search Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all hover:scale-105"
                style={{
                    background: 'var(--bg-tertiary)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-primary)',
                }}
                data-oid="ngk3-lo"
            >
                <span data-oid="6k7h-7v">🔍</span>
                <span data-oid="n8n:s1g">Search...</span>
                <span
                    className="text-xs px-2 py-1 rounded-md"
                    style={{ background: 'var(--bg-secondary)' }}
                    data-oid="f_-675q"
                >
                    ⌘K
                </span>
            </button>

            {/* Search Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50 p-4"
                    data-oid="_x9.5v5"
                >
                    <div
                        className="glass-effect rounded-2xl w-full max-w-2xl"
                        style={{ background: 'var(--bg-secondary)' }}
                        data-oid="gvixpw3"
                    >
                        {/* Search Input */}
                        <div
                            className="p-4 border-b"
                            style={{ borderColor: 'var(--border-primary)' }}
                            data-oid="kuf0bmv"
                        >
                            <div className="flex items-center space-x-3" data-oid="aee7fsp">
                                <span className="text-xl" data-oid="e0zvwe1">
                                    🔍
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search projects, tasks, announcements, team members..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent border-0 outline-none text-lg"
                                    style={{ color: 'var(--text-primary)' }}
                                    autoFocus
                                    data-oid="j7wt.zq"
                                />

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg hover:text-red-400 transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="3f3p9.w"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-96 overflow-y-auto" data-oid="2x0o201">
                            {query.trim() === '' ? (
                                <div
                                    className="p-8 text-center"
                                    style={{ color: 'var(--text-muted)' }}
                                    data-oid="b87mrbe"
                                >
                                    <div className="text-4xl mb-4" data-oid="qx4am3.">
                                        🔍
                                    </div>
                                    <div className="text-lg mb-2" data-oid=".8znzmn">
                                        Start typing to search
                                    </div>
                                    <div className="text-sm" data-oid="t_yiooy">
                                        Search across projects, tasks, announcements, and team
                                        members
                                    </div>
                                </div>
                            ) : results.length === 0 ? (
                                <div
                                    className="p-8 text-center"
                                    style={{ color: 'var(--text-muted)' }}
                                    data-oid="e6pft9d"
                                >
                                    <div className="text-4xl mb-4" data-oid="x2ajl4s">
                                        😔
                                    </div>
                                    <div className="text-lg mb-2" data-oid="fs18.1i">
                                        No results found
                                    </div>
                                    <div className="text-sm" data-oid="_ip5y8_">
                                        Try searching with different keywords
                                    </div>
                                </div>
                            ) : (
                                <div className="p-2" data-oid="fv0x62g">
                                    {results.map((result, index) => (
                                        <div
                                            key={result.id}
                                            onClick={() => handleResultClick(result)}
                                            className={`p-4 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                                                index === selectedIndex ? 'ring-2 ring-red-500' : ''
                                            }`}
                                            style={{
                                                background:
                                                    index === selectedIndex
                                                        ? 'var(--bg-tertiary)'
                                                        : 'transparent',
                                            }}
                                            data-oid="cut7cbb"
                                        >
                                            <div
                                                className="flex items-start space-x-3"
                                                data-oid="pvymtpn"
                                            >
                                                <div
                                                    className="flex items-center space-x-2"
                                                    data-oid="0g:rai_"
                                                >
                                                    <span className="text-xl" data-oid="1xla6iu">
                                                        {getResultIcon(result.type)}
                                                    </span>
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs text-white ${getTypeColor(result.type)}`}
                                                        data-oid="8y:cgyz"
                                                    >
                                                        {result.category}
                                                    </span>
                                                </div>
                                                <div className="flex-1" data-oid="imohfi-">
                                                    <h4
                                                        className="font-medium mb-1"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid=".c7fzxw"
                                                    >
                                                        {result.title}
                                                    </h4>
                                                    <p
                                                        className="text-sm mb-2"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="p-5u.xp"
                                                    >
                                                        {result.description}
                                                    </p>
                                                    {result.metadata && (
                                                        <div
                                                            className="flex items-center space-x-4 text-xs"
                                                            style={{ color: 'var(--text-muted)' }}
                                                            data-oid="w:h:e80"
                                                        >
                                                            {result.metadata.status && (
                                                                <span data-oid=":6:t3qa">
                                                                    Status: {result.metadata.status}
                                                                </span>
                                                            )}
                                                            {result.metadata.priority && (
                                                                <span data-oid="dy5urk5">
                                                                    Priority:{' '}
                                                                    {result.metadata.priority}
                                                                </span>
                                                            )}
                                                            {result.metadata.progress && (
                                                                <span data-oid="y.a2n:8">
                                                                    Progress:{' '}
                                                                    {result.metadata.progress}%
                                                                </span>
                                                            )}
                                                            {result.metadata.time && (
                                                                <span data-oid="iwnnuun">
                                                                    {result.metadata.time}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Search Tips */}
                        {query.trim() === '' && (
                            <div
                                className="p-4 border-t"
                                style={{ borderColor: 'var(--border-primary)' }}
                                data-oid="i-t4h9h"
                            >
                                <div
                                    className="text-xs"
                                    style={{ color: 'var(--text-muted)' }}
                                    data-oid="qt7l_e5"
                                >
                                    <div className="flex items-center space-x-4" data-oid="jyfx7_i">
                                        <span data-oid="oh-6j1i">↑↓ Navigate</span>
                                        <span data-oid="i.c:91b">↵ Select</span>
                                        <span data-oid="u8:oi32">ESC Close</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
