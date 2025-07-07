'use client';

import { useState, useEffect } from 'react';

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
            title: 'Implement user authentication',
            description: 'Add login and registration functionality with JWT tokens',
            priority: 'high',
            status: 'in-progress',
            assignee: 'Alex Johnson',
            dueDate: '2024-06-22',
            project: 'Customer Analytics Platform',
            tags: ['backend', 'security'],
        },
        {
            id: '2',
            title: 'Design dashboard wireframes',
            description: 'Create wireframes for the new analytics dashboard',
            priority: 'medium',
            status: 'todo',
            assignee: 'Alex Johnson',
            dueDate: '2024-06-25',
            project: 'Customer Analytics Platform',
            tags: ['design', 'ui/ux'],
        },
        {
            id: '3',
            title: 'Write API documentation',
            description: 'Document all REST API endpoints with examples',
            priority: 'low',
            status: 'completed',
            assignee: 'Alex Johnson',
            dueDate: '2024-06-20',
            project: 'Customer Analytics Platform',
            tags: ['documentation'],
        },
        {
            id: '4',
            title: 'Setup CI/CD pipeline',
            description: 'Configure automated testing and deployment',
            priority: 'high',
            status: 'todo',
            assignee: 'Alex Johnson',
            dueDate: '2024-06-28',
            project: 'API Integration Suite',
            tags: ['devops', 'automation'],
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
            assignee: 'Alex Johnson',
            dueDate: taskData.dueDate || '',
            project: taskData.project || 'General',
            tags: taskData.tags || [],
        };
        setTasks([...tasks, newTask]);
        setShowAddTask(false);
    };

    return (
        <div className="space-y-6" data-oid="hx5b59x">
            {/* Header with filters */}
            <div className="flex flex-wrap items-center justify-between gap-4" data-oid="a720._p">
                <h3
                    className="text-xl font-bold"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="-p19li_"
                >
                    📋 Task Management
                </h3>
                <div className="flex items-center space-x-4" data-oid="g7r57uv">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value as any)}
                        className="px-3 py-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                        style={{
                            background: 'var(--bg-tertiary)',
                            color: 'var(--text-primary)',
                        }}
                        data-oid="z_be9ct"
                    >
                        <option value="all" data-oid="9a9lf3x">
                            All Status
                        </option>
                        <option value="todo" data-oid="575r_44">
                            To Do
                        </option>
                        <option value="in-progress" data-oid="4y8l2yk">
                            In Progress
                        </option>
                        <option value="completed" data-oid="2e18i4-">
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
                        data-oid="dihrw9:"
                    >
                        <option value="all" data-oid="a5j0w2d">
                            All Priority
                        </option>
                        <option value="high" data-oid="y3zwq6:">
                            High
                        </option>
                        <option value="medium" data-oid="alub8x.">
                            Medium
                        </option>
                        <option value="low" data-oid="byfueif">
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
                        data-oid="uxwgs2d"
                    >
                        + Add Task
                    </button>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid=":lt:vef">
                {Object.entries(columns).map(([columnId, column]) => (
                    <div key={columnId} className="space-y-4" data-oid="fuy.hpp">
                        <div
                            className={`p-4 rounded-xl border-l-4 ${column.color}`}
                            style={{ background: 'var(--bg-tertiary)' }}
                            data-oid="q_d8_xt"
                        >
                            <h4
                                className="font-bold text-lg"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="0aujy5u"
                            >
                                {column.title}
                            </h4>
                            <span
                                className="text-sm"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="armbpi-"
                            >
                                {filteredTasks.filter((task) => task.status === columnId).length}{' '}
                                tasks
                            </span>
                        </div>

                        <div className="space-y-3 min-h-[200px] p-2 rounded-xl" data-oid="mp19sdi">
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
                                        data-oid="jx8_wcn"
                                    >
                                        <div
                                            className="flex items-start justify-between mb-2"
                                            data-oid="me6yy7k"
                                        >
                                            <h5
                                                className="font-medium"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="1m7ydz0"
                                            >
                                                {task.title}
                                            </h5>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs text-white ${getPriorityColor(task.priority)}`}
                                                data-oid="2oxpr4x"
                                            >
                                                {task.priority}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm mb-3"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="8j3bk8n"
                                        >
                                            {task.description}
                                        </p>
                                        <div
                                            className="flex flex-wrap gap-1 mb-3"
                                            data-oid="9uushqx"
                                        >
                                            {task.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-2 py-1 rounded-md text-xs"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--accent-yellow)',
                                                    }}
                                                    data-oid="v:oml2t"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div
                                            className="flex justify-between items-center text-xs mb-3"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="w:roan8"
                                        >
                                            <span data-oid="337x_1k">Due: {task.dueDate}</span>
                                            <span data-oid="ecjakp.">{task.project}</span>
                                        </div>

                                        {/* Status Change Buttons */}
                                        <div className="flex space-x-2" data-oid="87v4tm7">
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
                                                    data-oid="cg:vlmf"
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
                    data-oid="0ltl-_o"
                >
                    <div
                        className="glass-effect rounded-2xl p-6 max-w-md w-full"
                        data-oid="6urg0l5"
                    >
                        <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: 'var(--text-primary)' }}
                            data-oid="38g_us."
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
                            data-oid=":sl_xjc"
                        >
                            <div className="space-y-4" data-oid="jmvskmk">
                                <input
                                    name="title"
                                    placeholder="Task title"
                                    required
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="sh6k:6d"
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
                                    data-oid="g2rjsgs"
                                />

                                <select
                                    name="priority"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="cjdhtvq"
                                >
                                    <option value="low" data-oid="p2lw01g">
                                        Low Priority
                                    </option>
                                    <option value="medium" data-oid="4mc.8.w">
                                        Medium Priority
                                    </option>
                                    <option value="high" data-oid="wer_ooz">
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
                                    data-oid="akw5.ix"
                                />

                                <input
                                    name="project"
                                    placeholder="Project name"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="20tr6vq"
                                />

                                <input
                                    name="tags"
                                    placeholder="Tags (comma separated)"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="saj59_."
                                />
                            </div>
                            <div className="flex space-x-3 mt-6" data-oid="3on0ny2">
                                <button
                                    type="submit"
                                    className="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105"
                                    style={{
                                        background: 'var(--gradient-primary)',
                                        color: 'white',
                                    }}
                                    data-oid="_x8ojxl"
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
                                    data-oid="0oa3yr2"
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
