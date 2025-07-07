'use client';

import { useEffect, useState } from 'react';
import { MinimalView } from '../components/MinimalView';
import { TaskManager } from '../components/TaskManager';
import { TimeTracker } from '../components/TimeTracker';
import { ViewToggle } from '../components/ViewToggle';
import {
    announcements,
    demoDataNotice,
    formatDate,
    formatTime,
    getPriorityBadgeColor,
    getStatusInfo,
    internProfile,
    isDemoData,
    performanceStats,
    projectInfo,
    teamMembers,
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
                <ViewToggle
                    isMinimal={isMinimalView}
                    onToggle={setIsMinimalView}
                    data-oid="vmwi04h"
                />

                <MinimalView data-oid="3rv-7f:" />
            </>
        );
    }

    return (
        <div className="min-h-screen relative" data-oid="dkjcn-8">
            {/* View Toggle */}
            <ViewToggle isMinimal={isMinimalView} onToggle={setIsMinimalView} data-oid="9dgg6qv" />

            {/* Demo Data Notice */}
            {isDemoData && (
                <div
                    className="bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-400 p-4 m-4 rounded-lg shadow-lg relative z-40"
                    data-oid="ui4t3v6"
                >
                    <div className="flex items-center" data-oid="i2h87i0">
                        <div className="flex-shrink-0" data-oid="ob-a02k">
                            <span className="text-amber-600 text-xl" data-oid="l:804ca">
                                ⚠️
                            </span>
                        </div>
                        <div className="ml-3" data-oid="-3nm85w">
                            <p
                                className="text-sm font-semibold text-amber-800 dark:text-amber-200"
                                data-oid="8x4qa3:"
                            >
                                {demoDataNotice}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 🌊 Animated Background with Gradient Orbs */}
            <div className="animated-background" data-oid="a3yxi0z">
                <div className="orb orb-1" data-oid=":hhh2wb"></div>
                <div className="orb orb-2" data-oid="d6vwr:s"></div>
                <div className="orb orb-3" data-oid="7s5re46"></div>
            </div>

            {/* ✨ HEADER SECTION */}
            <header
                className="glass-effect border-b-0 rounded-none backdrop-blur-xl sticky top-0 z-50"
                data-oid="7g3691x"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="al2qpr.">
                    <div
                        className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 py-4 sm:py-0 gap-4 sm:gap-0"
                        data-oid="1r_p-7x"
                    >
                        {/* Logo and Title */}
                        <div
                            className="flex items-center space-x-3 sm:space-x-4"
                            data-oid="vkq6oa4"
                        >
                            <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary hover-lift"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="kz2csdo"
                            >
                                <span
                                    className="text-white font-bold text-base sm:text-lg"
                                    data-oid="e5xeom6"
                                >
                                    🚀
                                </span>
                            </div>
                            <div data-oid="v-ppmpi">
                                <h1
                                    className="text-xl sm:text-2xl font-bold gradient-text"
                                    data-oid="9iwafo8"
                                >
                                    Priyansh Dashboard
                                </h1>
                                <p
                                    className="text-xs sm:text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="ey:lo2z"
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>

                        {/* Header Right - Time and Profile */}
                        <div
                            className="flex items-center space-x-4 sm:space-x-8"
                            data-oid="ct7:g99"
                        >
                            {/* Live Clock */}
                            <div
                                className="text-center sm:text-right glass-effect p-3 sm:p-4 rounded-xl hover-lift"
                                data-oid="7esb0gb"
                            >
                                <div
                                    className="text-lg sm:text-2xl font-bold gradient-text-secondary glow-pulse"
                                    data-oid="irtup.m"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs hidden sm:block"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="_itr4hs"
                                >
                                    ⏰ Current Time
                                </div>
                            </div>

                            {/* Profile */}
                            <div
                                className="flex items-center space-x-3 sm:space-x-4 glass-effect p-2 sm:p-3 rounded-xl hover-lift"
                                data-oid="_:25:pl"
                            >
                                <div className="text-right hidden sm:block" data-oid="otp30m_">
                                    <div
                                        className="text-sm font-semibold"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="ebmh.j-"
                                    >
                                        {internProfile.name}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--accent-warning)' }}
                                        data-oid="gdgcbok"
                                    >
                                        {internProfile.role}
                                    </div>
                                </div>
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary status-indicator status-active"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid=".5_ezap"
                                >
                                    <span
                                        className="text-white font-bold text-base sm:text-lg"
                                        data-oid="u_0hbqe"
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 🎯 HERO SECTION */}
            <section className="relative z-10 py-8 sm:py-12" data-oid="-1rmf1j">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="eg3-u1o">
                    {/* Welcome Banner */}
                    <div
                        className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-10 hover-lift glow-primary mb-8"
                        data-oid="s-.f1ev"
                    >
                        <div
                            className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8"
                            data-oid="yqi-7b0"
                        >
                            <div
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center glow-primary float-animation mx-auto lg:mx-0"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid=":q44vjr"
                            >
                                <span
                                    className="text-white font-bold text-2xl sm:text-3xl"
                                    data-oid="mo8nn7c"
                                >
                                    {internProfile.avatar}
                                </span>
                            </div>
                            <div className="flex-1 text-center lg:text-left" data-oid="ef:9lkr">
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3"
                                    data-oid="qfr97tw"
                                >
                                    <h2
                                        className="text-2xl sm:text-3xl font-bold gradient-text mb-2 sm:mb-0"
                                        data-oid="852hfmm"
                                    >
                                        Welcome back, {internProfile.name}!
                                    </h2>
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusInfo(currentStatus).color} text-white glow-secondary inline-block`}
                                        data-oid="fow3g6."
                                    >
                                        {getStatusInfo(currentStatus).icon}{' '}
                                        {getStatusInfo(currentStatus).label}
                                    </span>
                                </div>
                                <p
                                    className="font-semibold text-lg sm:text-xl mb-4 gradient-text-secondary"
                                    data-oid="rfv2nzz"
                                >
                                    {internProfile.role}
                                </p>
                                <div
                                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"
                                    data-oid="3jja6lp"
                                >
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="oqpjm0u"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold gradient-text-secondary"
                                            data-oid="pqp6dog"
                                        >
                                            {performanceStats.tasksCompleted}
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="z94_9ec"
                                        >
                                            Tasks Done
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="q:1m8-k"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-success)' }}
                                            data-oid="0_jo03w"
                                        >
                                            {performanceStats.productivityScore}%
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="u4xmdg-"
                                        >
                                            Productivity
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="gl4vkq4"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-warning)' }}
                                            data-oid="w2etaox"
                                        >
                                            {performanceStats.codeCommits}
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="k211x12"
                                        >
                                            Commits
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="i.s8457"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-purple)' }}
                                            data-oid="n14ze6a"
                                        >
                                            8h 30m
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="-1p1fnx"
                                        >
                                            Today
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📊 MAIN CONTENT SECTION */}
            <main className="relative z-10 pb-12" data-oid="t0yb4g0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="i23gvbj">
                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8"
                        data-oid="33vrqvf"
                    >
                        {/* LEFT COLUMN - Profile & Project Info */}
                        <div className="xl:col-span-2 space-y-6 lg:space-y-8" data-oid="b7ahybo">
                            {/* 👤 PROFILE DETAILS SECTION */}
                            <section
                                className="glass-effect rounded-3xl p-6 sm:p-8 hover-lift glow-primary"
                                data-oid="1wn179k"
                            >
                                <h3
                                    className="text-xl sm:text-2xl font-bold gradient-text mb-6 flex items-center"
                                    data-oid="_7guz4p"
                                >
                                    <span className="mr-3" data-oid="bcnfzf-">
                                        👤
                                    </span>
                                    Profile Details
                                </h3>
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                                    data-oid="90109ex"
                                >
                                    <div className="space-y-4" data-oid="um-avje">
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="yzvfn36"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="zavps_m"
                                            >
                                                📧
                                            </span>
                                            <div data-oid="y:imu-4">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="i88ipck"
                                                >
                                                    Email
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="htns_rb"
                                                >
                                                    {internProfile.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid=".wi1hlu"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="j-b13bh"
                                            >
                                                🎓
                                            </span>
                                            <div data-oid="w1:dl8x">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="ek0.5hz"
                                                >
                                                    College
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid=".o6xs3c"
                                                >
                                                    {internProfile.college}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid=".z..afv"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="gpo4mdf"
                                            >
                                                📚
                                            </span>
                                            <div data-oid="dz8r5la">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="47o:g.."
                                                >
                                                    Year
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="q8_iof7"
                                                >
                                                    {internProfile.year}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4" data-oid="_mq7mh9">
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="iwvbhjc"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="_mho2ry"
                                            >
                                                🏢
                                            </span>
                                            <div data-oid="-rlclez">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="pl2jm3:"
                                                >
                                                    Department
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="n.h-2x:"
                                                >
                                                    {internProfile.department}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="og40.ja"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="awbx0zs"
                                            >
                                                👤
                                            </span>
                                            <div data-oid="99qoyz9">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="a42nsv."
                                                >
                                                    Manager
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="bnbetjk"
                                                >
                                                    {internProfile.manager}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="a7n3qlm"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="04z5n1u"
                                            >
                                                📅
                                            </span>
                                            <div data-oid="u7ladih">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="yxr7sll"
                                                >
                                                    Start Date
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="0b:4lj6"
                                                >
                                                    {internProfile.startDate}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 🚀 PROJECT INFO SECTION */}
                            <section
                                className="glass-effect rounded-2xl p-6 hover-lift glow-secondary"
                                data-oid="lj2d:1r"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 flex items-center gradient-text"
                                    data-oid="wwt26vb"
                                >
                                    <span className="mr-3" data-oid="suj663e">
                                        🚀
                                    </span>
                                    Current Project
                                </h3>
                                <div className="space-y-6" data-oid="u854r2i">
                                    <div data-oid="ca8.21a">
                                        <h4
                                            className="font-bold text-lg mb-3"
                                            style={{ color: 'var(--accent-cream)' }}
                                            data-oid="gwerq6p"
                                        >
                                            {projectInfo.name}
                                        </h4>
                                        <p
                                            className="leading-relaxed mb-4 text-sm sm:text-base"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="b4y5oyt"
                                        >
                                            {projectInfo.description}
                                        </p>
                                    </div>

                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                                        data-oid=":_.y4ca"
                                    >
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="65mxfnq"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid=".fer70x"
                                            >
                                                Status
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--status-active)' }}
                                                data-oid="k18kzr:"
                                            >
                                                {projectInfo.status}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="_vsv6ts"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="jhftdcr"
                                            >
                                                Priority
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-red)' }}
                                                data-oid="3gcue5a"
                                            >
                                                {projectInfo.priority}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="03fgo_z"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="ledbogw"
                                            >
                                                Deadline
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-yellow)' }}
                                                data-oid="x.-hlm-"
                                            >
                                                {projectInfo.deadline}
                                            </div>
                                        </div>
                                    </div>

                                    <div data-oid="0p_75:-">
                                        <div
                                            className="flex justify-between items-center mb-2"
                                            data-oid="lc-pkuy"
                                        >
                                            <span
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="ake3rq5"
                                            >
                                                Progress
                                            </span>
                                            <span
                                                className="font-bold"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="7w48bf9"
                                            >
                                                {projectInfo.progress}%
                                            </span>
                                        </div>
                                        <div
                                            className="w-full rounded-full h-3"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="hihfktd"
                                        >
                                            <div
                                                className="h-3 rounded-full transition-all duration-500 glow-red"
                                                style={{
                                                    width: `${projectInfo.progress}%`,
                                                    background: 'var(--gradient-primary)',
                                                }}
                                                data-oid="xszmr1c"
                                            ></div>
                                        </div>
                                    </div>

                                    <div data-oid="l1yqhcu">
                                        <span
                                            className="block mb-3 font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="893me3o"
                                        >
                                            Tech Stack:
                                        </span>
                                        <div className="flex flex-wrap gap-2" data-oid="ise9ve1">
                                            {projectInfo.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--text-primary)',
                                                        border: '1px solid var(--border-secondary)',
                                                    }}
                                                    data-oid="vqse9td"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ⏰ TIME TRACKING SECTION */}
                            <section
                                className="glass-effect rounded-3xl p-6 sm:p-8 hover-lift glow-secondary"
                                data-oid="70gpr03"
                            >
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4"
                                    data-oid="2gvrd0q"
                                >
                                    <h3
                                        className="text-xl sm:text-2xl font-bold gradient-text flex items-center"
                                        data-oid="5j0c5lk"
                                    >
                                        <span className="mr-3" data-oid="qwzlh3a">
                                            ⏰
                                        </span>
                                        Time Tracking
                                    </h3>
                                    <button
                                        onClick={() => setIsEditingTime(!isEditingTime)}
                                        className="btn-secondary hover-lift text-sm sm:text-base"
                                        data-oid="2x3017m"
                                    >
                                        {isEditingTime ? '💾 Save' : '✏️ Edit Times'}
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
                                    data-oid="0p_6v3k"
                                >
                                    <div
                                        className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-secondary"
                                        data-oid="mh_96e7"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="69:eyq3"
                                        >
                                            <span
                                                className="text-2xl sm:text-3xl"
                                                data-oid="3snpcky"
                                            >
                                                🌅
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="yndh_by"
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
                                                data-oid="uflpvlf"
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold gradient-text-secondary"
                                                data-oid="u.4nzjt"
                                            >
                                                {inTime}
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-danger"
                                        data-oid="13wb.a9"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="z1g9np8"
                                        >
                                            <span
                                                className="text-2xl sm:text-3xl"
                                                data-oid="85_9ib9"
                                            >
                                                🌇
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid=".n7v5bc"
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
                                                data-oid="r4qt-2h"
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold"
                                                style={{ color: 'var(--accent-danger)' }}
                                                data-oid="wec2gru"
                                            >
                                                {outTime}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className="mt-6 sm:mt-8 glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-warning"
                                    data-oid="oj6umy_"
                                >
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                                        data-oid="e.vq4ac"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="jklm:md"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="h8y4s8x"
                                            >
                                                ⏱️
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="85ipgi0"
                                            >
                                                Total Work Hours Today
                                            </span>
                                        </div>
                                        <span
                                            className="text-2xl sm:text-3xl font-bold gradient-text-secondary"
                                            data-oid="i8ri35s"
                                        >
                                            8h 30m
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📋 TASK MANAGEMENT SECTION */}
                            <section data-oid="1ai0441">
                                <TaskManager data-oid="af8firl" />
                            </section>

                            {/* ⏱️ TIME TRACKER SECTION */}
                            <section data-oid="q3g52df">
                                <TimeTracker data-oid="vi7qdns" />
                            </section>
                        </div>

                        {/* SIDEBAR - Performance & Team */}
                        <div className="xl:col-span-1 space-y-6 lg:space-y-8" data-oid="9g5m0qh">
                            {/* 📊 PERFORMANCE METRICS SECTION */}
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-primary"
                                data-oid="184nxds"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="2khkndu"
                                >
                                    <span className="mr-3" data-oid="p_qv9fa">
                                        📊
                                    </span>
                                    Performance Metrics
                                </h3>
                                <div className="space-y-4" data-oid="gxcjo.y">
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="91azz5o"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="pp7pm.0"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid=":c8-cpv"
                                            >
                                                ✅
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid=":7:_e:m"
                                            >
                                                Tasks Completed
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold gradient-text-secondary"
                                            data-oid="_712e3j"
                                        >
                                            {performanceStats.tasksCompleted}
                                        </span>
                                    </div>
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="g-p.t9n"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="eklpigl"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid=":-10rf8"
                                            >
                                                📈
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="l_.q1p."
                                            >
                                                Productivity Score
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-secondary)' }}
                                            data-oid="yblhn-m"
                                        >
                                            {performanceStats.productivityScore}%
                                        </span>
                                    </div>
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="_aj4su1"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid=":xyvv_2"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="h:29nto"
                                            >
                                                💻
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="lp7:byc"
                                            >
                                                Code Commits
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-primary)' }}
                                            data-oid="y1x3_3c"
                                        >
                                            {performanceStats.codeCommits}
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📢 ANNOUNCEMENTS SECTION */}
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-warning"
                                data-oid="grhpday"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="y76-di9"
                                >
                                    <span className="mr-3" data-oid="fu3:4ex">
                                        📢
                                    </span>
                                    Recent Announcements
                                </h3>
                                <div className="space-y-4" data-oid="gwauj2k">
                                    {announcements.slice(0, 3).map((announcement) => (
                                        <div
                                            key={announcement.id}
                                            className="glass-effect p-4 rounded-xl hover-lift cursor-pointer transition-all duration-300"
                                            onClick={() => handleAnnouncementClick(announcement)}
                                            data-oid="g8xpb4y"
                                        >
                                            <div
                                                className="flex items-start space-x-3"
                                                data-oid="m9qgjfc"
                                            >
                                                <span
                                                    className="text-lg sm:text-xl"
                                                    data-oid="ncr:5kt"
                                                >
                                                    {announcement.priority === 'high'
                                                        ? '🔴'
                                                        : announcement.priority === 'medium'
                                                          ? '🟡'
                                                          : '🟢'}
                                                </span>
                                                <div className="flex-1" data-oid="wdw.ot9">
                                                    <h4
                                                        className="font-semibold mb-2 text-sm sm:text-base"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="70jcbek"
                                                    >
                                                        {announcement.title}
                                                    </h4>
                                                    <p
                                                        className="text-xs sm:text-sm mb-2"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="gtr1lwf"
                                                    >
                                                        {announcement.message.substring(0, 60)}...
                                                    </p>
                                                    <p
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-muted)' }}
                                                        data-oid="_ohjf3s"
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
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-secondary"
                                data-oid="r7oj.2z"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="yvs37g4"
                                >
                                    <span className="mr-3" data-oid="li_bt.x">
                                        👥
                                    </span>
                                    Team Members
                                </h3>
                                <div className="space-y-4" data-oid=":.ycakl">
                                    {teamMembers.slice(0, 4).map((member, index) => (
                                        <div
                                            key={index}
                                            className="glass-effect p-4 rounded-xl hover-lift flex items-center space-x-3 sm:space-x-4"
                                            data-oid=".5lq02e"
                                        >
                                            <div
                                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xs sm:text-sm font-bold status-indicator status-${member.status} glow-primary`}
                                                style={{ background: 'var(--gradient-secondary)' }}
                                                data-oid="18j2xqj"
                                            >
                                                {member.avatar}
                                            </div>
                                            <div className="flex-1" data-oid="oeot4mx">
                                                <div
                                                    className="font-semibold text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="iz-0_3p"
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="text-xs sm:text-sm"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="8v-xfw3"
                                                >
                                                    {member.role}
                                                </div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--accent-warning)' }}
                                                    data-oid="u1g9j88"
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
            <footer className="relative z-10 py-8 border-t border-gray-800" data-oid="_76pprq">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="oq.abma">
                    <div className="text-center" data-oid="1f9536b">
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="i7o_6.o"
                        >
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
                    data-oid=":j97c88"
                >
                    <div
                        className="card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-oid=".1-da51"
                    >
                        <div className="flex justify-between items-start mb-6" data-oid="b6m3cne">
                            <div data-oid="jd261bm">
                                <h2
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="_2:mwzx"
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div
                                    className="flex items-center space-x-3 text-sm"
                                    data-oid="4x2ss4_"
                                >
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                        data-oid="ezd9_dq"
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full"
                                        style={{
                                            background: 'var(--bg-tertiary)',
                                            color: 'var(--text-secondary)',
                                        }}
                                        data-oid="c8e7e6j"
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }} data-oid="20716y9">
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="wxi:ura"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6" data-oid="lc_muzf">
                            <div data-oid="5x4pvyc">
                                <p
                                    className="text-lg leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="wk-ek0-"
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>

                            <div className="flex justify-center space-x-4" data-oid="ldu4bre">
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="btn-secondary"
                                    data-oid="9o7auo:"
                                >
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
