'use client';

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const { source, destination, draggableId } = result;

        if (source.droppableId !== destination.droppableId) {
            const updatedTasks = tasks.map((task) =>
                task.id === draggableId
                    ? { ...task, status: destination.droppableId as Task['status'] }
                    : task,
            );
            setTasks(updatedTasks);
        }
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
        <div className="space-y-6" data-oid="bkjbqh8">
            {/* Header with filters */}
            <div className="flex flex-wrap items-center justify-between gap-4" data-oid="ltn3hkt">
                <h3
                    className="text-xl font-bold"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="l0_ed.b"
                >
                    📋 Task Management
                </h3>
                <div className="flex items-center space-x-4" data-oid="t0vm-t2">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value as any)}
                        className="px-3 py-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                        style={{
                            background: 'var(--bg-tertiary)',
                            color: 'var(--text-primary)',
                        }}
                        data-oid="0k8:9bn"
                    >
                        <option value="all" data-oid="h.rr:b2">
                            All Status
                        </option>
                        <option value="todo" data-oid="24_9ksa">
                            To Do
                        </option>
                        <option value="in-progress" data-oid="6tblmz3">
                            In Progress
                        </option>
                        <option value="completed" data-oid="dx_oxwu">
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
                        data-oid="0:g0hkg"
                    >
                        <option value="all" data-oid="1:39_4.">
                            All Priority
                        </option>
                        <option value="high" data-oid="r:ls1xm">
                            High
                        </option>
                        <option value="medium" data-oid="xp2xs-p">
                            Medium
                        </option>
                        <option value="low" data-oid="qhul2mh">
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
                        data-oid="q7s2brk"
                    >
                        + Add Task
                    </button>
                </div>
            </div>

            {/* Kanban Board */}
            <DragDropContext onDragEnd={onDragEnd} data-oid="6gp2tur">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="_6gfucg">
                    {Object.entries(columns).map(([columnId, column]) => (
                        <div key={columnId} className="space-y-4" data-oid="c27.z8m">
                            <div
                                className={`p-4 rounded-xl border-l-4 ${column.color}`}
                                style={{ background: 'var(--bg-tertiary)' }}
                                data-oid="bv7hfyg"
                            >
                                <h4
                                    className="font-bold text-lg"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="i0-:9ny"
                                >
                                    {column.title}
                                </h4>
                                <span
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="wp3d3i4"
                                >
                                    {
                                        filteredTasks.filter((task) => task.status === columnId)
                                            .length
                                    }{' '}
                                    tasks
                                </span>
                            </div>

                            <Droppable droppableId={columnId} data-oid="ggt596h">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`space-y-3 min-h-[200px] p-2 rounded-xl transition-colors ${
                                            snapshot.isDraggingOver ? 'bg-gray-800/50' : ''
                                        }`}
                                        data-oid="4am-0tt"
                                    >
                                        {filteredTasks
                                            .filter((task) => task.status === columnId)
                                            .map((task, index) => (
                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                    data-oid="ews_rk6"
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={`p-4 rounded-xl transition-all hover:scale-105 ${
                                                                snapshot.isDragging
                                                                    ? 'rotate-3 shadow-2xl'
                                                                    : ''
                                                            }`}
                                                            style={{
                                                                background: 'var(--bg-card)',
                                                                border: '1px solid var(--border-primary)',
                                                                ...provided.draggableProps.style,
                                                            }}
                                                            data-oid="92mrrze"
                                                        >
                                                            <div
                                                                className="flex items-start justify-between mb-2"
                                                                data-oid="7vt67c-"
                                                            >
                                                                <h5
                                                                    className="font-medium"
                                                                    style={{
                                                                        color: 'var(--text-primary)',
                                                                    }}
                                                                    data-oid=".ocm2qw"
                                                                >
                                                                    {task.title}
                                                                </h5>
                                                                <span
                                                                    className={`px-2 py-1 rounded-full text-xs text-white ${getPriorityColor(task.priority)}`}
                                                                    data-oid="sjgvoan"
                                                                >
                                                                    {task.priority}
                                                                </span>
                                                            </div>
                                                            <p
                                                                className="text-sm mb-3"
                                                                style={{
                                                                    color: 'var(--text-secondary)',
                                                                }}
                                                                data-oid="w3_ga37"
                                                            >
                                                                {task.description}
                                                            </p>
                                                            <div
                                                                className="flex flex-wrap gap-1 mb-3"
                                                                data-oid="hq7w47m"
                                                            >
                                                                {task.tags.map((tag, tagIndex) => (
                                                                    <span
                                                                        key={tagIndex}
                                                                        className="px-2 py-1 rounded-md text-xs"
                                                                        style={{
                                                                            background:
                                                                                'var(--bg-tertiary)',
                                                                            color: 'var(--accent-yellow)',
                                                                        }}
                                                                        data-oid="ucs6j6i"
                                                                    >
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                            <div
                                                                className="flex justify-between items-center text-xs"
                                                                style={{
                                                                    color: 'var(--text-muted)',
                                                                }}
                                                                data-oid="rjqdw3n"
                                                            >
                                                                <span data-oid="g-0zg9g">
                                                                    Due: {task.dueDate}
                                                                </span>
                                                                <span data-oid="cjsw-br">
                                                                    {task.project}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    ))}
                </div>
            </DragDropContext>

            {/* Add Task Modal */}
            {showAddTask && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    data-oid="--90wj8"
                >
                    <div
                        className="glass-effect rounded-2xl p-6 max-w-md w-full"
                        data-oid="tkag.xe"
                    >
                        <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: 'var(--text-primary)' }}
                            data-oid="_9a0_tq"
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
                            data-oid="e2llvp1"
                        >
                            <div className="space-y-4" data-oid="g.-gvub">
                                <input
                                    name="title"
                                    placeholder="Task title"
                                    required
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="74my5z7"
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
                                    data-oid="a_hg_ey"
                                />

                                <select
                                    name="priority"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="-r1vqb2"
                                >
                                    <option value="low" data-oid="-vqx6qm">
                                        Low Priority
                                    </option>
                                    <option value="medium" data-oid="--8nle:">
                                        Medium Priority
                                    </option>
                                    <option value="high" data-oid="115.kg5">
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
                                    data-oid="7u0cguj"
                                />

                                <input
                                    name="project"
                                    placeholder="Project name"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="2v4h8dt"
                                />

                                <input
                                    name="tags"
                                    placeholder="Tags (comma separated)"
                                    className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                    data-oid="01xvkei"
                                />
                            </div>
                            <div className="flex space-x-3 mt-6" data-oid="5:g7r3_">
                                <button
                                    type="submit"
                                    className="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105"
                                    style={{
                                        background: 'var(--gradient-primary)',
                                        color: 'white',
                                    }}
                                    data-oid="o-zqonw"
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
                                    data-oid="bgx2e-u"
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
