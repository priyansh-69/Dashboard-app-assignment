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
        <div className="space-y-8" data-oid="s_pyatt">
            {/* Productivity Trend */}
            <div className="glass-effect rounded-2xl p-6" data-oid="3-duee_">
                <h3
                    className="text-xl font-bold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="ne2goen"
                >
                    📈 Weekly Productivity Trend
                </h3>
                <ResponsiveContainer width="100%" height={300} data-oid="vnl8qyc">
                    <LineChart data={productivityData} data-oid="mcf8zyj">
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="var(--border-primary)"
                            data-oid="b_d1boq"
                        />

                        <XAxis dataKey="name" stroke="var(--text-secondary)" data-oid="k1ssv.i" />
                        <YAxis stroke="var(--text-secondary)" data-oid="a7ph.x4" />
                        <Tooltip
                            contentStyle={{
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--border-primary)',
                                borderRadius: '8px',
                                color: 'var(--text-primary)',
                            }}
                            data-oid="_:4pic0"
                        />

                        <Line
                            type="monotone"
                            dataKey="productivity"
                            stroke="var(--accent-red)"
                            strokeWidth={3}
                            dot={{ fill: 'var(--accent-red)', strokeWidth: 2, r: 6 }}
                            data-oid="38lf8ju"
                        />

                        <Line
                            type="monotone"
                            dataKey="tasks"
                            stroke="var(--accent-yellow)"
                            strokeWidth={2}
                            dot={{ fill: 'var(--accent-yellow)', strokeWidth: 2, r: 4 }}
                            data-oid="-uulbk0"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid=".75ayi4">
                {/* Task Distribution */}
                <div className="glass-effect rounded-2xl p-6" data-oid="yeo5bjd">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="j3xl-:7"
                    >
                        🎯 Task Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={250} data-oid="-y:mmjo">
                        <PieChart data-oid="c5b0j5m">
                            <Pie
                                data={taskDistribution}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                                data-oid="mwlqmey"
                            >
                                {taskDistribution.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        data-oid="ltbf5i7"
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
                                data-oid="-uagh9b"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center space-x-4 mt-4" data-oid="9hpn-5:">
                        {taskDistribution.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2"
                                data-oid="cq9c:8-"
                            >
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                    data-oid="3vveoby"
                                ></div>
                                <span
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="dy672t4"
                                >
                                    {item.name}: {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Chart */}
                <div className="glass-effect rounded-2xl p-6" data-oid="torlihu">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="qi13ejm"
                    >
                        🛠️ Technical Skills
                    </h3>
                    <ResponsiveContainer width="100%" height={250} data-oid="4oe9w03">
                        <BarChart data={skillsData} layout="horizontal" data-oid="z9r9g.o">
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="var(--border-primary)"
                                data-oid="12d7ops"
                            />

                            <XAxis
                                type="number"
                                domain={[0, 100]}
                                stroke="var(--text-secondary)"
                                data-oid="mdsqi2b"
                            />

                            <YAxis
                                dataKey="skill"
                                type="category"
                                stroke="var(--text-secondary)"
                                data-oid="k33gy1f"
                            />

                            <Tooltip
                                contentStyle={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-primary)',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                }}
                                data-oid=":kej3ks"
                            />

                            <Bar
                                dataKey="level"
                                fill="var(--accent-yellow)"
                                radius={[0, 4, 4, 0]}
                                data-oid="n-i2hst"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
