'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
} from 'recharts';

interface ChartsProps {
    performanceStats: any;
}

export function Charts({ performanceStats }: ChartsProps) {
    const productivityData = [
        { name: 'Mon', productivity: 85, tasks: 12 },
        { name: 'Tue', productivity: 92, tasks: 15 },
        { name: 'Wed', productivity: 78, tasks: 10 },
        { name: 'Thu', productivity: 88, tasks: 14 },
        { name: 'Fri', productivity: 95, tasks: 18 },
        { name: 'Sat', productivity: 70, tasks: 8 },
        { name: 'Sun', productivity: 60, tasks: 5 },
    ];

    const taskDistribution = [
        { name: 'Completed', value: performanceStats.tasksCompleted, color: '#10b981' },
        { name: 'In Progress', value: performanceStats.tasksInProgress, color: '#f59e0b' },
        { name: 'Pending', value: performanceStats.tasksPending, color: '#ef4444' },
    ];

    const skillsData = [
        { skill: 'React', level: 90 },
        { skill: 'Node.js', level: 85 },
        { skill: 'TypeScript', level: 80 },
        { skill: 'Python', level: 75 },
        { skill: 'AWS', level: 70 },
    ];

    return (
        <div className="space-y-8" data-oid=".3do9q3">
            {/* Productivity Trend */}
            <div className="glass-effect rounded-2xl p-6" data-oid=".48m3-v">
                <h3
                    className="text-xl font-bold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="gvq:aut"
                >
                    📈 Weekly Productivity Trend
                </h3>
                <ResponsiveContainer width="100%" height={300} data-oid="z460xd:">
                    <LineChart data={productivityData} data-oid="4a.ihlg">
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="var(--border-primary)"
                            data-oid="-d1wzag"
                        />

                        <XAxis dataKey="name" stroke="var(--text-secondary)" data-oid="l62yj65" />
                        <YAxis stroke="var(--text-secondary)" data-oid="m-cdhr6" />
                        <Tooltip
                            contentStyle={{
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--border-primary)',
                                borderRadius: '8px',
                                color: 'var(--text-primary)',
                            }}
                            data-oid="miw1gh-"
                        />

                        <Line
                            type="monotone"
                            dataKey="productivity"
                            stroke="var(--accent-red)"
                            strokeWidth={3}
                            dot={{ fill: 'var(--accent-red)', strokeWidth: 2, r: 6 }}
                            data-oid="4f-56:p"
                        />

                        <Line
                            type="monotone"
                            dataKey="tasks"
                            stroke="var(--accent-yellow)"
                            strokeWidth={2}
                            dot={{ fill: 'var(--accent-yellow)', strokeWidth: 2, r: 4 }}
                            data-oid="d9vjymw"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="t91tt98">
                {/* Task Distribution */}
                <div className="glass-effect rounded-2xl p-6" data-oid="b45100.">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="5mjkby6"
                    >
                        🎯 Task Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={250} data-oid="bm2optm">
                        <PieChart data-oid="gc8smlr">
                            <Pie
                                data={taskDistribution}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                                data-oid="6hzcb.l"
                            >
                                {taskDistribution.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        data-oid="1k_itqa"
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-primary)',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                }}
                                data-oid="6jp9ptw"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center space-x-4 mt-4" data-oid="0z7awpl">
                        {taskDistribution.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2"
                                data-oid="a:cq6wz"
                            >
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                    data-oid="d5tswig"
                                ></div>
                                <span
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="hxbqbz_"
                                >
                                    {item.name}: {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Chart */}
                <div className="glass-effect rounded-2xl p-6" data-oid="vbt3sd1">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="dhm2g7."
                    >
                        🛠️ Technical Skills
                    </h3>
                    <ResponsiveContainer width="100%" height={250} data-oid=":li1-9b">
                        <BarChart data={skillsData} layout="horizontal" data-oid="7n-.rpw">
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="var(--border-primary)"
                                data-oid="_c_s6qg"
                            />

                            <XAxis
                                type="number"
                                domain={[0, 100]}
                                stroke="var(--text-secondary)"
                                data-oid="ly4ibw3"
                            />

                            <YAxis
                                dataKey="skill"
                                type="category"
                                stroke="var(--text-secondary)"
                                data-oid="cg63.vr"
                            />

                            <Tooltip
                                contentStyle={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-primary)',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                }}
                                data-oid="np2u4rz"
                            />

                            <Bar
                                dataKey="level"
                                fill="var(--accent-yellow)"
                                radius={[0, 4, 4, 0]}
                                data-oid="havj3:c"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
