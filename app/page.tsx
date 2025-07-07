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
                <ViewToggle
                    isMinimal={isMinimalView}
                    onToggle={setIsMinimalView}
                    data-oid="23q5fag"
                />

                <MinimalView data-oid="gyizme9" />
            </>
        );
    }

    return (
        <div className="min-h-screen relative" data-oid="g1dd2ux">
            {/* View Toggle */}
            <ViewToggle isMinimal={isMinimalView} onToggle={setIsMinimalView} data-oid="3_e2ocp" />

            {/* Demo Data Notice */}
            {isDemoData && (
                <div
                    className="bg-amber-100 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 m-4 rounded"
                    data-oid="53kh9qn"
                >
                    <div className="flex" data-oid="39brmmg">
                        <div className="flex-shrink-0" data-oid="ndwgdn2">
                            <span className="text-amber-500" data-oid="3wygzco">
                                ⚠️
                            </span>
                        </div>
                        <div className="ml-3" data-oid="bulib7-">
                            <p
                                className="text-sm text-amber-700 dark:text-amber-300"
                                data-oid="gg2ek97"
                            >
                                {demoDataNotice}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 🌊 Animated Background with Gradient Orbs */}
            <div className="animated-background" data-oid="uks6li0">
                <div className="orb orb-1" data-oid="hpe2yn5"></div>
                <div className="orb orb-2" data-oid="x8.6yhn"></div>
                <div className="orb orb-3" data-oid="6s41t:h"></div>
            </div>

            {/* ✨ HEADER SECTION */}
            <header
                className="glass-effect border-b-0 rounded-none backdrop-blur-xl sticky top-0 z-50"
                data-oid="b3bqtpb"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="7nguyc-">
                    <div
                        className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 py-4 sm:py-0 gap-4 sm:gap-0"
                        data-oid="2z7e5eh"
                    >
                        {/* Logo and Title */}
                        <div
                            className="flex items-center space-x-3 sm:space-x-4"
                            data-oid=".kp46py"
                        >
                            <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary hover-lift"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="b4ygc7g"
                            >
                                <span
                                    className="text-white font-bold text-base sm:text-lg"
                                    data-oid="u8i377t"
                                >
                                    🚀
                                </span>
                            </div>
                            <div data-oid="p1siwkp">
                                <h1
                                    className="text-xl sm:text-2xl font-bold gradient-text"
                                    data-oid="p5pu1__"
                                >
                                    Intern Dashboard
                                </h1>
                                <p
                                    className="text-xs sm:text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="cvly8pz"
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>

                        {/* Header Right - Time and Profile */}
                        <div
                            className="flex items-center space-x-4 sm:space-x-8"
                            data-oid="eh6fajq"
                        >
                            {/* Live Clock */}
                            <div
                                className="text-center sm:text-right glass-effect p-3 sm:p-4 rounded-xl hover-lift"
                                data-oid="o538d9m"
                            >
                                <div
                                    className="text-lg sm:text-2xl font-bold gradient-text-secondary glow-pulse"
                                    data-oid="yi.kpjv"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs hidden sm:block"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="oi8m5tb"
                                >
                                    ⏰ Current Time
                                </div>
                            </div>

                            {/* Profile */}
                            <div
                                className="flex items-center space-x-3 sm:space-x-4 glass-effect p-2 sm:p-3 rounded-xl hover-lift"
                                data-oid="gxjtf0j"
                            >
                                <div className="text-right hidden sm:block" data-oid="01oscbz">
                                    <div
                                        className="text-sm font-semibold"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="vh.hhj-"
                                    >
                                        {internProfile.name}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--accent-warning)' }}
                                        data-oid="pdaa67c"
                                    >
                                        {internProfile.role}
                                    </div>
                                </div>
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary status-indicator status-active"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="9tx:m3."
                                >
                                    <span
                                        className="text-white font-bold text-base sm:text-lg"
                                        data-oid=".z0a6_f"
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
            <section className="relative z-10 py-8 sm:py-12" data-oid="8.k.6nt">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="z.uzqlm">
                    {/* Welcome Banner */}
                    <div
                        className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-10 hover-lift glow-primary mb-8"
                        data-oid="ljn2cp."
                    >
                        <div
                            className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8"
                            data-oid="ypdlntg"
                        >
                            <div
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center glow-primary float-animation mx-auto lg:mx-0"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="ql.dm_5"
                            >
                                <span
                                    className="text-white font-bold text-2xl sm:text-3xl"
                                    data-oid="0gvf7ln"
                                >
                                    {internProfile.avatar}
                                </span>
                            </div>
                            <div className="flex-1 text-center lg:text-left" data-oid="kg-f464">
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3"
                                    data-oid="9vbr1-u"
                                >
                                    <h2
                                        className="text-2xl sm:text-3xl font-bold gradient-text mb-2 sm:mb-0"
                                        data-oid="wsli3ek"
                                    >
                                        Welcome back, {internProfile.name}!
                                    </h2>
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusInfo(currentStatus).color} text-white glow-secondary inline-block`}
                                        data-oid="tfn4jqe"
                                    >
                                        {getStatusInfo(currentStatus).icon}{' '}
                                        {getStatusInfo(currentStatus).label}
                                    </span>
                                </div>
                                <p
                                    className="font-semibold text-lg sm:text-xl mb-4 gradient-text-secondary"
                                    data-oid="0z709_o"
                                >
                                    {internProfile.role}
                                </p>
                                <div
                                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"
                                    data-oid="3u668ma"
                                >
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="eil-i:_"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold gradient-text-secondary"
                                            data-oid="60-ejni"
                                        >
                                            {performanceStats.tasksCompleted}
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="228x8bx"
                                        >
                                            Tasks Done
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="magjt-3"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-success)' }}
                                            data-oid="ye:-pfb"
                                        >
                                            {performanceStats.productivityScore}%
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="n3dht_b"
                                        >
                                            Productivity
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="-bx4l6d"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-warning)' }}
                                            data-oid="m7j-3mh"
                                        >
                                            {performanceStats.codeCommits}
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="u.qp94-"
                                        >
                                            Commits
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="zojh0mp"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-purple)' }}
                                            data-oid="v_s2cqn"
                                        >
                                            8h 30m
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="u.u7j7h"
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
            <main className="relative z-10 pb-12" data-oid="f6bfpz8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="8p3c5kq">
                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8"
                        data-oid="7p1xjij"
                    >
                        {/* LEFT COLUMN - Profile & Project Info */}
                        <div className="xl:col-span-2 space-y-6 lg:space-y-8" data-oid="2zqsfqo">
                            {/* 👤 PROFILE DETAILS SECTION */}
                            <section
                                className="glass-effect rounded-3xl p-6 sm:p-8 hover-lift glow-primary"
                                data-oid=":wki185"
                            >
                                <h3
                                    className="text-xl sm:text-2xl font-bold gradient-text mb-6 flex items-center"
                                    data-oid="av7:r.:"
                                >
                                    <span className="mr-3" data-oid="fuf5mi2">
                                        👤
                                    </span>
                                    Profile Details
                                </h3>
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                                    data-oid="ctk-khi"
                                >
                                    <div className="space-y-4" data-oid="5-hodig">
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="b26-qit"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="_676bdg"
                                            >
                                                📧
                                            </span>
                                            <div data-oid="h-i.6hk">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="1.e8s3m"
                                                >
                                                    Email
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="0rm9s9e"
                                                >
                                                    {internProfile.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="4pi:mua"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="hcgr9ud"
                                            >
                                                🎓
                                            </span>
                                            <div data-oid="71:m7qj">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="srm:wdz"
                                                >
                                                    College
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="t9d:viw"
                                                >
                                                    {internProfile.college}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="43j2-7s"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="d2uh79."
                                            >
                                                📚
                                            </span>
                                            <div data-oid="7jejvoh">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="wfq9bug"
                                                >
                                                    Year
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid=".ld9sh8"
                                                >
                                                    {internProfile.year}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4" data-oid="ua684rd">
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="amff0yz"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="o34n4lc"
                                            >
                                                🏢
                                            </span>
                                            <div data-oid="o5ka5k0">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="caeqldo"
                                                >
                                                    Department
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="sx:mva8"
                                                >
                                                    {internProfile.department}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="erww2_m"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="1b5pmfi"
                                            >
                                                👤
                                            </span>
                                            <div data-oid="a04mnjl">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="d839lcg"
                                                >
                                                    Manager
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="615fmov"
                                                >
                                                    {internProfile.manager}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="yzk:jrt"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="dbrwb.1"
                                            >
                                                📅
                                            </span>
                                            <div data-oid="7ybwaay">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="onplfg-"
                                                >
                                                    Start Date
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="57_mkq:"
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
                                data-oid="s08hgi."
                            >
                                <h3
                                    className="text-xl font-bold mb-6 flex items-center gradient-text"
                                    data-oid="4o3tsve"
                                >
                                    <span className="mr-3" data-oid="t3fqelf">
                                        🚀
                                    </span>
                                    Current Project
                                </h3>
                                <div className="space-y-6" data-oid="qqxlvfm">
                                    <div data-oid="0:so9hu">
                                        <h4
                                            className="font-bold text-lg mb-3"
                                            style={{ color: 'var(--accent-cream)' }}
                                            data-oid="_9e1q2q"
                                        >
                                            {projectInfo.name}
                                        </h4>
                                        <p
                                            className="leading-relaxed mb-4 text-sm sm:text-base"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="sh3qtw0"
                                        >
                                            {projectInfo.description}
                                        </p>
                                    </div>

                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                                        data-oid="cq0kvk6"
                                    >
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid=".si4a93"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="4zsz_-b"
                                            >
                                                Status
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--status-active)' }}
                                                data-oid="ku0lk7z"
                                            >
                                                {projectInfo.status}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="c53jac0"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="1e3fy-."
                                            >
                                                Priority
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-red)' }}
                                                data-oid="wl0bsbn"
                                            >
                                                {projectInfo.priority}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="7dafzni"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="0he0ssf"
                                            >
                                                Deadline
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-yellow)' }}
                                                data-oid="no8gx1e"
                                            >
                                                {projectInfo.deadline}
                                            </div>
                                        </div>
                                    </div>

                                    <div data-oid="u:lyd8n">
                                        <div
                                            className="flex justify-between items-center mb-2"
                                            data-oid="6pck.mr"
                                        >
                                            <span
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="a6v-2ow"
                                            >
                                                Progress
                                            </span>
                                            <span
                                                className="font-bold"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="gwxh9f6"
                                            >
                                                {projectInfo.progress}%
                                            </span>
                                        </div>
                                        <div
                                            className="w-full rounded-full h-3"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="m6rn.tm"
                                        >
                                            <div
                                                className="h-3 rounded-full transition-all duration-500 glow-red"
                                                style={{
                                                    width: `${projectInfo.progress}%`,
                                                    background: 'var(--gradient-primary)',
                                                }}
                                                data-oid="d_kepq5"
                                            ></div>
                                        </div>
                                    </div>

                                    <div data-oid="5n2gjys">
                                        <span
                                            className="block mb-3 font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="-mr1vrr"
                                        >
                                            Tech Stack:
                                        </span>
                                        <div className="flex flex-wrap gap-2" data-oid="n49g3rb">
                                            {projectInfo.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--text-primary)',
                                                        border: '1px solid var(--border-secondary)',
                                                    }}
                                                    data-oid="g7of9lb"
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
                                data-oid="r5iihov"
                            >
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4"
                                    data-oid="csrz5e."
                                >
                                    <h3
                                        className="text-xl sm:text-2xl font-bold gradient-text flex items-center"
                                        data-oid="81024jw"
                                    >
                                        <span className="mr-3" data-oid="f8hsj8i">
                                            ⏰
                                        </span>
                                        Time Tracking
                                    </h3>
                                    <button
                                        onClick={() => setIsEditingTime(!isEditingTime)}
                                        className="btn-secondary hover-lift text-sm sm:text-base"
                                        data-oid="jfejgi4"
                                    >
                                        {isEditingTime ? '💾 Save' : '✏️ Edit Times'}
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
                                    data-oid="k9jgns7"
                                >
                                    <div
                                        className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-secondary"
                                        data-oid="5r69ohq"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="5nfy82c"
                                        >
                                            <span
                                                className="text-2xl sm:text-3xl"
                                                data-oid="7yxodjz"
                                            >
                                                🌅
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="-6unzz7"
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
                                                data-oid="us-8ho8"
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold gradient-text-secondary"
                                                data-oid="q5q66:g"
                                            >
                                                {inTime}
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-danger"
                                        data-oid=":gxvads"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="j2as7e9"
                                        >
                                            <span
                                                className="text-2xl sm:text-3xl"
                                                data-oid="hu0pxm9"
                                            >
                                                🌇
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="1mp6bvv"
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
                                                data-oid="x0inyf3"
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold"
                                                style={{ color: 'var(--accent-danger)' }}
                                                data-oid="9qp01ql"
                                            >
                                                {outTime}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className="mt-6 sm:mt-8 glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-warning"
                                    data-oid="whsxq2r"
                                >
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                                        data-oid="mbw-jc:"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="7fvskk4"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="o6k86qs"
                                            >
                                                ⏱️
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="_ev.q-2"
                                            >
                                                Total Work Hours Today
                                            </span>
                                        </div>
                                        <span
                                            className="text-2xl sm:text-3xl font-bold gradient-text-secondary"
                                            data-oid="rd5bkuh"
                                        >
                                            8h 30m
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📋 TASK MANAGEMENT SECTION */}
                            <section data-oid="ft5k26n">
                                <TaskManager data-oid="a.7ue5w" />
                            </section>

                            {/* ⏱️ TIME TRACKER SECTION */}
                            <section data-oid="t8ve7y5">
                                <TimeTracker data-oid="tzthp-m" />
                            </section>
                        </div>

                        {/* SIDEBAR - Performance & Team */}
                        <div className="xl:col-span-1 space-y-6 lg:space-y-8" data-oid="rk0ft.6">
                            {/* 📊 PERFORMANCE METRICS SECTION */}
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-primary"
                                data-oid="1o4g-v5"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="hb:4.ai"
                                >
                                    <span className="mr-3" data-oid="hp2wxj1">
                                        📊
                                    </span>
                                    Performance Metrics
                                </h3>
                                <div className="space-y-4" data-oid="zs051u8">
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="g6lt362"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="c0ftphy"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="4v-visn"
                                            >
                                                ✅
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="y0:1sch"
                                            >
                                                Tasks Completed
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold gradient-text-secondary"
                                            data-oid="p2xlx.."
                                        >
                                            {performanceStats.tasksCompleted}
                                        </span>
                                    </div>
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="0p9uipg"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="203r1t_"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="8beh489"
                                            >
                                                📈
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="6waxdyc"
                                            >
                                                Productivity Score
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-secondary)' }}
                                            data-oid="5mp6plf"
                                        >
                                            {performanceStats.productivityScore}%
                                        </span>
                                    </div>
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="o.i61gn"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="cw8qm2h"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="n7uib:9"
                                            >
                                                💻
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="8s60cmi"
                                            >
                                                Code Commits
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-primary)' }}
                                            data-oid="zxt9c1r"
                                        >
                                            {performanceStats.codeCommits}
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📢 ANNOUNCEMENTS SECTION */}
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-warning"
                                data-oid="pmyteij"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="mll16pe"
                                >
                                    <span className="mr-3" data-oid="nw4._lm">
                                        📢
                                    </span>
                                    Recent Announcements
                                </h3>
                                <div className="space-y-4" data-oid="r6zr:w9">
                                    {announcements.slice(0, 3).map((announcement) => (
                                        <div
                                            key={announcement.id}
                                            className="glass-effect p-4 rounded-xl hover-lift cursor-pointer transition-all duration-300"
                                            onClick={() => handleAnnouncementClick(announcement)}
                                            data-oid="2pps-w0"
                                        >
                                            <div
                                                className="flex items-start space-x-3"
                                                data-oid="y42ak7f"
                                            >
                                                <span
                                                    className="text-lg sm:text-xl"
                                                    data-oid="2lf-636"
                                                >
                                                    {announcement.priority === 'high'
                                                        ? '🔴'
                                                        : announcement.priority === 'medium'
                                                          ? '🟡'
                                                          : '🟢'}
                                                </span>
                                                <div className="flex-1" data-oid="ik1ubjs">
                                                    <h4
                                                        className="font-semibold mb-2 text-sm sm:text-base"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="dsbphhc"
                                                    >
                                                        {announcement.title}
                                                    </h4>
                                                    <p
                                                        className="text-xs sm:text-sm mb-2"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="n.:zq_p"
                                                    >
                                                        {announcement.message.substring(0, 60)}...
                                                    </p>
                                                    <p
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-muted)' }}
                                                        data-oid="n5nou0-"
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
                                data-oid="d8jgtih"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="dd-n373"
                                >
                                    <span className="mr-3" data-oid="i:-jxrb">
                                        👥
                                    </span>
                                    Team Members
                                </h3>
                                <div className="space-y-4" data-oid="ch7:cka">
                                    {teamMembers.slice(0, 4).map((member, index) => (
                                        <div
                                            key={index}
                                            className="glass-effect p-4 rounded-xl hover-lift flex items-center space-x-3 sm:space-x-4"
                                            data-oid="eiz91hc"
                                        >
                                            <div
                                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xs sm:text-sm font-bold status-indicator status-${member.status} glow-primary`}
                                                style={{ background: 'var(--gradient-secondary)' }}
                                                data-oid="97ar4ur"
                                            >
                                                {member.avatar}
                                            </div>
                                            <div className="flex-1" data-oid="tw5-q2a">
                                                <div
                                                    className="font-semibold text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="mtk0abg"
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="text-xs sm:text-sm"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="zga-6x4"
                                                >
                                                    {member.role}
                                                </div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--accent-warning)' }}
                                                    data-oid="o0b8z19"
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
            <footer className="relative z-10 py-8 border-t border-gray-800" data-oid="_w7m-y:">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="9bzsux-">
                    <div className="text-center" data-oid="l76ptpo">
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="amzugr0"
                        >
                            © 2024 Intern Dashboard. Built with ❤️ for productivity.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Announcement Modal */}
            {showAnnouncementModal && selectedAnnouncement && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={closeAnnouncementModal}
                    data-oid="10c-71l"
                >
                    <div
                        className="card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="wh1ca19"
                    >
                        <div className="flex justify-between items-start mb-6" data-oid=":9x28cy">
                            <div data-oid="256:th:">
                                <h2
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="f_fh..2"
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div
                                    className="flex items-center space-x-3 text-sm"
                                    data-oid="5ztu0c1"
                                >
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                        data-oid="2zwimst"
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full"
                                        style={{
                                            background: 'var(--bg-tertiary)',
                                            color: 'var(--text-secondary)',
                                        }}
                                        data-oid="7s2_b_x"
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }} data-oid="0q__1e8">
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="f79_e7r"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6" data-oid="ofc:85.">
                            <div data-oid="c97hf_.">
                                <p
                                    className="text-lg leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="pt1vu5c"
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>

                            <div className="flex justify-center space-x-4" data-oid="jttb:y_">
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="btn-secondary"
                                    data-oid="wgwa6ix"
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
