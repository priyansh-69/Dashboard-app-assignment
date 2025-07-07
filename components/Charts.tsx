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
        <div className="space-y-8" data-oid="1zs3f68">
            {/* Productivity Trend */}
            <div className="glass-effect rounded-2xl p-6" data-oid="ya4d:qm">
                <h3
                    className="text-xl font-bold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="7lv85dp"
                >
                    📈 Weekly Productivity Trend
                </h3>
                <ResponsiveContainer width="100%" height={300} data-oid="y8z-xp2">
                    <LineChart data={productivityData} data-oid="9mvk9_7">
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="var(--border-primary)"
                            data-oid="jn_-n9u"
                        />

                        <XAxis dataKey="name" stroke="var(--text-secondary)" data-oid="x6m1ai6" />
                        <YAxis stroke="var(--text-secondary)" data-oid="90xak0r" />
                        <Tooltip
                            contentStyle={{
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--border-primary)',
                                borderRadius: '8px',
                                color: 'var(--text-primary)',
                            }}
                            data-oid="ff5mnss"
                        />

                        <Line
                            type="monotone"
                            dataKey="productivity"
                            stroke="var(--accent-red)"
                            strokeWidth={3}
                            dot={{ fill: 'var(--accent-red)', strokeWidth: 2, r: 6 }}
                            data-oid="szxpqgm"
                        />

                        <Line
                            type="monotone"
                            dataKey="tasks"
                            stroke="var(--accent-yellow)"
                            strokeWidth={2}
                            dot={{ fill: 'var(--accent-yellow)', strokeWidth: 2, r: 4 }}
                            data-oid="wzrj56o"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="zpcv_jj">
                {/* Task Distribution */}
                <div className="glass-effect rounded-2xl p-6" data-oid="jypthp0">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="vi1a76-"
                    >
                        🎯 Task Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={250} data-oid="54rm.p5">
                        <PieChart data-oid="4toxl2n">
                            <Pie
                                data={taskDistribution}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                                data-oid="c44k411"
                            >
                                {taskDistribution.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        data-oid="3fsaedz"
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
                                data-oid="swlwgm_"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center space-x-4 mt-4" data-oid="7szazpp">
                        {taskDistribution.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2"
                                data-oid=".-2s8zr"
                            >
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                    data-oid="wv_b75i"
                                ></div>
                                <span
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="ftl:svc"
                                >
                                    {item.name}: {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Chart */}
                <div className="glass-effect rounded-2xl p-6" data-oid="x9dx97k">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="mo1fx1_"
                    >
                        🛠️ Technical Skills
                    </h3>
                    <ResponsiveContainer width="100%" height={250} data-oid=":qdnqy_">
                        <BarChart data={skillsData} layout="horizontal" data-oid="x-9lf3k">
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="var(--border-primary)"
                                data-oid="ud25rq4"
                            />

                            <XAxis
                                type="number"
                                domain={[0, 100]}
                                stroke="var(--text-secondary)"
                                data-oid="sgwkpg7"
                            />

                            <YAxis
                                dataKey="skill"
                                type="category"
                                stroke="var(--text-secondary)"
                                data-oid="m20a-z_"
                            />

                            <Tooltip
                                contentStyle={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-primary)',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                }}
                                data-oid=".ec92ki"
                            />

                            <Bar
                                dataKey="level"
                                fill="var(--accent-yellow)"
                                radius={[0, 4, 4, 0]}
                                data-oid="umkaeii"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
