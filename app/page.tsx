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
                    data-oid="vm0k1l7"
                />

                <MinimalView data-oid="mfn60gm" />
            </>
        );
    }

    return (
        <div className="min-h-screen relative" data-oid="o39-abc">
            {/* View Toggle */}
            <ViewToggle isMinimal={isMinimalView} onToggle={setIsMinimalView} data-oid="oqb3vvv" />

            {/* Demo Data Notice */}
            {isDemoData && (
                <div
                    className="bg-amber-100 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 m-4 rounded"
                    data-oid="sp7j72q"
                >
                    <div className="flex" data-oid="io5qte:">
                        <div className="flex-shrink-0" data-oid="v21hqo5">
                            <span className="text-amber-500" data-oid="85m1n.l">
                                ⚠️
                            </span>
                        </div>
                        <div className="ml-3" data-oid="x_tiyi5">
                            <p
                                className="text-sm text-amber-700 dark:text-amber-300"
                                data-oid="6kvjlbx"
                            >
                                {demoDataNotice}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 🌊 Animated Background with Gradient Orbs */}
            <div className="animated-background" data-oid="ilmezsr">
                <div className="orb orb-1" data-oid="2uwhw7r"></div>
                <div className="orb orb-2" data-oid="21:u.9_"></div>
                <div className="orb orb-3" data-oid="ge0o-la"></div>
            </div>

            {/* ✨ HEADER SECTION */}
            <header
                className="glass-effect border-b-0 rounded-none backdrop-blur-xl sticky top-0 z-50"
                data-oid="rbyvmvf"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="l5._awx">
                    <div
                        className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 py-4 sm:py-0 gap-4 sm:gap-0"
                        data-oid="mmuh94_"
                    >
                        {/* Logo and Title */}
                        <div
                            className="flex items-center space-x-3 sm:space-x-4"
                            data-oid="j13rr13"
                        >
                            <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary hover-lift"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="f.rq0rm"
                            >
                                <span
                                    className="text-white font-bold text-base sm:text-lg"
                                    data-oid="4b.s-hz"
                                >
                                    🚀
                                </span>
                            </div>
                            <div data-oid="tpxtt7u">
                                <h1
                                    className="text-xl sm:text-2xl font-bold gradient-text"
                                    data-oid="::12b3f"
                                >
                                    Intern Dashboard
                                </h1>
                                <p
                                    className="text-xs sm:text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="e3f:gdt"
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>

                        {/* Header Right - Time and Profile */}
                        <div
                            className="flex items-center space-x-4 sm:space-x-8"
                            data-oid="2s:5ws4"
                        >
                            {/* Live Clock */}
                            <div
                                className="text-center sm:text-right glass-effect p-3 sm:p-4 rounded-xl hover-lift"
                                data-oid="85::83p"
                            >
                                <div
                                    className="text-lg sm:text-2xl font-bold gradient-text-secondary glow-pulse"
                                    data-oid="b.ckaq_"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs hidden sm:block"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="8q8g7tn"
                                >
                                    ⏰ Current Time
                                </div>
                            </div>

                            {/* Profile */}
                            <div
                                className="flex items-center space-x-3 sm:space-x-4 glass-effect p-2 sm:p-3 rounded-xl hover-lift"
                                data-oid=":ins:8j"
                            >
                                <div className="text-right hidden sm:block" data-oid="sichall">
                                    <div
                                        className="text-sm font-semibold"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="injh2dv"
                                    >
                                        {internProfile.name}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--accent-warning)' }}
                                        data-oid="f5uh1.m"
                                    >
                                        {internProfile.role}
                                    </div>
                                </div>
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary status-indicator status-active"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="x6:te1m"
                                >
                                    <span
                                        className="text-white font-bold text-base sm:text-lg"
                                        data-oid=":354ta5"
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
            <section className="relative z-10 py-8 sm:py-12" data-oid="51g7lvr">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="t2pmie4">
                    {/* Welcome Banner */}
                    <div
                        className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-10 hover-lift glow-primary mb-8"
                        data-oid="jh29.fi"
                    >
                        <div
                            className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8"
                            data-oid="29.:nvp"
                        >
                            <div
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center glow-primary float-animation mx-auto lg:mx-0"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="n7_q:q_"
                            >
                                <span
                                    className="text-white font-bold text-2xl sm:text-3xl"
                                    data-oid="l_xclct"
                                >
                                    {internProfile.avatar}
                                </span>
                            </div>
                            <div className="flex-1 text-center lg:text-left" data-oid="v20n-40">
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3"
                                    data-oid="6uifhev"
                                >
                                    <h2
                                        className="text-2xl sm:text-3xl font-bold gradient-text mb-2 sm:mb-0"
                                        data-oid="lduuame"
                                    >
                                        Welcome back, {internProfile.name}!
                                    </h2>
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusInfo(currentStatus).color} text-white glow-secondary inline-block`}
                                        data-oid="wcjsqvr"
                                    >
                                        {getStatusInfo(currentStatus).icon}{' '}
                                        {getStatusInfo(currentStatus).label}
                                    </span>
                                </div>
                                <p
                                    className="font-semibold text-lg sm:text-xl mb-4 gradient-text-secondary"
                                    data-oid="imp_oxa"
                                >
                                    {internProfile.role}
                                </p>
                                <div
                                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"
                                    data-oid="ikvr79t"
                                >
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="_sezyym"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold gradient-text-secondary"
                                            data-oid="bc36uw:"
                                        >
                                            {performanceStats.tasksCompleted}
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="lkucyjx"
                                        >
                                            Tasks Done
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="49-0q87"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-success)' }}
                                            data-oid="tbq.rkb"
                                        >
                                            {performanceStats.productivityScore}%
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="zh3l.o-"
                                        >
                                            Productivity
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="07a3a0e"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-warning)' }}
                                            data-oid="_4xun5p"
                                        >
                                            {performanceStats.codeCommits}
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="f699.w3"
                                        >
                                            Commits
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="_402rz6"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-purple)' }}
                                            data-oid="9s9z_60"
                                        >
                                            8h 30m
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="g7n6z27"
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
            <main className="relative z-10 pb-12" data-oid="559-gqx">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="asv:sv_">
                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8"
                        data-oid="twg:ow2"
                    >
                        {/* LEFT COLUMN - Profile & Project Info */}
                        <div className="xl:col-span-2 space-y-6 lg:space-y-8" data-oid="5pr:.51">
                            {/* 👤 PROFILE DETAILS SECTION */}
                            <section
                                className="glass-effect rounded-3xl p-6 sm:p-8 hover-lift glow-primary"
                                data-oid="yrsjcfp"
                            >
                                <h3
                                    className="text-xl sm:text-2xl font-bold gradient-text mb-6 flex items-center"
                                    data-oid="_ldrjn7"
                                >
                                    <span className="mr-3" data-oid="cw12qg7">
                                        👤
                                    </span>
                                    Profile Details
                                </h3>
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                                    data-oid="2t26b-u"
                                >
                                    <div className="space-y-4" data-oid="1bl_7rb">
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="uzwn-.w"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="fqqkem2"
                                            >
                                                📧
                                            </span>
                                            <div data-oid="1xm9_qb">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="cjgv4xs"
                                                >
                                                    Email
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="ct4qzg5"
                                                >
                                                    {internProfile.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="43elpr_"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid=":dg6.or"
                                            >
                                                🎓
                                            </span>
                                            <div data-oid="qz-6w9m">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="ov5rqf5"
                                                >
                                                    College
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="84_.ux5"
                                                >
                                                    {internProfile.college}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="fqjs-fa"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="9kl7c89"
                                            >
                                                📚
                                            </span>
                                            <div data-oid="z1ym6tp">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="vu6rgv4"
                                                >
                                                    Year
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="4h2n7ug"
                                                >
                                                    {internProfile.year}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4" data-oid="s.-h185">
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="9aslstx"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="dr2gb_1"
                                            >
                                                🏢
                                            </span>
                                            <div data-oid="1orj0t.">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="k.983:l"
                                                >
                                                    Department
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="ysgvuia"
                                                >
                                                    {internProfile.department}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="3.02:ci"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="u4rf8gu"
                                            >
                                                👤
                                            </span>
                                            <div data-oid="tztnstt">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid=".w:vu1."
                                                >
                                                    Manager
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="qc0my2m"
                                                >
                                                    {internProfile.manager}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="jur5ma0"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="s5dobp2"
                                            >
                                                📅
                                            </span>
                                            <div data-oid="-7wgd37">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid=":4fjp35"
                                                >
                                                    Start Date
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="laj4_qh"
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
                                data-oid="i8ysf5i"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 flex items-center gradient-text"
                                    data-oid="-vcun4z"
                                >
                                    <span className="mr-3" data-oid="gqej-dz">
                                        🚀
                                    </span>
                                    Current Project
                                </h3>
                                <div className="space-y-6" data-oid="zl7:ks8">
                                    <div data-oid="q-slnrl">
                                        <h4
                                            className="font-bold text-lg mb-3"
                                            style={{ color: 'var(--accent-cream)' }}
                                            data-oid="kdjwktg"
                                        >
                                            {projectInfo.name}
                                        </h4>
                                        <p
                                            className="leading-relaxed mb-4 text-sm sm:text-base"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="f5u0oip"
                                        >
                                            {projectInfo.description}
                                        </p>
                                    </div>

                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                                        data-oid="e:7cwio"
                                    >
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="kkiutt8"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="oixcn0y"
                                            >
                                                Status
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--status-active)' }}
                                                data-oid="ehly3tv"
                                            >
                                                {projectInfo.status}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="l.smw-n"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="lki6cis"
                                            >
                                                Priority
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-red)' }}
                                                data-oid="5i9ax3j"
                                            >
                                                {projectInfo.priority}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="230civ6"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="lz3c74p"
                                            >
                                                Deadline
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-yellow)' }}
                                                data-oid="-xx6r62"
                                            >
                                                {projectInfo.deadline}
                                            </div>
                                        </div>
                                    </div>

                                    <div data-oid="hub_n:j">
                                        <div
                                            className="flex justify-between items-center mb-2"
                                            data-oid="m7sya3u"
                                        >
                                            <span
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="xxy7hfh"
                                            >
                                                Progress
                                            </span>
                                            <span
                                                className="font-bold"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="_-rdwzh"
                                            >
                                                {projectInfo.progress}%
                                            </span>
                                        </div>
                                        <div
                                            className="w-full rounded-full h-3"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="x70083j"
                                        >
                                            <div
                                                className="h-3 rounded-full transition-all duration-500 glow-red"
                                                style={{
                                                    width: `${projectInfo.progress}%`,
                                                    background: 'var(--gradient-primary)',
                                                }}
                                                data-oid="x1jrbsu"
                                            ></div>
                                        </div>
                                    </div>

                                    <div data-oid="up5rw7o">
                                        <span
                                            className="block mb-3 font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="5ztbryr"
                                        >
                                            Tech Stack:
                                        </span>
                                        <div className="flex flex-wrap gap-2" data-oid="g_i_c3s">
                                            {projectInfo.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--text-primary)',
                                                        border: '1px solid var(--border-secondary)',
                                                    }}
                                                    data-oid="30_j86:"
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
                                data-oid="scd-8eo"
                            >
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4"
                                    data-oid="844xb_k"
                                >
                                    <h3
                                        className="text-xl sm:text-2xl font-bold gradient-text flex items-center"
                                        data-oid="xd8c._2"
                                    >
                                        <span className="mr-3" data-oid="xmpn:k.">
                                            ⏰
                                        </span>
                                        Time Tracking
                                    </h3>
                                    <button
                                        onClick={() => setIsEditingTime(!isEditingTime)}
                                        className="btn-secondary hover-lift text-sm sm:text-base"
                                        data-oid="6o8dv9h"
                                    >
                                        {isEditingTime ? '💾 Save' : '✏️ Edit Times'}
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
                                    data-oid="1j-gl8l"
                                >
                                    <div
                                        className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-secondary"
                                        data-oid="07_kod3"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="ihj6y84"
                                        >
                                            <span
                                                className="text-2xl sm:text-3xl"
                                                data-oid=".4242w8"
                                            >
                                                🌅
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="1hhmq-p"
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
                                                data-oid="j_ry46g"
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold gradient-text-secondary"
                                                data-oid="q8z7zgd"
                                            >
                                                {inTime}
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-danger"
                                        data-oid="3rv3tae"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="9o9:3b."
                                        >
                                            <span
                                                className="text-2xl sm:text-3xl"
                                                data-oid=".3:mqk."
                                            >
                                                🌇
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="bf7iir8"
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
                                                data-oid="ttwzw3d"
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold"
                                                style={{ color: 'var(--accent-danger)' }}
                                                data-oid="8dv_z4i"
                                            >
                                                {outTime}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className="mt-6 sm:mt-8 glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-warning"
                                    data-oid="gj.:ibv"
                                >
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                                        data-oid="qneb0ag"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="6_kjjq4"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="i6.25fk"
                                            >
                                                ⏱️
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="y4qzl.r"
                                            >
                                                Total Work Hours Today
                                            </span>
                                        </div>
                                        <span
                                            className="text-2xl sm:text-3xl font-bold gradient-text-secondary"
                                            data-oid="jvy7bn7"
                                        >
                                            8h 30m
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📋 TASK MANAGEMENT SECTION */}
                            <section data-oid="5ep2_z9">
                                <TaskManager data-oid="m7eu2-z" />
                            </section>

                            {/* ⏱️ TIME TRACKER SECTION */}
                            <section data-oid="g0zwvpg">
                                <TimeTracker data-oid="1j5ptec" />
                            </section>
                        </div>

                        {/* SIDEBAR - Performance & Team */}
                        <div className="xl:col-span-1 space-y-6 lg:space-y-8" data-oid="uevt8ld">
                            {/* 📊 PERFORMANCE METRICS SECTION */}
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-primary"
                                data-oid="gpu6i69"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="y2x8zu:"
                                >
                                    <span className="mr-3" data-oid="oe0zm8r">
                                        📊
                                    </span>
                                    Performance Metrics
                                </h3>
                                <div className="space-y-4" data-oid="4qcp8h4">
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="o:_yp9p"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="a03fxd3"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="6uxo5of"
                                            >
                                                ✅
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="uk-wdsw"
                                            >
                                                Tasks Completed
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold gradient-text-secondary"
                                            data-oid="hz86n6q"
                                        >
                                            {performanceStats.tasksCompleted}
                                        </span>
                                    </div>
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="s5aet2f"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid=":bihgu_"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="p3_h_vv"
                                            >
                                                📈
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="jb.1l9b"
                                            >
                                                Productivity Score
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-secondary)' }}
                                            data-oid="pyb3d5j"
                                        >
                                            {performanceStats.productivityScore}%
                                        </span>
                                    </div>
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="hatqn66"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="ardaj9z"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="bt.7:.h"
                                            >
                                                💻
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid=":o8m8cg"
                                            >
                                                Code Commits
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-primary)' }}
                                            data-oid="lk0-i63"
                                        >
                                            {performanceStats.codeCommits}
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📢 ANNOUNCEMENTS SECTION */}
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-warning"
                                data-oid="_0e-n4b"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="jbvmxtj"
                                >
                                    <span className="mr-3" data-oid="jhrrjqb">
                                        📢
                                    </span>
                                    Recent Announcements
                                </h3>
                                <div className="space-y-4" data-oid="7v6v-i5">
                                    {announcements.slice(0, 3).map((announcement) => (
                                        <div
                                            key={announcement.id}
                                            className="glass-effect p-4 rounded-xl hover-lift cursor-pointer transition-all duration-300"
                                            onClick={() => handleAnnouncementClick(announcement)}
                                            data-oid="fv77r0z"
                                        >
                                            <div
                                                className="flex items-start space-x-3"
                                                data-oid="8a881tz"
                                            >
                                                <span
                                                    className="text-lg sm:text-xl"
                                                    data-oid="74-xnw_"
                                                >
                                                    {announcement.priority === 'high'
                                                        ? '🔴'
                                                        : announcement.priority === 'medium'
                                                          ? '🟡'
                                                          : '🟢'}
                                                </span>
                                                <div className="flex-1" data-oid="1pl262l">
                                                    <h4
                                                        className="font-semibold mb-2 text-sm sm:text-base"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="npv7c5b"
                                                    >
                                                        {announcement.title}
                                                    </h4>
                                                    <p
                                                        className="text-xs sm:text-sm mb-2"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="m4-t-md"
                                                    >
                                                        {announcement.message.substring(0, 60)}...
                                                    </p>
                                                    <p
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-muted)' }}
                                                        data-oid="pssn6s."
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
                                data-oid="uy7h_gz"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="5g1wt0d"
                                >
                                    <span className="mr-3" data-oid="vlx.usn">
                                        👥
                                    </span>
                                    Team Members
                                </h3>
                                <div className="space-y-4" data-oid="ux:uku-">
                                    {teamMembers.slice(0, 4).map((member, index) => (
                                        <div
                                            key={index}
                                            className="glass-effect p-4 rounded-xl hover-lift flex items-center space-x-3 sm:space-x-4"
                                            data-oid="elqrjqr"
                                        >
                                            <div
                                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xs sm:text-sm font-bold status-indicator status-${member.status} glow-primary`}
                                                style={{ background: 'var(--gradient-secondary)' }}
                                                data-oid="_et1rtl"
                                            >
                                                {member.avatar}
                                            </div>
                                            <div className="flex-1" data-oid="b:5ktco">
                                                <div
                                                    className="font-semibold text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="ijj6_.o"
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="text-xs sm:text-sm"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="2p.7kpq"
                                                >
                                                    {member.role}
                                                </div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--accent-warning)' }}
                                                    data-oid="4kvgbgu"
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
            <footer className="relative z-10 py-8 border-t border-gray-800" data-oid="hyvasl-">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="1pnfpp_">
                    <div className="text-center" data-oid="ln.jipn">
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="czm.fa3"
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
                    data-oid=":plsuu2"
                >
                    <div
                        className="card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="-_g9rst"
                    >
                        <div className="flex justify-between items-start mb-6" data-oid="yef6krk">
                            <div data-oid="gnw:_14">
                                <h2
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="mqj9hsy"
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div
                                    className="flex items-center space-x-3 text-sm"
                                    data-oid="pstrpaj"
                                >
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                        data-oid="k8p98-:"
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full"
                                        style={{
                                            background: 'var(--bg-tertiary)',
                                            color: 'var(--text-secondary)',
                                        }}
                                        data-oid="8.1j5xi"
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }} data-oid="4:m0lwn">
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="97g-p1g"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6" data-oid="t:xeq63">
                            <div data-oid="1af8yk2">
                                <p
                                    className="text-lg leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="gl15yyv"
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>

                            <div className="flex justify-center space-x-4" data-oid="bmarw-c">
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="btn-secondary"
                                    data-oid="fivikcd"
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
