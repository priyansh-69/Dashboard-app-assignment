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
        <div className="space-y-8" data-oid="jii4mqa">
            {/* Productivity Trend */}
            <div className="glass-effect rounded-2xl p-6" data-oid="_g6jnvf">
                <h3
                    className="text-xl font-bold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="6e.cl_m"
                >
                    📈 Weekly Productivity Trend
                </h3>
                <ResponsiveContainer width="100%" height={300} data-oid="8vuvgyb">
                    <LineChart data={productivityData} data-oid="ongazd_">
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="var(--border-primary)"
                            data-oid="2u6p16v"
                        />
                        <XAxis dataKey="name" stroke="var(--text-secondary)" data-oid="l1fwdll" />
                        <YAxis stroke="var(--text-secondary)" data-oid="7pgmiwb" />
                        <Tooltip
                            contentStyle={{
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--border-primary)',
                                borderRadius: '8px',
                                color: 'var(--text-primary)',
                            }}
                            data-oid="1z:jkrw"
                        />

                        <Line
                            type="monotone"
                            dataKey="productivity"
                            stroke="var(--accent-red)"
                            strokeWidth={3}
                            dot={{ fill: 'var(--accent-red)', strokeWidth: 2, r: 6 }}
                            data-oid="c1xz-rg"
                        />

                        <Line
                            type="monotone"
                            dataKey="tasks"
                            stroke="var(--accent-yellow)"
                            strokeWidth={2}
                            dot={{ fill: 'var(--accent-yellow)', strokeWidth: 2, r: 4 }}
                            data-oid="h860s5s"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="grz-4qp">
                {/* Task Distribution */}
                <div className="glass-effect rounded-2xl p-6" data-oid="pgu0wk4">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="fggsrcx"
                    >
                        🎯 Task Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={250} data-oid="_8p02n6">
                        <PieChart data-oid="54h17v_">
                            <Pie
                                data={taskDistribution}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                                data-oid="pq04wk7"
                            >
                                {taskDistribution.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        data-oid="ni_2-vx"
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
                                data-oid="mkz:noa"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center space-x-4 mt-4" data-oid="ripdew2">
                        {taskDistribution.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2"
                                data-oid="jjbfb-x"
                            >
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                    data-oid="5ph1ney"
                                ></div>
                                <span
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="znruq_t"
                                >
                                    {item.name}: {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Chart */}
                <div className="glass-effect rounded-2xl p-6" data-oid="e_u5qac">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="_y-:hq-"
                    >
                        🛠️ Technical Skills
                    </h3>
                    <ResponsiveContainer width="100%" height={250} data-oid="if-sony">
                        <BarChart data={skillsData} layout="horizontal" data-oid="or84_o_">
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="var(--border-primary)"
                                data-oid="ufh-9gc"
                            />
                            <XAxis
                                type="number"
                                domain={[0, 100]}
                                stroke="var(--text-secondary)"
                                data-oid="x73kr4d"
                            />
                            <YAxis
                                dataKey="skill"
                                type="category"
                                stroke="var(--text-secondary)"
                                data-oid="::6-b46"
                            />
                            <Tooltip
                                contentStyle={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-primary)',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                }}
                                data-oid="3jx-tsf"
                            />

                            <Bar
                                dataKey="level"
                                fill="var(--accent-yellow)"
                                radius={[0, 4, 4, 0]}
                                data-oid=":f-0u8c"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
