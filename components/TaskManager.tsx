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
        <div className="space-y-6" data-oid="j51o0:n">
            {/* Header with filters */}
            <div className="flex flex-wrap items-center justify-between gap-4" data-oid="n_deg5p">
                <h3
                    className="text-xl font-bold"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="ox5er3o"
                >
                    📋 Task Management
                </h3>
                <div className="flex items-center space-x-4" data-oid="ibq9e9:">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value as any)}
                        className="px-3 py-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                        style={{
                            background: 'var(--bg-tertiary)',
                            color: 'var(--text-primary)',
                        }}
                        data-oid="ihsvtok"
                    >
                        <option value="all" data-oid="luckb05">
                            All Status
                        </option>
                        <option value="todo" data-oid="ra638iv">
                            To Do
                        </option>
                        <option value="in-progress" data-oid="m9h63lr">
                            In Progress
                        </option>
                        <option value="completed" data-oid="n9t5sle">
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
                        data-oid=".lfhkqb"
                    >
                        <option value="all" data-oid="fq.mvth">
                            All Priority
                        </option>
                        <option value="high" data-oid="95thssp">
                            High
                        </option>
                        <option value="medium" data-oid="vpraza2">
                            Medium
                        </option>
                        <option value="low" data-oid="yzn6ygf">
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
                        data-oid=".j-b14m"
                    >
                        + Add Task
                    </button>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="ywtdsyy">
                {Object.entries(columns).map(([columnId, column]) => (
                    <div key={columnId} className="space-y-4" data-oid="-bhx505">
                        <div
                            className={`p-4 rounded-xl border-l-4 ${column.color}`}
                            style={{ background: 'var(--bg-tertiary)' }}
                            data-oid="l0-cu_y"
                        >
                            <h4
                                className="font-bold text-lg"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="-ntwtmk"
                            >
                                {column.title}
                            </h4>
                            <span
                                className="text-sm"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="5.-d6g5"
                            >
                                {filteredTasks.filter((task) => task.status === columnId).length}{' '}
                                tasks
                            </span>
                        </div>

                        <div className="space-y-3 min-h-[200px] p-2 rounded-xl" data-oid=".1c:thq">
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
                                        data-oid="6a6b444"
                                    >
                                        <div
                                            className="flex items-start justify-between mb-2"
                                            data-oid="v.twkik"
                                        >
                                            <h5
                                                className="font-medium"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="_vsilp:"
                                            >
                                                {task.title}
                                            </h5>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs text-white ${getPriorityColor(task.priority)}`}
                                                data-oid="qdlkw08"
                                            >
                                                {task.priority}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm mb-3"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="0p_jmla"
                                        >
                                            {task.description}
                                        </p>
                                        <div
                                            className="flex flex-wrap gap-1 mb-3"
                                            data-oid="r6mn_5a"
                                        >
                                            {task.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-2 py-1 rounded-md text-xs"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--accent-yellow)',
                                                    }}
                                                    data-oid="t44za4."
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div
                                            className="flex justify-between items-center text-xs mb-3"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="nvhc4tm"
                                        >
                                            <span data-oid="v6v79dy">Due: {task.dueDate}</span>
                                            <span data-oid="j65gi3.">{task.project}</span>
                                        </div>

                                        {/* Status Change Buttons */}
                                        <div className="flex space-x-2" data-oid="16wfsxh">
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
                                                    data-oid="3q0dkj:"
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
                    data-oid="3..885d"
                >
                    <div
                        className="glass-effect rounded-2xl p-6 max-w-md w-full"
                        data-oid="gfidgr5"
                    >
                        <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: 'var(--text-primary)' }}
                            data-oid="_.buw4b"
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
                            data-oid="himv-g5"
                        >
                            <div className="space-y-4" data-oid="c94ejt3">
                                <input
                                    name="title"
                                    placeholder="Task title"
                                    required
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="v6vc93w"
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
                                    data-oid="2-x58ey"
                                />

                                <select
                                    name="priority"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="75vmcis"
                                >
                                    <option value="low" data-oid="pbmu7_g">
                                        Low Priority
                                    </option>
                                    <option value="medium" data-oid="plcz2d1">
                                        Medium Priority
                                    </option>
                                    <option value="high" data-oid="i75oesm">
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
                                    data-oid="5vrbvov"
                                />

                                <input
                                    name="project"
                                    placeholder="Project name"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="6e8u8j2"
                                />

                                <input
                                    name="tags"
                                    placeholder="Tags (comma separated)"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="zb.qh3s"
                                />
                            </div>
                            <div className="flex space-x-3 mt-6" data-oid="befi8h2">
                                <button
                                    type="submit"
                                    className="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105"
                                    style={{
                                        background: 'var(--gradient-primary)',
                                        color: 'white',
                                    }}
                                    data-oid="815yr8c"
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
                                    data-oid="0h0rml3"
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
