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
                    data-oid="-o.p4l4"
                />

                <MinimalView data-oid="9ma-2_q" />
            </>
        );
    }

    return (
        <div className="min-h-screen relative" data-oid="pk0vo8x">
            {/* View Toggle */}
            <ViewToggle isMinimal={isMinimalView} onToggle={setIsMinimalView} data-oid="uyxvipj" />

            {/* Demo Data Notice */}
            {isDemoData && (
                <div
                    className="bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-400 p-4 m-4 rounded-lg shadow-lg relative z-40"
                    data-oid="b9:khxn"
                >
                    <div className="flex items-center" data-oid="ddvz1ns">
                        <div className="flex-shrink-0" data-oid="778k:e0">
                            <span className="text-amber-600 text-xl" data-oid="7w-s.x4">
                                ⚠️
                            </span>
                        </div>
                        <div className="ml-3" data-oid="m7ab.hi">
                            <p
                                className="text-sm font-semibold text-amber-800 dark:text-amber-200"
                                data-oid="wosb2t9"
                            >
                                {demoDataNotice}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 🌊 Animated Background with Gradient Orbs */}
            <div className="animated-background" data-oid="osjl3ny">
                <div className="orb orb-1" data-oid="l7vhn1l"></div>
                <div className="orb orb-2" data-oid="_t37j8_"></div>
                <div className="orb orb-3" data-oid="x-_n9yp"></div>
            </div>

            {/* ✨ HEADER SECTION */}
            <header
                className="glass-effect border-b-0 rounded-none backdrop-blur-xl sticky top-0 z-50"
                data-oid="mr-chdi"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="jp0ud9g">
                    <div
                        className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 py-4 sm:py-0 gap-4 sm:gap-0"
                        data-oid="f75ysz4"
                    >
                        {/* Logo and Title */}
                        <div
                            className="flex items-center space-x-3 sm:space-x-4"
                            data-oid="puhkrij"
                        >
                            <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary hover-lift"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="h97dy7:"
                            >
                                <span
                                    className="text-white font-bold text-base sm:text-lg"
                                    data-oid="h7q6bom"
                                >
                                    🚀
                                </span>
                            </div>
                            <div data-oid="g_q8drk">
                                <h1
                                    className="text-xl sm:text-2xl font-bold gradient-text"
                                    data-oid="c2avv.t"
                                >
                                    Priyansh Dashboard
                                </h1>
                                <p
                                    className="text-xs sm:text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="0dyubis"
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>

                        {/* Header Right - Time and Profile */}
                        <div
                            className="flex items-center space-x-4 sm:space-x-8"
                            data-oid="e_1ka8r"
                        >
                            {/* Live Clock */}
                            <div
                                className="text-center sm:text-right glass-effect p-3 sm:p-4 rounded-xl hover-lift"
                                data-oid=":k-4lwu"
                            >
                                <div
                                    className="text-lg sm:text-2xl font-bold gradient-text-secondary glow-pulse"
                                    data-oid="mugs:83"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs hidden sm:block"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid=":.2xbs."
                                >
                                    ⏰ Current Time
                                </div>
                            </div>

                            {/* Profile */}
                            <div
                                className="flex items-center space-x-3 sm:space-x-4 glass-effect p-2 sm:p-3 rounded-xl hover-lift"
                                data-oid="cf0y5m6"
                            >
                                <div className="text-right hidden sm:block" data-oid="-88t60n">
                                    <div
                                        className="text-sm font-semibold"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="ekme221"
                                    >
                                        {internProfile.name}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--accent-warning)' }}
                                        data-oid="_i0kqh6"
                                    >
                                        {internProfile.role}
                                    </div>
                                </div>
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary status-indicator status-active"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="zz:8qsr"
                                >
                                    <span
                                        className="text-white font-bold text-base sm:text-lg"
                                        data-oid="c7y:a6z"
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
            <section className="relative z-10 py-8 sm:py-12" data-oid="v85x9by">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="cajgks4">
                    {/* Welcome Banner */}
                    <div
                        className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-10 hover-lift glow-primary mb-8"
                        data-oid="eo2j1v."
                    >
                        <div
                            className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8"
                            data-oid="86bnifh"
                        >
                            <div
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center glow-primary float-animation mx-auto lg:mx-0"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="fks5hz5"
                            >
                                <span
                                    className="text-white font-bold text-2xl sm:text-3xl"
                                    data-oid=".7kjlh."
                                >
                                    {internProfile.avatar}
                                </span>
                            </div>
                            <div className="flex-1 text-center lg:text-left" data-oid=":xzdmj7">
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3"
                                    data-oid="yz3i:ox"
                                >
                                    <h2
                                        className="text-2xl sm:text-3xl font-bold gradient-text mb-2 sm:mb-0"
                                        data-oid="adz10of"
                                    >
                                        Welcome back, {internProfile.name}!
                                    </h2>
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusInfo(currentStatus).color} text-white glow-secondary inline-block`}
                                        data-oid="_97e0tn"
                                    >
                                        {getStatusInfo(currentStatus).icon}{' '}
                                        {getStatusInfo(currentStatus).label}
                                    </span>
                                </div>
                                <p
                                    className="font-semibold text-lg sm:text-xl mb-4 gradient-text-secondary"
                                    data-oid="6_psuaq"
                                >
                                    {internProfile.role}
                                </p>
                                <div
                                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"
                                    data-oid="h8iymi7"
                                >
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="k.:xrwx"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold gradient-text-secondary"
                                            data-oid="u1e94tm"
                                        >
                                            {performanceStats.tasksCompleted}
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="1.wm1rw"
                                        >
                                            Tasks Done
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="k9_:p8o"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-success)' }}
                                            data-oid="qu2mnnf"
                                        >
                                            {performanceStats.productivityScore}%
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="bdq5r6r"
                                        >
                                            Productivity
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="mo4_rzv"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-warning)' }}
                                            data-oid="v:mrhqk"
                                        >
                                            {performanceStats.codeCommits}
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="cbx3crb"
                                        >
                                            Commits
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid=":cez:54"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-purple)' }}
                                            data-oid="0jrylnl"
                                        >
                                            8h 30m
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="gah.lkb"
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
            <main className="relative z-10 pb-12" data-oid="-7ptbvx">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="o92.8tu">
                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8"
                        data-oid="1mwo1av"
                    >
                        {/* LEFT COLUMN - Profile & Project Info */}
                        <div className="xl:col-span-2 space-y-6 lg:space-y-8" data-oid="a0bc:eq">
                            {/* 👤 PROFILE DETAILS SECTION */}
                            <section
                                className="glass-effect rounded-3xl p-6 sm:p-8 hover-lift glow-primary"
                                data-oid=".le6guq"
                            >
                                <h3
                                    className="text-xl sm:text-2xl font-bold gradient-text mb-6 flex items-center"
                                    data-oid="nulx:r3"
                                >
                                    <span className="mr-3" data-oid="a0nantp">
                                        👤
                                    </span>
                                    Profile Details
                                </h3>
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                                    data-oid="il-icbi"
                                >
                                    <div className="space-y-4" data-oid="_28eb4c">
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="0x82i7g"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="o100wci"
                                            >
                                                📧
                                            </span>
                                            <div data-oid="ne:4o05">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="74hnb9n"
                                                >
                                                    Email
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="hlhs118"
                                                >
                                                    {internProfile.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="d1q4-yd"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="cklpgi_"
                                            >
                                                🎓
                                            </span>
                                            <div data-oid="66aj:t1">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="jq0:zuj"
                                                >
                                                    College
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="i5gs19y"
                                                >
                                                    {internProfile.college}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="qvds-3-"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="ewpeuta"
                                            >
                                                📚
                                            </span>
                                            <div data-oid="2tlp8jg">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="v-fghgr"
                                                >
                                                    Year
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="-qc2u8b"
                                                >
                                                    {internProfile.year}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4" data-oid="-reotp9">
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="rxg6_v1"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="u61hhay"
                                            >
                                                🏢
                                            </span>
                                            <div data-oid="g.srwcg">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="1is2dea"
                                                >
                                                    Department
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="3aosp.u"
                                                >
                                                    {internProfile.department}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="_b9wqwl"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="_w1lkn3"
                                            >
                                                👤
                                            </span>
                                            <div data-oid="d:uta.7">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="3zkkpy0"
                                                >
                                                    Manager
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="d-dsk45"
                                                >
                                                    {internProfile.manager}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="wq1pkmd"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="stcisy:"
                                            >
                                                📅
                                            </span>
                                            <div data-oid="waj5exx">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="28.eg34"
                                                >
                                                    Start Date
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="r:qugdy"
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
                                data-oid="1vdu73t"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 flex items-center gradient-text"
                                    data-oid="ajyw4w9"
                                >
                                    <span className="mr-3" data-oid="hqx-1s:">
                                        🚀
                                    </span>
                                    Current Project
                                </h3>
                                <div className="space-y-6" data-oid="i4unjo3">
                                    <div data-oid="gzj5j1k">
                                        <h4
                                            className="font-bold text-lg mb-3"
                                            style={{ color: 'var(--accent-cream)' }}
                                            data-oid="mznek_k"
                                        >
                                            {projectInfo.name}
                                        </h4>
                                        <p
                                            className="leading-relaxed mb-4 text-sm sm:text-base"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="w6yyln."
                                        >
                                            {projectInfo.description}
                                        </p>
                                    </div>

                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                                        data-oid="i2:_6fe"
                                    >
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="ho59xaq"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="r8.1s8:"
                                            >
                                                Status
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--status-active)' }}
                                                data-oid="alvj7l-"
                                            >
                                                {projectInfo.status}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="4johy:w"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid=":m:-188"
                                            >
                                                Priority
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-red)' }}
                                                data-oid="98yxf-q"
                                            >
                                                {projectInfo.priority}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="syq_9x_"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="xipzjc6"
                                            >
                                                Deadline
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-yellow)' }}
                                                data-oid="xz2d8dq"
                                            >
                                                {projectInfo.deadline}
                                            </div>
                                        </div>
                                    </div>

                                    <div data-oid="9iuaj:g">
                                        <div
                                            className="flex justify-between items-center mb-2"
                                            data-oid="j-:anas"
                                        >
                                            <span
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="p3v53zl"
                                            >
                                                Progress
                                            </span>
                                            <span
                                                className="font-bold"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="71-zr8k"
                                            >
                                                {projectInfo.progress}%
                                            </span>
                                        </div>
                                        <div
                                            className="w-full rounded-full h-3"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="bnzfcre"
                                        >
                                            <div
                                                className="h-3 rounded-full transition-all duration-500 glow-red"
                                                style={{
                                                    width: `${projectInfo.progress}%`,
                                                    background: 'var(--gradient-primary)',
                                                }}
                                                data-oid="_zu2xqc"
                                            ></div>
                                        </div>
                                    </div>

                                    <div data-oid="6ndgmvc">
                                        <span
                                            className="block mb-3 font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="wxo3md7"
                                        >
                                            Tech Stack:
                                        </span>
                                        <div className="flex flex-wrap gap-2" data-oid=".o0t4ov">
                                            {projectInfo.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--text-primary)',
                                                        border: '1px solid var(--border-secondary)',
                                                    }}
                                                    data-oid="kyth83n"
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
                                data-oid="s3lytfj"
                            >
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4"
                                    data-oid="m543yn_"
                                >
                                    <h3
                                        className="text-xl sm:text-2xl font-bold gradient-text flex items-center"
                                        data-oid="gx-2n1z"
                                    >
                                        <span className="mr-3" data-oid="vxdglkd">
                                            ⏰
                                        </span>
                                        Time Tracking
                                    </h3>
                                    <button
                                        onClick={() => setIsEditingTime(!isEditingTime)}
                                        className="btn-secondary hover-lift text-sm sm:text-base"
                                        data-oid="v1r_nw3"
                                    >
                                        {isEditingTime ? '💾 Save' : '✏️ Edit Times'}
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
                                    data-oid="xpo7wnl"
                                >
                                    <div
                                        className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-secondary"
                                        data-oid="s-6gdfo"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="qh5m1nl"
                                        >
                                            <span
                                                className="text-2xl sm:text-3xl"
                                                data-oid="_fqg-i."
                                            >
                                                🌅
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="yzusd.n"
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
                                                data-oid="o8ybbkv"
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold gradient-text-secondary"
                                                data-oid="daemzzu"
                                            >
                                                {inTime}
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-danger"
                                        data-oid="u_o323y"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="pgf:9vo"
                                        >
                                            <span
                                                className="text-2xl sm:text-3xl"
                                                data-oid="kl9s.xk"
                                            >
                                                🌇
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="fn7vfyy"
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
                                                data-oid="jsjvcm_"
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold"
                                                style={{ color: 'var(--accent-danger)' }}
                                                data-oid="qmon7h7"
                                            >
                                                {outTime}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className="mt-6 sm:mt-8 glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-warning"
                                    data-oid="9vp8w3q"
                                >
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                                        data-oid="uyu0dt5"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="w:opv71"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="hhfjt_0"
                                            >
                                                ⏱️
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid=".16b49n"
                                            >
                                                Total Work Hours Today
                                            </span>
                                        </div>
                                        <span
                                            className="text-2xl sm:text-3xl font-bold gradient-text-secondary"
                                            data-oid="8v-0ah1"
                                        >
                                            8h 30m
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📋 TASK MANAGEMENT SECTION */}
                            <section data-oid="s_dlgz-">
                                <TaskManager data-oid="yd1nids" />
                            </section>

                            {/* ⏱️ TIME TRACKER SECTION */}
                            <section data-oid="2ygp5m5">
                                <TimeTracker data-oid="fcnfclk" />
                            </section>
                        </div>

                        {/* SIDEBAR - Performance & Team */}
                        <div className="xl:col-span-1 space-y-6 lg:space-y-8" data-oid="wgxnk7x">
                            {/* 📊 PERFORMANCE METRICS SECTION */}
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-primary"
                                data-oid="cmhq35l"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="c1u_3dl"
                                >
                                    <span className="mr-3" data-oid="psszp74">
                                        📊
                                    </span>
                                    Performance Metrics
                                </h3>
                                <div className="space-y-4" data-oid="izs4ij:">
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="a2kkxq_"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="xt-wad3"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="ksyqms9"
                                            >
                                                ✅
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="32_krmz"
                                            >
                                                Tasks Completed
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold gradient-text-secondary"
                                            data-oid="r8nw9_f"
                                        >
                                            {performanceStats.tasksCompleted}
                                        </span>
                                    </div>
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="_401e4f"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="zglbd91"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="10yqs0h"
                                            >
                                                📈
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid=":a._ia9"
                                            >
                                                Productivity Score
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-secondary)' }}
                                            data-oid="j9m_s0b"
                                        >
                                            {performanceStats.productivityScore}%
                                        </span>
                                    </div>
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="9di9e_d"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="6nl1s:b"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="v04dixu"
                                            >
                                                💻
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="89cvvv9"
                                            >
                                                Code Commits
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-primary)' }}
                                            data-oid=".25950s"
                                        >
                                            {performanceStats.codeCommits}
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📢 ANNOUNCEMENTS SECTION */}
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-warning"
                                data-oid="xsjac:-"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="umibas:"
                                >
                                    <span className="mr-3" data-oid="r7afnq_">
                                        📢
                                    </span>
                                    Recent Announcements
                                </h3>
                                <div className="space-y-4" data-oid="b.73lc9">
                                    {announcements.slice(0, 3).map((announcement) => (
                                        <div
                                            key={announcement.id}
                                            className="glass-effect p-4 rounded-xl hover-lift cursor-pointer transition-all duration-300"
                                            onClick={() => handleAnnouncementClick(announcement)}
                                            data-oid="bulrjbg"
                                        >
                                            <div
                                                className="flex items-start space-x-3"
                                                data-oid="r3q:bcm"
                                            >
                                                <span
                                                    className="text-lg sm:text-xl"
                                                    data-oid="d1yy7jq"
                                                >
                                                    {announcement.priority === 'high'
                                                        ? '🔴'
                                                        : announcement.priority === 'medium'
                                                          ? '🟡'
                                                          : '🟢'}
                                                </span>
                                                <div className="flex-1" data-oid="lvwvezb">
                                                    <h4
                                                        className="font-semibold mb-2 text-sm sm:text-base"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="x.2bw5e"
                                                    >
                                                        {announcement.title}
                                                    </h4>
                                                    <p
                                                        className="text-xs sm:text-sm mb-2"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="8wna:ez"
                                                    >
                                                        {announcement.message.substring(0, 60)}...
                                                    </p>
                                                    <p
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-muted)' }}
                                                        data-oid="3j_-d_b"
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
                                data-oid="fmo:kez"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="shqczhz"
                                >
                                    <span className="mr-3" data-oid="wzmcvla">
                                        👥
                                    </span>
                                    Team Members
                                </h3>
                                <div className="space-y-4" data-oid="9v7h.e6">
                                    {teamMembers.slice(0, 4).map((member, index) => (
                                        <div
                                            key={index}
                                            className="glass-effect p-4 rounded-xl hover-lift flex items-center space-x-3 sm:space-x-4"
                                            data-oid="heb5g:n"
                                        >
                                            <div
                                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xs sm:text-sm font-bold status-indicator status-${member.status} glow-primary`}
                                                style={{ background: 'var(--gradient-secondary)' }}
                                                data-oid=":w62a43"
                                            >
                                                {member.avatar}
                                            </div>
                                            <div className="flex-1" data-oid="cqxj0nd">
                                                <div
                                                    className="font-semibold text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="yp4-x8j"
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="text-xs sm:text-sm"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="4i86vl9"
                                                >
                                                    {member.role}
                                                </div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--accent-warning)' }}
                                                    data-oid="59zppum"
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
            <footer className="relative z-10 py-8 border-t border-gray-800" data-oid="q.wxsh1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="cwkiick">
                    <div className="text-center" data-oid="dtz5_0x">
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="fe5iqs6"
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
                    data-oid="ma3xchv"
                >
                    <div
                        className="card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="p0yira0"
                    >
                        <div className="flex justify-between items-start mb-6" data-oid="-k_c0kb">
                            <div data-oid="334r4n_">
                                <h2
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="gwzt1qb"
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div
                                    className="flex items-center space-x-3 text-sm"
                                    data-oid="5m4u_ik"
                                >
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                        data-oid="x531ru_"
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full"
                                        style={{
                                            background: 'var(--bg-tertiary)',
                                            color: 'var(--text-secondary)',
                                        }}
                                        data-oid="vgzt1:_"
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }} data-oid="tif_cov">
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="nzf94p6"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6" data-oid="b79fc.b">
                            <div data-oid="0wplmv1">
                                <p
                                    className="text-lg leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="oecq_sz"
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>

                            <div className="flex justify-center space-x-4" data-oid="ffysl9y">
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="btn-secondary"
                                    data-oid="9uu_nxs"
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
