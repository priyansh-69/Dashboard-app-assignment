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
        <div className="space-y-8" data-oid="jrsw0--">
            {/* Productivity Trend */}
            <div className="glass-effect rounded-2xl p-6" data-oid="vvq:opn">
                <h3
                    className="text-xl font-bold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="lzi_.cq"
                >
                    📈 Weekly Productivity Trend
                </h3>
                <ResponsiveContainer width="100%" height={300} data-oid="oqbrqv7">
                    <LineChart data={productivityData} data-oid="5y16fgi">
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="var(--border-primary)"
                            data-oid="xn1:mrh"
                        />

                        <XAxis dataKey="name" stroke="var(--text-secondary)" data-oid="h_n84xf" />
                        <YAxis stroke="var(--text-secondary)" data-oid="lrd7qhs" />
                        <Tooltip
                            contentStyle={{
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--border-primary)',
                                borderRadius: '8px',
                                color: 'var(--text-primary)',
                            }}
                            data-oid="rz21ri9"
                        />

                        <Line
                            type="monotone"
                            dataKey="productivity"
                            stroke="var(--accent-red)"
                            strokeWidth={3}
                            dot={{ fill: 'var(--accent-red)', strokeWidth: 2, r: 6 }}
                            data-oid="gr.tjbu"
                        />

                        <Line
                            type="monotone"
                            dataKey="tasks"
                            stroke="var(--accent-yellow)"
                            strokeWidth={2}
                            dot={{ fill: 'var(--accent-yellow)', strokeWidth: 2, r: 4 }}
                            data-oid="vpc7h6c"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="uferz_8">
                {/* Task Distribution */}
                <div className="glass-effect rounded-2xl p-6" data-oid="-mz1xms">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="pz_zir0"
                    >
                        🎯 Task Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={250} data-oid="nxsy6rf">
                        <PieChart data-oid="byuhut_">
                            <Pie
                                data={taskDistribution}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                                data-oid="ywmr6cu"
                            >
                                {taskDistribution.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        data-oid="u2em-eg"
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
                                data-oid="x:l23pn"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center space-x-4 mt-4" data-oid="my_dksp">
                        {taskDistribution.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2"
                                data-oid="nsdco88"
                            >
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                    data-oid="ow4th0r"
                                ></div>
                                <span
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="mjebtlq"
                                >
                                    {item.name}: {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Chart */}
                <div className="glass-effect rounded-2xl p-6" data-oid="mavl._r">
                    <h3
                        className="text-xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="5ll:3c."
                    >
                        🛠️ Technical Skills
                    </h3>
                    <ResponsiveContainer width="100%" height={250} data-oid="kxl:yt6">
                        <BarChart data={skillsData} layout="horizontal" data-oid="n3h31k6">
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="var(--border-primary)"
                                data-oid="p_p4lol"
                            />

                            <XAxis
                                type="number"
                                domain={[0, 100]}
                                stroke="var(--text-secondary)"
                                data-oid="jixzgf-"
                            />

                            <YAxis
                                dataKey="skill"
                                type="category"
                                stroke="var(--text-secondary)"
                                data-oid="wvow-jz"
                            />

                            <Tooltip
                                contentStyle={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-primary)',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                }}
                                data-oid="qqth58i"
                            />

                            <Bar
                                dataKey="level"
                                fill="var(--accent-yellow)"
                                radius={[0, 4, 4, 0]}
                                data-oid="3hdjlgu"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
