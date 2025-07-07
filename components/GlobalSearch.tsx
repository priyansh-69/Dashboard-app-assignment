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
            title: 'Customer Analytics Platform',
            description: 'Main project for developing analytics dashboard',
            type: 'project',
            category: 'Projects',
            metadata: { status: 'In Progress', progress: 65 },
        },
        {
            id: '2',
            title: 'Implement user authentication',
            description: 'Add login and registration functionality with JWT tokens',
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
            metadata: { time: '4 hours ago', project: 'Customer Analytics Platform' },
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
                data-oid="8:h3x7a"
            >
                <span data-oid="1scneom">🔍</span>
                <span data-oid="z9dbo.7">Search...</span>
                <span
                    className="text-xs px-2 py-1 rounded-md"
                    style={{ background: 'var(--bg-secondary)' }}
                    data-oid="qqcju9j"
                >
                    ⌘K
                </span>
            </button>

            {/* Search Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50 p-4"
                    data-oid="lq_fepf"
                >
                    <div
                        className="glass-effect rounded-2xl w-full max-w-2xl"
                        style={{ background: 'var(--bg-secondary)' }}
                        data-oid="dxzzcuh"
                    >
                        {/* Search Input */}
                        <div
                            className="p-4 border-b"
                            style={{ borderColor: 'var(--border-primary)' }}
                            data-oid="7pc_ag_"
                        >
                            <div className="flex items-center space-x-3" data-oid="dqkqfyk">
                                <span className="text-xl" data-oid="ul1g9gb">
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
                                    data-oid="9yhmz:2"
                                />

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg hover:text-red-400 transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="r3vspcu"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-96 overflow-y-auto" data-oid="s_lwi14">
                            {query.trim() === '' ? (
                                <div
                                    className="p-8 text-center"
                                    style={{ color: 'var(--text-muted)' }}
                                    data-oid="teo:8zg"
                                >
                                    <div className="text-4xl mb-4" data-oid=".m9udr_">
                                        🔍
                                    </div>
                                    <div className="text-lg mb-2" data-oid="tya9se-">
                                        Start typing to search
                                    </div>
                                    <div className="text-sm" data-oid="_7g3lb5">
                                        Search across projects, tasks, announcements, and team
                                        members
                                    </div>
                                </div>
                            ) : results.length === 0 ? (
                                <div
                                    className="p-8 text-center"
                                    style={{ color: 'var(--text-muted)' }}
                                    data-oid="-ybbozo"
                                >
                                    <div className="text-4xl mb-4" data-oid="wygch0p">
                                        😔
                                    </div>
                                    <div className="text-lg mb-2" data-oid="nvgsi2h">
                                        No results found
                                    </div>
                                    <div className="text-sm" data-oid="2j-v59:">
                                        Try searching with different keywords
                                    </div>
                                </div>
                            ) : (
                                <div className="p-2" data-oid="aprjgzq">
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
                                            data-oid="rxb2dyu"
                                        >
                                            <div
                                                className="flex items-start space-x-3"
                                                data-oid="w3mje9k"
                                            >
                                                <div
                                                    className="flex items-center space-x-2"
                                                    data-oid="1ex.66d"
                                                >
                                                    <span className="text-xl" data-oid="597_38.">
                                                        {getResultIcon(result.type)}
                                                    </span>
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs text-white ${getTypeColor(result.type)}`}
                                                        data-oid="719dd_a"
                                                    >
                                                        {result.category}
                                                    </span>
                                                </div>
                                                <div className="flex-1" data-oid="w7e5ys_">
                                                    <h4
                                                        className="font-medium mb-1"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="q9njvrw"
                                                    >
                                                        {result.title}
                                                    </h4>
                                                    <p
                                                        className="text-sm mb-2"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="ro:_9j_"
                                                    >
                                                        {result.description}
                                                    </p>
                                                    {result.metadata && (
                                                        <div
                                                            className="flex items-center space-x-4 text-xs"
                                                            style={{ color: 'var(--text-muted)' }}
                                                            data-oid="ojbismb"
                                                        >
                                                            {result.metadata.status && (
                                                                <span data-oid="9nz9oih">
                                                                    Status: {result.metadata.status}
                                                                </span>
                                                            )}
                                                            {result.metadata.priority && (
                                                                <span data-oid="ytsnhti">
                                                                    Priority:{' '}
                                                                    {result.metadata.priority}
                                                                </span>
                                                            )}
                                                            {result.metadata.progress && (
                                                                <span data-oid="liem380">
                                                                    Progress:{' '}
                                                                    {result.metadata.progress}%
                                                                </span>
                                                            )}
                                                            {result.metadata.time && (
                                                                <span data-oid="u5fxn3c">
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
                                data-oid="ure5o.v"
                            >
                                <div
                                    className="text-xs"
                                    style={{ color: 'var(--text-muted)' }}
                                    data-oid="03uengk"
                                >
                                    <div className="flex items-center space-x-4" data-oid="lunu_79">
                                        <span data-oid="pffl.a3">↑↓ Navigate</span>
                                        <span data-oid="3f3nke1">↵ Select</span>
                                        <span data-oid="gb3fsqw">ESC Close</span>
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
