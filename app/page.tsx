'use client';

import { useState, useEffect } from 'react';
import { TaskManager } from '../components/TaskManager';
import { TimeTracker } from '../components/TimeTracker';
import { MinimalView } from '../components/MinimalView';
import { ViewToggle } from '../components/ViewToggle';
import {
    internProfile,
    teamMembers,
    performanceStats,
    projectInfo,
    announcements,
    statusOptions,
    getStatusInfo,
    getPriorityColor,
    getPriorityBadgeColor,
    formatTime,
    formatDate,
    isDemoData,
    demoDataNotice,
} from '../lib/dummyData';

export default function Dashboard() {
    const [currentStatus, setCurrentStatus] = useState('active');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [isEditingTime, setIsEditingTime] = useState(false);
    const [inTime, setInTime] = useState('9:00 AM');
    const [outTime, setOutTime] = useState('6:00 PM');
    const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);
    const [isMinimalView, setIsMinimalView] = useState(false);

    // Update time every second and handle mounting
    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Close status dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (showStatusDropdown) {
                setShowStatusDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showStatusDropdown]);

    const handleStatusChange = (newStatus: string) => {
        setCurrentStatus(newStatus);
        setShowStatusDropdown(false);
    };

    const handleAnnouncementClick = (announcement: any) => {
        setSelectedAnnouncement(announcement);
        setShowAnnouncementModal(true);
    };

    const closeAnnouncementModal = () => {
        setShowAnnouncementModal(false);
        setSelectedAnnouncement(null);
    };

    if (!mounted) return null;

    // Show minimal view if toggled
    if (isMinimalView) {
        return (
            <>
                <ViewToggle isMinimal={isMinimalView} onToggle={setIsMinimalView} />

                <MinimalView />
            </>
        );
    }

    return (
        <div className="min-h-screen relative">
            {/* View Toggle */}
            <ViewToggle isMinimal={isMinimalView} onToggle={setIsMinimalView} />

            {/* Demo Data Notice */}
            {isDemoData && (
                <div className="bg-amber-100 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 m-4 rounded">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <span className="text-amber-500">⚠️</span>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-amber-700 dark:text-amber-300">
                                {demoDataNotice}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 🌊 Animated Background with Gradient Orbs */}
            <div className="animated-background">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>

            {/* ✨ HEADER SECTION */}
            <header className="glass-effect border-b-0 rounded-none backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 py-4 sm:py-0 gap-4 sm:gap-0">
                        {/* Logo and Title */}
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary hover-lift"
                                style={{ background: 'var(--gradient-primary)' }}
                            >
                                <span className="text-white font-bold text-base sm:text-lg">
                                    🚀
                                </span>
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold gradient-text">
                                    Priyansh Dashboard
                                </h1>
                                <p
                                    className="text-xs sm:text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>

                        {/* Header Right - Time and Profile */}
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            {/* Live Clock */}
                            <div className="text-center sm:text-right glass-effect p-3 sm:p-4 rounded-xl hover-lift">
                                <div className="text-lg sm:text-2xl font-bold gradient-text-secondary glow-pulse">
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs hidden sm:block"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    ⏰ Current Time
                                </div>
                            </div>

                            {/* Profile */}
                            <div className="flex items-center space-x-3 sm:space-x-4 glass-effect p-2 sm:p-3 rounded-xl hover-lift">
                                <div className="text-right hidden sm:block">
                                    <div
                                        className="text-sm font-semibold"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {internProfile.name}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--accent-warning)' }}
                                    >
                                        {internProfile.role}
                                    </div>
                                </div>
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary status-indicator status-active"
                                    style={{ background: 'var(--gradient-primary)' }}
                                >
                                    <span className="text-white font-bold text-base sm:text-lg">
                                        {internProfile.avatar}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 🎯 HERO SECTION */}
            <section className="relative z-10 py-8 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Welcome Banner */}
                    <div className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-10 hover-lift glow-primary mb-8">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                            <div
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center glow-primary float-animation mx-auto lg:mx-0"
                                style={{ background: 'var(--gradient-primary)' }}
                            >
                                <span className="text-white font-bold text-2xl sm:text-3xl">
                                    {internProfile.avatar}
                                </span>
                            </div>
                            <div className="flex-1 text-center lg:text-left">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3">
                                    <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-2 sm:mb-0">
                                        Welcome back, {internProfile.name}!
                                    </h2>
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusInfo(currentStatus).color} text-white glow-secondary inline-block`}
                                    >
                                        {getStatusInfo(currentStatus).icon}{' '}
                                        {getStatusInfo(currentStatus).label}
                                    </span>
                                </div>
                                <p className="font-semibold text-lg sm:text-xl mb-4 gradient-text-secondary">
                                    {internProfile.role}
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                    <div className="glass-effect p-3 rounded-xl text-center">
                                        <div className="text-lg sm:text-xl font-bold gradient-text-secondary">
                                            {performanceStats.tasksCompleted}
                                        </div>
                                        <div style={{ color: 'var(--text-secondary)' }}>
                                            Tasks Done
                                        </div>
                                    </div>
                                    <div className="glass-effect p-3 rounded-xl text-center">
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-success)' }}
                                        >
                                            {performanceStats.productivityScore}%
                                        </div>
                                        <div style={{ color: 'var(--text-secondary)' }}>
                                            Productivity
                                        </div>
                                    </div>
                                    <div className="glass-effect p-3 rounded-xl text-center">
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-warning)' }}
                                        >
                                            {performanceStats.codeCommits}
                                        </div>
                                        <div style={{ color: 'var(--text-secondary)' }}>
                                            Commits
                                        </div>
                                    </div>
                                    <div className="glass-effect p-3 rounded-xl text-center">
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-purple)' }}
                                        >
                                            8h 30m
                                        </div>
                                        <div style={{ color: 'var(--text-secondary)' }}>Today</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📊 MAIN CONTENT SECTION */}
            <main className="relative z-10 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
                        {/* LEFT COLUMN - Profile & Project Info */}
                        <div className="xl:col-span-2 space-y-6 lg:space-y-8">
                            {/* 👤 PROFILE DETAILS SECTION */}
                            <section className="glass-effect rounded-3xl p-6 sm:p-8 hover-lift glow-primary">
                                <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-6 flex items-center">
                                    <span className="mr-3">👤</span>
                                    Profile Details
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3 p-3 rounded-xl glass-effect">
                                            <span className="text-xl sm:text-2xl">📧</span>
                                            <div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    Email
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                >
                                                    {internProfile.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 rounded-xl glass-effect">
                                            <span className="text-xl sm:text-2xl">🎓</span>
                                            <div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    College
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                >
                                                    {internProfile.college}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 rounded-xl glass-effect">
                                            <span className="text-xl sm:text-2xl">📚</span>
                                            <div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    Year
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                >
                                                    {internProfile.year}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3 p-3 rounded-xl glass-effect">
                                            <span className="text-xl sm:text-2xl">🏢</span>
                                            <div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    Department
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                >
                                                    {internProfile.department}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 rounded-xl glass-effect">
                                            <span className="text-xl sm:text-2xl">👤</span>
                                            <div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    Manager
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                >
                                                    {internProfile.manager}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 rounded-xl glass-effect">
                                            <span className="text-xl sm:text-2xl">📅</span>
                                            <div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    Start Date
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                >
                                                    {internProfile.startDate}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 🚀 PROJECT INFO SECTION */}
                            <section className="glass-effect rounded-2xl p-6 hover-lift glow-secondary">
                                <h3 className="text-xl font-bold mb-6 flex items-center gradient-text">
                                    <span className="mr-3">🚀</span>
                                    Current Project
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4
                                            className="font-bold text-lg mb-3"
                                            style={{ color: 'var(--accent-cream)' }}
                                        >
                                            {projectInfo.name}
                                        </h4>
                                        <p
                                            className="leading-relaxed mb-4 text-sm sm:text-base"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {projectInfo.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                Status
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--status-active)' }}
                                            >
                                                {projectInfo.status}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                Priority
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-red)' }}
                                            >
                                                {projectInfo.priority}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                Deadline
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-yellow)' }}
                                            >
                                                {projectInfo.deadline}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span style={{ color: 'var(--text-secondary)' }}>
                                                Progress
                                            </span>
                                            <span
                                                className="font-bold"
                                                style={{ color: 'var(--text-primary)' }}
                                            >
                                                {projectInfo.progress}%
                                            </span>
                                        </div>
                                        <div
                                            className="w-full rounded-full h-3"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                        >
                                            <div
                                                className="h-3 rounded-full transition-all duration-500 glow-red"
                                                style={{
                                                    width: `${projectInfo.progress}%`,
                                                    background: 'var(--gradient-primary)',
                                                }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div>
                                        <span
                                            className="block mb-3 font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Tech Stack:
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {projectInfo.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--text-primary)',
                                                        border: '1px solid var(--border-secondary)',
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ⏰ TIME TRACKING SECTION */}
                            <section className="glass-effect rounded-3xl p-6 sm:p-8 hover-lift glow-secondary">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                                    <h3 className="text-xl sm:text-2xl font-bold gradient-text flex items-center">
                                        <span className="mr-3">⏰</span>
                                        Time Tracking
                                    </h3>
                                    <button
                                        onClick={() => setIsEditingTime(!isEditingTime)}
                                        className="btn-secondary hover-lift text-sm sm:text-base"
                                    >
                                        {isEditingTime ? '💾 Save' : '✏️ Edit Times'}
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                                    <div className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-secondary">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <span className="text-2xl sm:text-3xl">🌅</span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                Check In
                                            </span>
                                        </div>
                                        {isEditingTime ? (
                                            <input
                                                type="time"
                                                value={inTime.replace(/\s(AM|PM)/, '')}
                                                onChange={(e) => setInTime(e.target.value)}
                                                className="w-full p-3 sm:p-4 rounded-xl border-0 focus:ring-2 focus:ring-green-500 glass-effect"
                                                style={{
                                                    background: 'var(--bg-secondary)',
                                                    color: 'var(--text-primary)',
                                                }}
                                            />
                                        ) : (
                                            <div className="text-2xl sm:text-3xl font-bold gradient-text-secondary">
                                                {inTime}
                                            </div>
                                        )}
                                    </div>

                                    <div className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-danger">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <span className="text-2xl sm:text-3xl">🌇</span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                Check Out
                                            </span>
                                        </div>
                                        {isEditingTime ? (
                                            <input
                                                type="time"
                                                value={outTime.replace(/\s(AM|PM)/, '')}
                                                onChange={(e) => setOutTime(e.target.value)}
                                                className="w-full p-3 sm:p-4 rounded-xl border-0 focus:ring-2 focus:ring-red-500 glass-effect"
                                                style={{
                                                    background: 'var(--bg-secondary)',
                                                    color: 'var(--text-primary)',
                                                }}
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold"
                                                style={{ color: 'var(--accent-danger)' }}
                                            >
                                                {outTime}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-8 glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-warning">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-xl sm:text-2xl">⏱️</span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                Total Work Hours Today
                                            </span>
                                        </div>
                                        <span className="text-2xl sm:text-3xl font-bold gradient-text-secondary">
                                            8h 30m
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📋 TASK MANAGEMENT SECTION */}
                            <section>
                                <TaskManager />
                            </section>

                            {/* ⏱️ TIME TRACKER SECTION */}
                            <section>
                                <TimeTracker />
                            </section>
                        </div>

                        {/* SIDEBAR - Performance & Team */}
                        <div className="xl:col-span-1 space-y-6 lg:space-y-8">
                            {/* 📊 PERFORMANCE METRICS SECTION */}
                            <section className="glass-effect p-6 rounded-2xl hover-lift glow-primary">
                                <h3 className="text-xl font-bold mb-6 gradient-text flex items-center">
                                    <span className="mr-3">📊</span>
                                    Performance Metrics
                                </h3>
                                <div className="space-y-4">
                                    <div className="glass-effect p-4 rounded-xl hover-lift">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <span className="text-xl sm:text-2xl">✅</span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                Tasks Completed
                                            </span>
                                        </div>
                                        <span className="text-xl sm:text-2xl font-bold gradient-text-secondary">
                                            {performanceStats.tasksCompleted}
                                        </span>
                                    </div>
                                    <div className="glass-effect p-4 rounded-xl hover-lift">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <span className="text-xl sm:text-2xl">📈</span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                Productivity Score
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-secondary)' }}
                                        >
                                            {performanceStats.productivityScore}%
                                        </span>
                                    </div>
                                    <div className="glass-effect p-4 rounded-xl hover-lift">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <span className="text-xl sm:text-2xl">💻</span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                Code Commits
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-primary)' }}
                                        >
                                            {performanceStats.codeCommits}
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📢 ANNOUNCEMENTS SECTION */}
                            <section className="glass-effect p-6 rounded-2xl hover-lift glow-warning">
                                <h3 className="text-xl font-bold mb-6 gradient-text flex items-center">
                                    <span className="mr-3">📢</span>
                                    Recent Announcements
                                </h3>
                                <div className="space-y-4">
                                    {announcements.slice(0, 3).map((announcement) => (
                                        <div
                                            key={announcement.id}
                                            className="glass-effect p-4 rounded-xl hover-lift cursor-pointer transition-all duration-300"
                                            onClick={() => handleAnnouncementClick(announcement)}
                                        >
                                            <div className="flex items-start space-x-3">
                                                <span className="text-lg sm:text-xl">
                                                    {announcement.priority === 'high'
                                                        ? '🔴'
                                                        : announcement.priority === 'medium'
                                                          ? '🟡'
                                                          : '🟢'}
                                                </span>
                                                <div className="flex-1">
                                                    <h4
                                                        className="font-semibold mb-2 text-sm sm:text-base"
                                                        style={{ color: 'var(--text-primary)' }}
                                                    >
                                                        {announcement.title}
                                                    </h4>
                                                    <p
                                                        className="text-xs sm:text-sm mb-2"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                    >
                                                        {announcement.message.substring(0, 60)}...
                                                    </p>
                                                    <p
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-muted)' }}
                                                    >
                                                        {announcement.time}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 👥 TEAM MEMBERS SECTION */}
                            <section className="glass-effect p-6 rounded-2xl hover-lift glow-secondary">
                                <h3 className="text-xl font-bold mb-6 gradient-text flex items-center">
                                    <span className="mr-3">👥</span>
                                    Team Members
                                </h3>
                                <div className="space-y-4">
                                    {teamMembers.slice(0, 4).map((member, index) => (
                                        <div
                                            key={index}
                                            className="glass-effect p-4 rounded-xl hover-lift flex items-center space-x-3 sm:space-x-4"
                                        >
                                            <div
                                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xs sm:text-sm font-bold status-indicator status-${member.status} glow-primary`}
                                                style={{ background: 'var(--gradient-secondary)' }}
                                            >
                                                {member.avatar}
                                            </div>
                                            <div className="flex-1">
                                                <div
                                                    className="font-semibold text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="text-xs sm:text-sm"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    {member.role}
                                                </div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--accent-warning)' }}
                                                >
                                                    {getStatusInfo(member.status).icon}{' '}
                                                    {getStatusInfo(member.status).label}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* 🔔 FOOTER SECTION */}
            <footer className="relative z-10 py-8 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            © 2024 Priyansh-Dashboard-App. Built with ❤️ by Priyansh Kandwal.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Announcement Modal */}
            {showAnnouncementModal && selectedAnnouncement && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={closeAnnouncementModal}
                >
                    <div
                        className="card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div className="flex items-center space-x-3 text-sm">
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full"
                                        style={{
                                            background: 'var(--bg-tertiary)',
                                            color: 'var(--text-secondary)',
                                        }}
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }}>
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p
                                    className="text-lg leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>

                            <div className="flex justify-center space-x-4">
                                <button onClick={closeAnnouncementModal} className="btn-secondary">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
