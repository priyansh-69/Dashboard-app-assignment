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
        <div className="space-y-6" data-oid="a_7xt:t">
            {/* Active Timer */}
            <div className="glass-effect rounded-2xl p-6" data-oid="u547ent">
                <div className="flex items-center space-x-2 mb-6" data-oid="hsepz5q">
                    <span className="text-2xl" data-oid="8sjt3y:">
                        ⏱️
                    </span>
                    <h3
                        className="text-xl font-bold"
                        style={{ color: 'var(--text-primary)' }}
                        data-oid="e1xcrgc"
                    >
                        Time Tracker
                    </h3>
                </div>

                {/* Timer Display */}
                <div className="text-center mb-6" data-oid="n5s5i.-">
                    <div
                        className={`text-6xl font-mono font-bold mb-2 ${isTracking ? 'text-green-400' : 'text-gray-400'}`}
                        style={{ color: isTracking ? 'var(--status-active)' : 'var(--text-muted)' }}
                        data-oid="9c08nj2"
                    >
                        {formatTime(elapsedTime)}
                    </div>
                    {isOnBreak && (
                        <div className="text-yellow-400 font-medium" data-oid="xv4slg3">
                            🟡 On Break
                        </div>
                    )}
                </div>

                {/* Task Input */}
                {!isTracking && (
                    <div className="space-y-4 mb-6" data-oid="c4ns-bp">
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
                            data-oid="50ryyh3"
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
                            data-oid="bvu8bzy"
                        />
                    </div>
                )}

                {/* Control Buttons */}
                <div className="flex space-x-3" data-oid="auwsval">
                    {!isTracking ? (
                        <button
                            onClick={startTracking}
                            disabled={!currentTask.trim()}
                            className="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                background: 'var(--gradient-primary)',
                                color: 'white',
                            }}
                            data-oid="ybs0jp5"
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
                                data-oid="cth841z"
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
                                data-oid="uk87xk8"
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
                        data-oid="hbwl6pu"
                    >
                        <div
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid=":yepk9:"
                        >
                            Current Task:
                        </div>
                        <div
                            className="font-medium"
                            style={{ color: 'var(--text-primary)' }}
                            data-oid="kiile0q"
                        >
                            {currentTask}
                        </div>
                        {currentProject && (
                            <div
                                className="text-sm"
                                style={{ color: 'var(--accent-yellow)' }}
                                data-oid="5wjzgz1"
                            >
                                Project: {currentProject}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Daily Summary */}
            <div className="glass-effect rounded-2xl p-6" data-oid="c4uvpc_">
                <h4
                    className="text-lg font-bold mb-4"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="56odh8o"
                >
                    📊 Today&apos;s Summary
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-oid="w08.a0g">
                    <div
                        className="p-3 rounded-lg text-center"
                        style={{ background: 'var(--bg-tertiary)' }}
                        data-oid=".iw9wk0"
                    >
                        <div
                            className="text-2xl font-bold"
                            style={{ color: 'var(--accent-yellow)' }}
                            data-oid="930xo1w"
                        >
                            {formatTime(getTotalTimeToday())}
                        </div>
                        <div
                            className="text-xs"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="-1yupq_"
                        >
                            Total Time
                        </div>
                    </div>
                    <div
                        className="p-3 rounded-lg text-center"
                        style={{ background: 'var(--bg-tertiary)' }}
                        data-oid="0w4jon0"
                    >
                        <div
                            className="text-2xl font-bold"
                            style={{ color: 'var(--status-active)' }}
                            data-oid="dpyl9mj"
                        >
                            {getTodayEntries().length}
                        </div>
                        <div
                            className="text-xs"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="xs4.91a"
                        >
                            Tasks
                        </div>
                    </div>
                    <div
                        className="p-3 rounded-lg text-center"
                        style={{ background: 'var(--bg-tertiary)' }}
                        data-oid="cit8u5k"
                    >
                        <div
                            className="text-2xl font-bold"
                            style={{ color: 'var(--accent-cream)' }}
                            data-oid="ai4t58d"
                        >
                            {formatTime(totalBreakTime)}
                        </div>
                        <div
                            className="text-xs"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="mnqj7p5"
                        >
                            Break Time
                        </div>
                    </div>
                    <div
                        className="p-3 rounded-lg text-center"
                        style={{ background: 'var(--bg-tertiary)' }}
                        data-oid="hexxyq_"
                    >
                        <div
                            className={`text-2xl font-bold ${getOvertimeHours() > 0 ? 'text-red-400' : 'text-green-400'}`}
                            data-oid=":8955ou"
                        >
                            {getOvertimeHours()}h
                        </div>
                        <div
                            className="text-xs"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="mp:i54."
                        >
                            Overtime
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Time Entries */}
            <div className="glass-effect rounded-2xl p-6" data-oid="wl:3yd4">
                <h4
                    className="text-lg font-bold mb-4"
                    style={{ color: 'var(--text-primary)' }}
                    data-oid="35ufe82"
                >
                    📝 Recent Entries
                </h4>
                <div className="space-y-3" data-oid="7f15nmr">
                    {getTodayEntries()
                        .slice(0, 5)
                        .map((entry) => (
                            <div
                                key={entry.id}
                                className="p-3 rounded-lg transition-all hover:scale-105"
                                style={{ background: 'var(--bg-tertiary)' }}
                                data-oid="8he7_kl"
                            >
                                <div
                                    className="flex justify-between items-start"
                                    data-oid="p949vdh"
                                >
                                    <div className="flex-1" data-oid="v378k2n">
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--text-primary)' }}
                                            data-oid="6vxa4j."
                                        >
                                            {entry.task}
                                        </div>
                                        <div
                                            className="text-sm"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="woz:0wg"
                                        >
                                            {entry.project}
                                        </div>
                                        <div
                                            className="text-xs"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="pakuv71"
                                        >
                                            {entry.startTime.toLocaleTimeString()} -{' '}
                                            {entry.endTime?.toLocaleTimeString() || 'Active'}
                                        </div>
                                    </div>
                                    <div className="text-right" data-oid="7:zc-1_">
                                        <div
                                            className="font-bold"
                                            style={{ color: 'var(--accent-yellow)' }}
                                            data-oid="7u5taar"
                                        >
                                            {formatTime(entry.duration)}
                                        </div>
                                        {entry.isActive && (
                                            <div
                                                className="text-xs text-green-400"
                                                data-oid="ehrb.nc"
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
