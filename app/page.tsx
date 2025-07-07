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
                    data-oid="ywz-_:d"
                />

                <MinimalView data-oid="0z5-6eo" />
            </>
        );
    }

    return (
        <div className="min-h-screen relative" data-oid="2r7xy.m">
            {/* View Toggle */}
            <ViewToggle isMinimal={isMinimalView} onToggle={setIsMinimalView} data-oid="-fmkbzi" />

            {/* Demo Data Notice */}
            {isDemoData && (
                <div
                    className="bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-400 p-4 m-4 rounded-lg shadow-lg relative z-40"
                    data-oid="kh8x.hy"
                >
                    <div className="flex items-center" data-oid=".8ux96g">
                        <div className="flex-shrink-0" data-oid="x7nu300">
                            <span className="text-amber-600 text-xl" data-oid="h:6bwl_">
                                ⚠️
                            </span>
                        </div>
                        <div className="ml-3" data-oid="l92yk.6">
                            <p
                                className="text-sm font-semibold text-amber-800 dark:text-amber-200"
                                data-oid="lxsfr.c"
                            >
                                {demoDataNotice}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 🌊 Animated Background with Gradient Orbs */}
            <div className="animated-background" data-oid="nrd75kt">
                <div className="orb orb-1" data-oid="4sg5i5q"></div>
                <div className="orb orb-2" data-oid="67lommi"></div>
                <div className="orb orb-3" data-oid="6-279ea"></div>
            </div>

            {/* ✨ HEADER SECTION */}
            <header
                className="glass-effect border-b-0 rounded-none backdrop-blur-xl sticky top-0 z-50"
                data-oid="v11fqwi"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="nuqmsnz">
                    <div
                        className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 py-4 sm:py-0 gap-4 sm:gap-0"
                        data-oid="z3o6t77"
                    >
                        {/* Logo and Title */}
                        <div
                            className="flex items-center space-x-3 sm:space-x-4"
                            data-oid="8ey1d8p"
                        >
                            <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary hover-lift"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="fppo0_y"
                            >
                                <span
                                    className="text-white font-bold text-base sm:text-lg"
                                    data-oid="lt_bb7_"
                                >
                                    🚀
                                </span>
                            </div>
                            <div data-oid="htzwm_u">
                                <h1
                                    className="text-xl sm:text-2xl font-bold gradient-text"
                                    data-oid="wqdhf3n"
                                >
                                    Priyansh Dashboard
                                </h1>
                                <p
                                    className="text-xs sm:text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="-r_m:gg"
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>

                        {/* Header Right - Time and Profile */}
                        <div
                            className="flex items-center space-x-4 sm:space-x-8"
                            data-oid="klnbnra"
                        >
                            {/* Live Clock */}
                            <div
                                className="text-center sm:text-right glass-effect p-3 sm:p-4 rounded-xl hover-lift"
                                data-oid="z3033-k"
                            >
                                <div
                                    className="text-lg sm:text-2xl font-bold gradient-text-secondary glow-pulse"
                                    data-oid="9qgcfwa"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs hidden sm:block"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid=".ou3uy9"
                                >
                                    ⏰ Current Time
                                </div>
                            </div>

                            {/* Profile */}
                            <div
                                className="flex items-center space-x-3 sm:space-x-4 glass-effect p-2 sm:p-3 rounded-xl hover-lift"
                                data-oid="sycds4n"
                            >
                                <div className="text-right hidden sm:block" data-oid="u645o26">
                                    <div
                                        className="text-sm font-semibold"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="wxnhq.5"
                                    >
                                        {internProfile.name}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--accent-warning)' }}
                                        data-oid="8pnhswh"
                                    >
                                        {internProfile.role}
                                    </div>
                                </div>
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center glow-primary status-indicator status-active"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="hx-_xh7"
                                >
                                    <span
                                        className="text-white font-bold text-base sm:text-lg"
                                        data-oid="zbhz89s"
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
            <section className="relative z-10 py-8 sm:py-12" data-oid="539dnk8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=":cfmcjk">
                    {/* Welcome Banner */}
                    <div
                        className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-10 hover-lift glow-primary mb-8"
                        data-oid="2s8q9is"
                    >
                        <div
                            className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8"
                            data-oid="tgghc0r"
                        >
                            <div
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center glow-primary float-animation mx-auto lg:mx-0"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="hmoi9b2"
                            >
                                <span
                                    className="text-white font-bold text-2xl sm:text-3xl"
                                    data-oid="2r_gq3j"
                                >
                                    {internProfile.avatar}
                                </span>
                            </div>
                            <div className="flex-1 text-center lg:text-left" data-oid="52:2g6j">
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3"
                                    data-oid="q8zqkl9"
                                >
                                    <h2
                                        className="text-2xl sm:text-3xl font-bold gradient-text mb-2 sm:mb-0"
                                        data-oid="3x9m4kb"
                                    >
                                        Welcome back, {internProfile.name}!
                                    </h2>
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusInfo(currentStatus).color} text-white glow-secondary inline-block`}
                                        data-oid="srfmprf"
                                    >
                                        {getStatusInfo(currentStatus).icon}{' '}
                                        {getStatusInfo(currentStatus).label}
                                    </span>
                                </div>
                                <p
                                    className="font-semibold text-lg sm:text-xl mb-4 gradient-text-secondary"
                                    data-oid="v-vsvg-"
                                >
                                    {internProfile.role}
                                </p>
                                <div
                                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"
                                    data-oid="p2hlpuo"
                                >
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="65h6yjt"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold gradient-text-secondary"
                                            data-oid="xe.s0:m"
                                        >
                                            {performanceStats.tasksCompleted}
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="e9pbjbv"
                                        >
                                            Tasks Done
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="rl70tzh"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-success)' }}
                                            data-oid="593400v"
                                        >
                                            {performanceStats.productivityScore}%
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="8iccab_"
                                        >
                                            Productivity
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="15e7w45"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-warning)' }}
                                            data-oid="hzemwkr"
                                        >
                                            {performanceStats.codeCommits}
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="zsatary"
                                        >
                                            Commits
                                        </div>
                                    </div>
                                    <div
                                        className="glass-effect p-3 rounded-xl text-center"
                                        data-oid="q63g02w"
                                    >
                                        <div
                                            className="text-lg sm:text-xl font-bold"
                                            style={{ color: 'var(--accent-purple)' }}
                                            data-oid="f5759b8"
                                        >
                                            8h 30m
                                        </div>
                                        <div
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="4e60btu"
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
            <main className="relative z-10 pb-12" data-oid="bj8d_5z">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".glo3c0">
                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8"
                        data-oid="s726__b"
                    >
                        {/* LEFT COLUMN - Profile & Project Info */}
                        <div className="xl:col-span-2 space-y-6 lg:space-y-8" data-oid="joncmh4">
                            {/* 👤 PROFILE DETAILS SECTION */}
                            <section
                                className="glass-effect rounded-3xl p-6 sm:p-8 hover-lift glow-primary"
                                data-oid="28cq53w"
                            >
                                <h3
                                    className="text-xl sm:text-2xl font-bold gradient-text mb-6 flex items-center"
                                    data-oid="w5f7tni"
                                >
                                    <span className="mr-3" data-oid="9dxypej">
                                        👤
                                    </span>
                                    Profile Details
                                </h3>
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                                    data-oid="vqk-2tu"
                                >
                                    <div className="space-y-4" data-oid=".zwgv0q">
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="kmn0kjz"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid=":m9wx9n"
                                            >
                                                📧
                                            </span>
                                            <div data-oid="bne:tt3">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="yehrz9d"
                                                >
                                                    Email
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="jvhl:2s"
                                                >
                                                    {internProfile.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid=":s2yfyi"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="5s4rq55"
                                            >
                                                🎓
                                            </span>
                                            <div data-oid="udlvx13">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="bfg-12i"
                                                >
                                                    College
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="pljwcei"
                                                >
                                                    {internProfile.college}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="i8nujc:"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="cdy1spp"
                                            >
                                                📚
                                            </span>
                                            <div data-oid="36ha91o">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="1elr475"
                                                >
                                                    Year
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="emaqkas"
                                                >
                                                    {internProfile.year}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4" data-oid="3pjht_-">
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid=".9llx2v"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="709.qkc"
                                            >
                                                🏢
                                            </span>
                                            <div data-oid="xh_3ovm">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="r3-nzgk"
                                                >
                                                    Department
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="nb0kxsh"
                                                >
                                                    {internProfile.department}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid="t60-35i"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="36q8ont"
                                            >
                                                👤
                                            </span>
                                            <div data-oid="2ocr4e6">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="ktzxkfs"
                                                >
                                                    Manager
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="d2vt_7b"
                                                >
                                                    {internProfile.manager}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                            data-oid=".x8gr0h"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="c3y.vbp"
                                            >
                                                📅
                                            </span>
                                            <div data-oid="6w2bd7m">
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="q4z4_v4"
                                                >
                                                    Start Date
                                                </div>
                                                <div
                                                    className="font-medium text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="y94y4j4"
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
                                data-oid="tvee8pu"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 flex items-center gradient-text"
                                    data-oid="c2:uqdo"
                                >
                                    <span className="mr-3" data-oid="v_41398">
                                        🚀
                                    </span>
                                    Current Project
                                </h3>
                                <div className="space-y-6" data-oid="xmr0:at">
                                    <div data-oid="bsy24_i">
                                        <h4
                                            className="font-bold text-lg mb-3"
                                            style={{ color: 'var(--accent-cream)' }}
                                            data-oid="kjh19l8"
                                        >
                                            {projectInfo.name}
                                        </h4>
                                        <p
                                            className="leading-relaxed mb-4 text-sm sm:text-base"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="v8t1.di"
                                        >
                                            {projectInfo.description}
                                        </p>
                                    </div>

                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                                        data-oid="h0-qq7k"
                                    >
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="c7loe3a"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="fwll3-4"
                                            >
                                                Status
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--status-active)' }}
                                                data-oid="foielk2"
                                            >
                                                {projectInfo.status}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="lnjg-w5"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="5t42h47"
                                            >
                                                Priority
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-red)' }}
                                                data-oid="quy:zll"
                                            >
                                                {projectInfo.priority}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="lwch29s"
                                        >
                                            <div
                                                className="text-xs mb-1"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="k3:117w"
                                            >
                                                Deadline
                                            </div>
                                            <div
                                                className="font-medium"
                                                style={{ color: 'var(--accent-yellow)' }}
                                                data-oid="7hht7u_"
                                            >
                                                {projectInfo.deadline}
                                            </div>
                                        </div>
                                    </div>

                                    <div data-oid="cl4vx:w">
                                        <div
                                            className="flex justify-between items-center mb-2"
                                            data-oid="ni_9p:g"
                                        >
                                            <span
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="0pdq27i"
                                            >
                                                Progress
                                            </span>
                                            <span
                                                className="font-bold"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="kz06nix"
                                            >
                                                {projectInfo.progress}%
                                            </span>
                                        </div>
                                        <div
                                            className="w-full rounded-full h-3"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="1t733u8"
                                        >
                                            <div
                                                className="h-3 rounded-full transition-all duration-500 glow-red"
                                                style={{
                                                    width: `${projectInfo.progress}%`,
                                                    background: 'var(--gradient-primary)',
                                                }}
                                                data-oid="0l:q_as"
                                            ></div>
                                        </div>
                                    </div>

                                    <div data-oid="e:7u6th">
                                        <span
                                            className="block mb-3 font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="rlbff00"
                                        >
                                            Tech Stack:
                                        </span>
                                        <div className="flex flex-wrap gap-2" data-oid="4gzg2fo">
                                            {projectInfo.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--text-primary)',
                                                        border: '1px solid var(--border-secondary)',
                                                    }}
                                                    data-oid="rx7dk_h"
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
                                data-oid="::iu9.q"
                            >
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4"
                                    data-oid="n:.2.p2"
                                >
                                    <h3
                                        className="text-xl sm:text-2xl font-bold gradient-text flex items-center"
                                        data-oid="5:n.m._"
                                    >
                                        <span className="mr-3" data-oid="fw9-.js">
                                            ⏰
                                        </span>
                                        Time Tracking
                                    </h3>
                                    <button
                                        onClick={() => setIsEditingTime(!isEditingTime)}
                                        className="btn-secondary hover-lift text-sm sm:text-base"
                                        data-oid="zcgl-mb"
                                    >
                                        {isEditingTime ? '💾 Save' : '✏️ Edit Times'}
                                    </button>
                                </div>

                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
                                    data-oid="dp547k-"
                                >
                                    <div
                                        className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-secondary"
                                        data-oid="6g76uw5"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="l03g.5g"
                                        >
                                            <span
                                                className="text-2xl sm:text-3xl"
                                                data-oid="ws6o5rn"
                                            >
                                                🌅
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="syegpmu"
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
                                                data-oid="fgrbea."
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold gradient-text-secondary"
                                                data-oid="tv7r-wo"
                                            >
                                                {inTime}
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-danger"
                                        data-oid="wf65522"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-4"
                                            data-oid="0f4a2ne"
                                        >
                                            <span
                                                className="text-2xl sm:text-3xl"
                                                data-oid="i8ilss1"
                                            >
                                                🌇
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="hudflv9"
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
                                                data-oid="c3qnan0"
                                            />
                                        ) : (
                                            <div
                                                className="text-2xl sm:text-3xl font-bold"
                                                style={{ color: 'var(--accent-danger)' }}
                                                data-oid="gjnhps5"
                                            >
                                                {outTime}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className="mt-6 sm:mt-8 glass-effect p-4 sm:p-6 rounded-2xl hover-lift glow-warning"
                                    data-oid="3d1iv6u"
                                >
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                                        data-oid="ze3d9cm"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="08of0a."
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="g7_sgf7"
                                            >
                                                ⏱️
                                            </span>
                                            <span
                                                className="font-semibold text-base sm:text-lg"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="g.q5gky"
                                            >
                                                Total Work Hours Today
                                            </span>
                                        </div>
                                        <span
                                            className="text-2xl sm:text-3xl font-bold gradient-text-secondary"
                                            data-oid="luy3:8w"
                                        >
                                            8h 30m
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📋 TASK MANAGEMENT SECTION */}
                            <section data-oid="h74d.tj">
                                <TaskManager data-oid="j3ig4xn" />
                            </section>

                            {/* ⏱️ TIME TRACKER SECTION */}
                            <section data-oid="n9oq-cs">
                                <TimeTracker data-oid="tjlbxxr" />
                            </section>
                        </div>

                        {/* SIDEBAR - Performance & Team */}
                        <div className="xl:col-span-1 space-y-6 lg:space-y-8" data-oid="8_pg-jr">
                            {/* 📊 PERFORMANCE METRICS SECTION */}
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-primary"
                                data-oid="sybw0g9"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="-r2jjud"
                                >
                                    <span className="mr-3" data-oid="l-d2wni">
                                        📊
                                    </span>
                                    Performance Metrics
                                </h3>
                                <div className="space-y-4" data-oid="5txayrd">
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="u0-3ov2"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid=".dxj1.i"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid=":du_qij"
                                            >
                                                ✅
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="qtb8uzd"
                                            >
                                                Tasks Completed
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold gradient-text-secondary"
                                            data-oid="cuuc:qv"
                                        >
                                            {performanceStats.tasksCompleted}
                                        </span>
                                    </div>
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="rgkuk.o"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="xki3kmf"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="jrc8dut"
                                            >
                                                📈
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="nf662jl"
                                            >
                                                Productivity Score
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-secondary)' }}
                                            data-oid="8oo4tti"
                                        >
                                            {performanceStats.productivityScore}%
                                        </span>
                                    </div>
                                    <div
                                        className="glass-effect p-4 rounded-xl hover-lift"
                                        data-oid="k7w3ouq"
                                    >
                                        <div
                                            className="flex items-center space-x-3 mb-2"
                                            data-oid="04r_wn_"
                                        >
                                            <span
                                                className="text-xl sm:text-2xl"
                                                data-oid="69bsld1"
                                            >
                                                💻
                                            </span>
                                            <span
                                                className="font-medium text-sm sm:text-base"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid=":c:36ow"
                                            >
                                                Code Commits
                                            </span>
                                        </div>
                                        <span
                                            className="text-xl sm:text-2xl font-bold"
                                            style={{ color: 'var(--accent-primary)' }}
                                            data-oid="s9r4ee3"
                                        >
                                            {performanceStats.codeCommits}
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* 📢 ANNOUNCEMENTS SECTION */}
                            <section
                                className="glass-effect p-6 rounded-2xl hover-lift glow-warning"
                                data-oid="3fvi:nl"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="o-zllgt"
                                >
                                    <span className="mr-3" data-oid="vha4uu3">
                                        📢
                                    </span>
                                    Recent Announcements
                                </h3>
                                <div className="space-y-4" data-oid="lf3e.8j">
                                    {announcements.slice(0, 3).map((announcement) => (
                                        <div
                                            key={announcement.id}
                                            className="glass-effect p-4 rounded-xl hover-lift cursor-pointer transition-all duration-300"
                                            onClick={() => handleAnnouncementClick(announcement)}
                                            data-oid="32g4zeq"
                                        >
                                            <div
                                                className="flex items-start space-x-3"
                                                data-oid="rvqzws5"
                                            >
                                                <span
                                                    className="text-lg sm:text-xl"
                                                    data-oid="qt4fu68"
                                                >
                                                    {announcement.priority === 'high'
                                                        ? '🔴'
                                                        : announcement.priority === 'medium'
                                                          ? '🟡'
                                                          : '🟢'}
                                                </span>
                                                <div className="flex-1" data-oid="tihe0d7">
                                                    <h4
                                                        className="font-semibold mb-2 text-sm sm:text-base"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="ge2m24c"
                                                    >
                                                        {announcement.title}
                                                    </h4>
                                                    <p
                                                        className="text-xs sm:text-sm mb-2"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="nm52jfy"
                                                    >
                                                        {announcement.message.substring(0, 60)}...
                                                    </p>
                                                    <p
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-muted)' }}
                                                        data-oid="0k65:.s"
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
                                data-oid="gu76a::"
                            >
                                <h3
                                    className="text-xl font-bold mb-6 gradient-text flex items-center"
                                    data-oid="dwrkze8"
                                >
                                    <span className="mr-3" data-oid="k--xg94">
                                        👥
                                    </span>
                                    Team Members
                                </h3>
                                <div className="space-y-4" data-oid="93xeonc">
                                    {teamMembers.slice(0, 4).map((member, index) => (
                                        <div
                                            key={index}
                                            className="glass-effect p-4 rounded-xl hover-lift flex items-center space-x-3 sm:space-x-4"
                                            data-oid="nx7cxdq"
                                        >
                                            <div
                                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xs sm:text-sm font-bold status-indicator status-${member.status} glow-primary`}
                                                style={{ background: 'var(--gradient-secondary)' }}
                                                data-oid="cb:.m17"
                                            >
                                                {member.avatar}
                                            </div>
                                            <div className="flex-1" data-oid="ci2:3er">
                                                <div
                                                    className="font-semibold text-sm sm:text-base"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="ofc_1bw"
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="text-xs sm:text-sm"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="2y1b89."
                                                >
                                                    {member.role}
                                                </div>
                                                <div
                                                    className="text-xs"
                                                    style={{ color: 'var(--accent-warning)' }}
                                                    data-oid="g:66mgo"
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
            <footer className="relative z-10 py-8 border-t border-gray-800" data-oid="vue86aa">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="gepdwea">
                    <div className="text-center" data-oid="qjfc-1p">
                        <p
                            className="text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                            data-oid="fb1.:j:"
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
                    data-oid="qpmrf6."
                >
                    <div
                        className="card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="vbaomfs"
                    >
                        <div className="flex justify-between items-start mb-6" data-oid="4--lx9h">
                            <div data-oid="6nm.::a">
                                <h2
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="axdz8li"
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div
                                    className="flex items-center space-x-3 text-sm"
                                    data-oid="4bu-uzr"
                                >
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                        data-oid="ri48xyg"
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full"
                                        style={{
                                            background: 'var(--bg-tertiary)',
                                            color: 'var(--text-secondary)',
                                        }}
                                        data-oid="ywqir54"
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }} data-oid="h6eg:yf">
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="0gsx55:"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6" data-oid="zwpaw2n">
                            <div data-oid="x8_te7r">
                                <p
                                    className="text-lg leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="ni5cd9w"
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>

                            <div className="flex justify-center space-x-4" data-oid="lvvekhh">
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="btn-secondary"
                                    data-oid="sujuk58"
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
