'use client';

import { useEffect, useState } from 'react';

interface Task {
    id: string;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    status: 'todo' | 'in-progress' | 'completed';
    assignee: string;
    dueDate: string;
    project: string;
    tags: string[];
}

interface TaskManagerProps {
    onTaskUpdate?: (task: Task) => void;
}

export function TaskManager({ onTaskUpdate }: TaskManagerProps) {
    const [mounted, setMounted] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: '1',
            title: 'Implement time tracking feature',
            description:
                'Build real-time time tracking with start/stop functionality and break management',
            priority: 'high',
            status: 'in-progress',
            assignee: 'Priyansh',
            dueDate: '2024-06-22',
            project: 'Priyansh-Dashboard-App',
            tags: ['frontend', 'react'],
        },
        {
            id: '2',
            title: 'Create responsive task board',
            description:
                'Design and implement Kanban-style task management board with drag-and-drop',
            priority: 'medium',
            status: 'todo',
            assignee: 'Priyansh',
            dueDate: '2024-06-25',
            project: 'Priyansh-Dashboard-App',
            tags: ['design', 'ui/ux'],
        },
        {
            id: '3',
            title: 'Add performance analytics',
            description:
                'Implement charts and metrics for productivity tracking and performance insights',
            priority: 'low',
            status: 'completed',
            assignee: 'Priyansh',
            dueDate: '2024-06-20',
            project: 'Priyansh-Dashboard-App',
            tags: ['charts', 'analytics'],
        },
        {
            id: '4',
            title: 'Optimize mobile responsiveness',
            description:
                'Ensure dashboard works seamlessly across all device sizes and screen resolutions',
            priority: 'high',
            status: 'todo',
            assignee: 'Priyansh',
            dueDate: '2024-06-28',
            project: 'Frontend Development',
            tags: ['responsive', 'mobile'],
        },
    ]);

    const [showAddTask, setShowAddTask] = useState(false);
    const [filter, setFilter] = useState<'all' | 'todo' | 'in-progress' | 'completed'>('all');
    const [priorityFilter, setPriorityFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all');

    useEffect(() => {
        setMounted(true);
    }, []);

    const columns = {
        todo: { title: 'To Do', color: 'border-gray-500' },
        'in-progress': { title: 'In Progress', color: 'border-yellow-500' },
        completed: { title: 'Completed', color: 'border-green-500' },
    };

    const filteredTasks = tasks.filter((task) => {
        const statusMatch = filter === 'all' || task.status === filter;
        const priorityMatch = priorityFilter === 'all' || task.priority === priorityFilter;
        return statusMatch && priorityMatch;
    });

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high':
                return 'bg-red-500';
            case 'medium':
                return 'bg-yellow-500';
            case 'low':
                return 'bg-green-500';
            default:
                return 'bg-gray-500';
        }
    };

    const moveTask = (taskId: string, newStatus: Task['status']) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task,
        );
        setTasks(updatedTasks);
    };

    const addNewTask = (taskData: Partial<Task>) => {
        const newTask: Task = {
            id: Date.now().toString(),
            title: taskData.title || '',
            description: taskData.description || '',
            priority: taskData.priority || 'medium',
            status: 'todo',
            assignee: 'Priyansh',
            dueDate: taskData.dueDate || '',
            project: taskData.project || 'General',
            tags: taskData.tags || [],
        };
        setTasks([...tasks, newTask]);
        setShowAddTask(false);
    };

    return (
        <div className="space-y-6" data-oid="i42axtg">
            {/* Header with filters */}
            <div className="flex flex-wrap items-center justify-between gap-4" data-oid="2p.tep.">
                <h3
                    className="text-xl font-bold"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="29mtong"
                >
                    📋 Task Management
                </h3>
                <div className="flex items-center space-x-4" data-oid="3vtxfoo">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value as any)}
                        className="px-3 py-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                        style={{
                            background: 'var(--bg-tertiary)',
                            color: 'var(--text-primary)',
                        }}
                        data-oid="whjmb2i"
                    >
                        <option value="all" data-oid="v5u56ru">
                            All Status
                        </option>
                        <option value="todo" data-oid="hb2wp1:">
                            To Do
                        </option>
                        <option value="in-progress" data-oid="ct2o.w3">
                            In Progress
                        </option>
                        <option value="completed" data-oid="idtyc72">
                            Completed
                        </option>
                    </select>
                    <select
                        value={priorityFilter}
                        onChange={(e) => setPriorityFilter(e.target.value as any)}
                        className="px-3 py-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                        style={{
                            background: 'var(--bg-tertiary)',
                            color: 'var(--text-primary)',
                        }}
                        data-oid="s00zvj2"
                    >
                        <option value="all" data-oid="dmn6:0-">
                            All Priority
                        </option>
                        <option value="high" data-oid="94ike9k">
                            High
                        </option>
                        <option value="medium" data-oid="j787a-.">
                            Medium
                        </option>
                        <option value="low" data-oid=":wf.0z9">
                            Low
                        </option>
                    </select>
                    <button
                        onClick={() => setShowAddTask(true)}
                        className="px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
                        style={{
                            background: 'var(--gradient-primary)',
                            color: 'white',
                        }}
                        data-oid="6igt.sw"
                    >
                        + Add Task
                    </button>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="_skc29x">
                {Object.entries(columns).map(([columnId, column]) => (
                    <div key={columnId} className="space-y-4" data-oid="5u1vlaj">
                        <div
                            className={`p-4 rounded-xl border-l-4 ${column.color}`}
                            style={{ background: 'var(--bg-tertiary)' }}
                            data-oid=".og:iek"
                        >
                            <h4
                                className="font-bold text-lg"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="3nv.bi."
                            >
                                {column.title}
                            </h4>
                            <span
                                className="text-sm"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="oj_nwum"
                            >
                                {filteredTasks.filter((task) => task.status === columnId).length}{' '}
                                tasks
                            </span>
                        </div>

                        <div className="space-y-3 min-h-[200px] p-2 rounded-xl" data-oid="4k99hmr">
                            {filteredTasks
                                .filter((task) => task.status === columnId)
                                .map((task) => (
                                    <div
                                        key={task.id}
                                        className="p-4 rounded-xl transition-all hover:scale-105 cursor-pointer"
                                        style={{
                                            background: 'var(--bg-card)',
                                            border: '1px solid var(--border-primary)',
                                        }}
                                        data-oid="u7gmt:y"
                                    >
                                        <div
                                            className="flex items-start justify-between mb-2"
                                            data-oid="._keog5"
                                        >
                                            <h5
                                                className="font-medium"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="6012es."
                                            >
                                                {task.title}
                                            </h5>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs text-white ${getPriorityColor(task.priority)}`}
                                                data-oid=":fo9cs."
                                            >
                                                {task.priority}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm mb-3"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="8_6q12i"
                                        >
                                            {task.description}
                                        </p>
                                        <div
                                            className="flex flex-wrap gap-1 mb-3"
                                            data-oid="965-:--"
                                        >
                                            {task.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-2 py-1 rounded-md text-xs"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--accent-yellow)',
                                                    }}
                                                    data-oid="y8bsve:"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div
                                            className="flex justify-between items-center text-xs mb-3"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="q494us6"
                                        >
                                            <span data-oid="w3d0md0">Due: {task.dueDate}</span>
                                            <span data-oid="rjr0d:a">{task.project}</span>
                                        </div>

                                        {/* Status Change Buttons */}
                                        <div className="flex space-x-2" data-oid="rkaa05d">
                                            {Object.keys(columns).map((status) => (
                                                <button
                                                    key={status}
                                                    onClick={() =>
                                                        moveTask(task.id, status as Task['status'])
                                                    }
                                                    disabled={task.status === status}
                                                    className={`px-2 py-1 rounded-md text-xs transition-all hover:scale-105 ${
                                                        task.status === status
                                                            ? 'opacity-50 cursor-not-allowed'
                                                            : 'hover:opacity-80'
                                                    }`}
                                                    style={{
                                                        background:
                                                            task.status === status
                                                                ? 'var(--accent-red)'
                                                                : 'var(--bg-tertiary)',
                                                        color:
                                                            task.status === status
                                                                ? 'white'
                                                                : 'var(--text-primary)',
                                                    }}
                                                    data-oid="uoox4py"
                                                >
                                                    {columns[status as keyof typeof columns].title}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Task Modal */}
            {showAddTask && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    data-oid="caetkb2"
                >
                    <div
                        className="glass-effect rounded-2xl p-6 max-w-md w-full"
                        data-oid="aa7sosb"
                    >
                        <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: 'var(--text-primary)' }}
                            data-oid="6n7a2dd"
                        >
                            Add New Task
                        </h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target as HTMLFormElement);
                                addNewTask({
                                    title: formData.get('title') as string,
                                    description: formData.get('description') as string,
                                    priority: formData.get('priority') as Task['priority'],
                                    dueDate: formData.get('dueDate') as string,
                                    project: formData.get('project') as string,
                                    tags: (formData.get('tags') as string)
                                        .split(',')
                                        .map((tag) => tag.trim()),
                                });
                            }}
                            data-oid="mm.o.k0"
                        >
                            <div className="space-y-4" data-oid="6r1sas1">
                                <input
                                    name="title"
                                    placeholder="Task title"
                                    required
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="to7_7bb"
                                />

                                <textarea
                                    name="description"
                                    placeholder="Task description"
                                    rows={3}
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="dz.-987"
                                />

                                <select
                                    name="priority"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="xz8i6dr"
                                >
                                    <option value="low" data-oid="1b6nku:">
                                        Low Priority
                                    </option>
                                    <option value="medium" data-oid="wl8ljza">
                                        Medium Priority
                                    </option>
                                    <option value="high" data-oid="ym-766o">
                                        High Priority
                                    </option>
                                </select>
                                <input
                                    name="dueDate"
                                    type="date"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="uje7g7m"
                                />

                                <input
                                    name="project"
                                    placeholder="Project name"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="tu_cy5u"
                                />

                                <input
                                    name="tags"
                                    placeholder="Tags (comma separated)"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="y5y082c"
                                />
                            </div>
                            <div className="flex space-x-3 mt-6" data-oid="p7679np">
                                <button
                                    type="submit"
                                    className="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105"
                                    style={{
                                        background: 'var(--gradient-primary)',
                                        color: 'white',
                                    }}
                                    data-oid=".5hcri5"
                                >
                                    Add Task
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowAddTask(false)}
                                    className="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--border-primary)',
                                    }}
                                    data-oid="zj-xx_m"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
