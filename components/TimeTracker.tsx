'use client';

import { useEffect, useState } from 'react';

interface TimeEntry {
    id: string;
    task: string;
    project: string;
    startTime: Date;
    endTime?: Date;
    duration: number;
    isActive: boolean;
}

export function TimeTracker() {
    const [isTracking, setIsTracking] = useState(false);
    const [currentTask, setCurrentTask] = useState('');
    const [currentProject, setCurrentProject] = useState('');
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
    const [isOnBreak, setIsOnBreak] = useState(false);
    const [breakStartTime, setBreakStartTime] = useState<Date | null>(null);
    const [totalBreakTime, setTotalBreakTime] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTracking && !isOnBreak) {
            interval = setInterval(() => {
                setElapsedTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTracking, isOnBreak]);

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const startTracking = () => {
        if (!currentTask.trim()) return;

        setIsTracking(true);
        setElapsedTime(0);

        const newEntry: TimeEntry = {
            id: Date.now().toString(),
            task: currentTask,
            project: currentProject || 'General',
            startTime: new Date(),
            duration: 0,
            isActive: true,
        };

        setTimeEntries((prev) => [
            newEntry,
            ...prev.map((entry) => ({ ...entry, isActive: false })),
        ]);
    };

    const stopTracking = () => {
        setIsTracking(false);
        setIsOnBreak(false);

        setTimeEntries((prev) =>
            prev.map((entry, index) =>
                index === 0 && entry.isActive
                    ? { ...entry, endTime: new Date(), duration: elapsedTime, isActive: false }
                    : entry,
            ),
        );

        setCurrentTask('');
        setCurrentProject('');
        setElapsedTime(0);
    };

    const toggleBreak = () => {
        if (isOnBreak) {
            // End break
            if (breakStartTime) {
                const breakDuration = Math.floor(
                    (new Date().getTime() - breakStartTime.getTime()) / 1000,
                );
                setTotalBreakTime((prev) => prev + breakDuration);
            }
            setIsOnBreak(false);
            setBreakStartTime(null);
        } else {
            // Start break
            setIsOnBreak(true);
            setBreakStartTime(new Date());
        }
    };

    const getTodayEntries = () => {
        const today = new Date().toDateString();
        return timeEntries.filter((entry) => entry.startTime.toDateString() === today);
    };

    const getTotalTimeToday = () => {
        return (
            getTodayEntries().reduce((total, entry) => total + entry.duration, 0) +
            (isTracking && !isOnBreak ? elapsedTime : 0)
        );
    };

    const getOvertimeHours = () => {
        const totalSeconds = getTotalTimeToday();
        const standardWorkDay = 8 * 3600; // 8 hours in seconds
        const overtime = Math.max(0, totalSeconds - standardWorkDay);
        return Math.floor(overtime / 3600);
    };

    return (
        <div className="space-y-6" data-oid="u31_h-t">
            {/* Active Timer */}
            <div className="glass-effect rounded-2xl p-6" data-oid="uev63wo">
                <div className="flex items-center space-x-2 mb-6" data-oid="pk.5t9b">
                    <span className="text-2xl" data-oid="5.ou.3.">
                        ⏱️
                    </span>
                    <h3
                        className="text-xl font-bold"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="txtyym3"
                    >
                        Time Tracker
                    </h3>
                </div>

                {/* Timer Display */}
                <div className="text-center mb-6" data-oid="te:cbg7">
                    <div
                        className={`text-6xl font-mono font-bold mb-2 ${isTracking ? 'text-green-400' : 'text-gray-400'}`}
                        style={{ color: isTracking ? 'var(--status-active)' : 'var(--text-muted)' }}
                        data-oid="elnk61f"
                    >
                        {formatTime(elapsedTime)}
                    </div>
                    {isOnBreak && (
                        <div className="text-yellow-400 font-medium" data-oid="uumt25x">
                            🟡 On Break
                        </div>
                    )}
                </div>

                {/* Task Input */}
                {!isTracking && (
                    <div className="space-y-4 mb-6" data-oid="-piz2t_">
                        <input
                            type="text"
                            placeholder="What are you working on?"
                            value={currentTask}
                            onChange={(e) => setCurrentTask(e.target.value)}
                            className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                            style={{
                                background: 'var(--bg-tertiary)',
                                color: 'var(--text-primary)',
                            }}
                            data-oid="axn-vj0"
                        />

                        <input
                            type="text"
                            placeholder="Project (optional)"
                            value={currentProject}
                            onChange={(e) => setCurrentProject(e.target.value)}
                            className="w-full p-3 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                            style={{
                                background: 'var(--bg-tertiary)',
                                color: 'var(--text-primary)',
                            }}
                            data-oid="_2t1qfu"
                        />
                    </div>
                )}

                {/* Control Buttons */}
                <div className="flex space-x-3" data-oid="rr5ai-l">
                    {!isTracking ? (
                        <button
                            onClick={startTracking}
                            disabled={!currentTask.trim()}
                            className="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                background: 'var(--gradient-primary)',
                                color: 'white',
                            }}
                            data-oid="j1j-pve"
                        >
                            ▶️ Start Timer
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={toggleBreak}
                                className="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105"
                                style={{
                                    background: isOnBreak
                                        ? 'var(--gradient-primary)'
                                        : 'var(--gradient-secondary)',
                                    color: isOnBreak ? 'white' : 'black',
                                }}
                                data-oid="ljca5-v"
                            >
                                {isOnBreak ? '▶️ Resume' : '⏸️ Break'}
                            </button>
                            <button
                                onClick={stopTracking}
                                className="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105"
                                style={{
                                    background: 'var(--bg-tertiary)',
                                    color: 'var(--text-primary)',
                                    border: '1px solid var(--border-primary)',
                                }}
                                data-oid="ocozp.-"
                            >
                                ⏹️ Stop
                            </button>
                        </>
                    )}
                </div>

                {/* Current Task Info */}
                {isTracking && (
                    <div
                        className="mt-4 p-3 rounded-lg"
                        style={{ background: 'var(--bg-tertiary)' }}
                        data-oid="_ha_l9t"
                    >
                        <div
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="0difh_q"
                        >
                            Current Task:
                        </div>
                        <div
                            className="font-medium"
                            style={{ color: 'var(--text-primary)' }}
                            data-oid="0efxdg8"
                        >
                            {currentTask}
                        </div>
                        {currentProject && (
                            <div
                                className="text-sm"
                                style={{ color: 'var(--accent-yellow)' }}
                                data-oid="k.3ur.7"
                            >
                                Project: {currentProject}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Daily Summary */}
            <div className="glass-effect rounded-2xl p-6" data-oid="l---w4g">
                <h4
                    className="text-lg font-bold mb-4"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="aa:e2ic"
                >
                    📊 Today&apos;s Summary
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-oid="vr:e1za">
                    <div
                        className="p-3 rounded-lg text-center"
                        style={{ background: 'var(--bg-tertiary)' }}
                        data-oid="wp363cq"
                    >
                        <div
                            className="text-2xl font-bold"
                            style={{ color: 'var(--accent-yellow)' }}
                            data-oid="nndpo2."
                        >
                            {formatTime(getTotalTimeToday())}
                        </div>
                        <div
                            className="text-xs"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="d9btroj"
                        >
                            Total Time
                        </div>
                    </div>
                    <div
                        className="p-3 rounded-lg text-center"
                        style={{ background: 'var(--bg-tertiary)' }}
                        data-oid="3ydlfiu"
                    >
                        <div
                            className="text-2xl font-bold"
                            style={{ color: 'var(--status-active)' }}
                            data-oid="kn-prki"
                        >
                            {getTodayEntries().length}
                        </div>
                        <div
                            className="text-xs"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="le4y2pq"
                        >
                            Tasks
                        </div>
                    </div>
                    <div
                        className="p-3 rounded-lg text-center"
                        style={{ background: 'var(--bg-tertiary)' }}
                        data-oid="tsq4jxg"
                    >
                        <div
                            className="text-2xl font-bold"
                            style={{ color: 'var(--accent-cream)' }}
                            data-oid="831y86j"
                        >
                            {formatTime(totalBreakTime)}
                        </div>
                        <div
                            className="text-xs"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="zsg4i_j"
                        >
                            Break Time
                        </div>
                    </div>
                    <div
                        className="p-3 rounded-lg text-center"
                        style={{ background: 'var(--bg-tertiary)' }}
                        data-oid="r9.2cfm"
                    >
                        <div
                            className={`text-2xl font-bold ${getOvertimeHours() > 0 ? 'text-red-400' : 'text-green-400'}`}
                            data-oid="c8_vjql"
                        >
                            {getOvertimeHours()}h
                        </div>
                        <div
                            className="text-xs"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="z.5dco2"
                        >
                            Overtime
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Time Entries */}
            <div className="glass-effect rounded-2xl p-6" data-oid="lkj89pd">
                <h4
                    className="text-lg font-bold mb-4"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="osr6-9j"
                >
                    📝 Recent Entries
                </h4>
                <div className="space-y-3" data-oid="e25yake">
                    {getTodayEntries()
                        .slice(0, 5)
                        .map((entry) => (
                            <div
                                key={entry.id}
                                className="p-3 rounded-lg transition-all hover:scale-105"
                                style={{ background: 'var(--bg-tertiary)' }}
                                data-oid="h6o5mif"
                            >
                                <div
                                    className="flex justify-between items-start"
                                    data-oid="gcujm2c"
                                >
                                    <div className="flex-1" data-oid=".vb4pu2">
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--text-primary)' }}
                                            data-oid="4e33ait"
                                        >
                                            {entry.task}
                                        </div>
                                        <div
                                            className="text-sm"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="2vlxi81"
                                        >
                                            {entry.project}
                                        </div>
                                        <div
                                            className="text-xs"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="oatk9ch"
                                        >
                                            {entry.startTime.toLocaleTimeString()} -{' '}
                                            {entry.endTime?.toLocaleTimeString() || 'Active'}
                                        </div>
                                    </div>
                                    <div className="text-right" data-oid="jiulk0d">
                                        <div
                                            className="font-bold"
                                            style={{ color: 'var(--accent-yellow)' }}
                                            data-oid="jbte6b2"
                                        >
                                            {formatTime(entry.duration)}
                                        </div>
                                        {entry.isActive && (
                                            <div
                                                className="text-xs text-green-400"
                                                data-oid="5t6gg9:"
                                            >
                                                🟢 Active
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
