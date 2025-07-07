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

export function GlobalSearch({ data }: GlobalSearchProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Sample data for demonstration
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
                data-oid=".6r1bp9"
            >
                <span data-oid="qfuiniq">🔍</span>
                <span data-oid="ojgan73">Search...</span>
                <span
                    className="text-xs px-2 py-1 rounded-md"
                    style={{ background: 'var(--bg-secondary)' }}
                    data-oid="bx_5yu_"
                >
                    ⌘K
                </span>
            </button>

            {/* Search Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50 p-4"
                    data-oid="-9vmqxz"
                >
                    <div
                        className="glass-effect rounded-2xl w-full max-w-2xl"
                        style={{ background: 'var(--bg-secondary)' }}
                        data-oid="b5dbtpw"
                    >
                        {/* Search Input */}
                        <div
                            className="p-4 border-b"
                            style={{ borderColor: 'var(--border-primary)' }}
                            data-oid="ewv8q39"
                        >
                            <div className="flex items-center space-x-3" data-oid="naryjju">
                                <span className="text-xl" data-oid=".q92nm1">
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
                                    data-oid="icskgzn"
                                />

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg hover:text-red-400 transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="mt8doi-"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-96 overflow-y-auto" data-oid="leff7ju">
                            {query.trim() === '' ? (
                                <div
                                    className="p-8 text-center"
                                    style={{ color: 'var(--text-muted)' }}
                                    data-oid="v56.ruw"
                                >
                                    <div className="text-4xl mb-4" data-oid="k6lefug">
                                        🔍
                                    </div>
                                    <div className="text-lg mb-2" data-oid="fyp-6j6">
                                        Start typing to search
                                    </div>
                                    <div className="text-sm" data-oid="4:4s8qy">
                                        Search across projects, tasks, announcements, and team
                                        members
                                    </div>
                                </div>
                            ) : results.length === 0 ? (
                                <div
                                    className="p-8 text-center"
                                    style={{ color: 'var(--text-muted)' }}
                                    data-oid="wv1.o_-"
                                >
                                    <div className="text-4xl mb-4" data-oid="0njelkt">
                                        😔
                                    </div>
                                    <div className="text-lg mb-2" data-oid="ph9a3sc">
                                        No results found
                                    </div>
                                    <div className="text-sm" data-oid="e2x-at2">
                                        Try searching with different keywords
                                    </div>
                                </div>
                            ) : (
                                <div className="p-2" data-oid="4.5ni2z">
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
                                            data-oid="r2gn.z8"
                                        >
                                            <div
                                                className="flex items-start space-x-3"
                                                data-oid="23jy2lq"
                                            >
                                                <div
                                                    className="flex items-center space-x-2"
                                                    data-oid="60wgi5-"
                                                >
                                                    <span className="text-xl" data-oid="m9ysdca">
                                                        {getResultIcon(result.type)}
                                                    </span>
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs text-white ${getTypeColor(result.type)}`}
                                                        data-oid="0u41hhx"
                                                    >
                                                        {result.category}
                                                    </span>
                                                </div>
                                                <div className="flex-1" data-oid="883j2p:">
                                                    <h4
                                                        className="font-medium mb-1"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="tynekv2"
                                                    >
                                                        {result.title}
                                                    </h4>
                                                    <p
                                                        className="text-sm mb-2"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="6s4rzg0"
                                                    >
                                                        {result.description}
                                                    </p>
                                                    {result.metadata && (
                                                        <div
                                                            className="flex items-center space-x-4 text-xs"
                                                            style={{ color: 'var(--text-muted)' }}
                                                            data-oid="cx_.a.o"
                                                        >
                                                            {result.metadata.status && (
                                                                <span data-oid="ely-k:j">
                                                                    Status: {result.metadata.status}
                                                                </span>
                                                            )}
                                                            {result.metadata.priority && (
                                                                <span data-oid="4zdnw0n">
                                                                    Priority:{' '}
                                                                    {result.metadata.priority}
                                                                </span>
                                                            )}
                                                            {result.metadata.progress && (
                                                                <span data-oid="0_w-f.b">
                                                                    Progress:{' '}
                                                                    {result.metadata.progress}%
                                                                </span>
                                                            )}
                                                            {result.metadata.time && (
                                                                <span data-oid="o818:mf">
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
                                data-oid="t25531c"
                            >
                                <div
                                    className="text-xs"
                                    style={{ color: 'var(--text-muted)' }}
                                    data-oid="-6iwv4i"
                                >
                                    <div className="flex items-center space-x-4" data-oid="-8nuvxa">
                                        <span data-oid="1::s1ea">↑↓ Navigate</span>
                                        <span data-oid="mfnlofo">↵ Select</span>
                                        <span data-oid="ie3ynyx">ESC Close</span>
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
