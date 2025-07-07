'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [currentStatus, setCurrentStatus] = useState('active');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [inTime, setInTime] = useState('09:00 AM');
    const [outTime, setOutTime] = useState('06:00 PM');
    const [isEditingTime, setIsEditingTime] = useState(false);

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Enhanced intern profile with status and time tracking
    const internProfile = {
        name: 'Alex Johnson',
        role: 'Software Development Intern',
        email: 'alex.johnson@pgt.com',
        college: 'Stanford University',
        year: 'Junior (3rd Year)',
        avatar: 'AJ',
        department: 'Engineering',
        manager: 'Sarah Chen',
        startDate: 'June 1, 2024',
    };

    const projectInfo = {
        name: 'Customer Analytics Platform',
        description:
            'Developing a comprehensive analytics dashboard to track customer behavior and engagement metrics across multiple touchpoints.',
        status: 'In Progress',
        progress: 65,
        techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
        deadline: 'July 15, 2024',
        priority: 'High',
    };

    const teamMembers = [
        {
            name: 'Sarah Chen',
            role: 'Senior Developer',
            avatar: 'SC',
            status: 'active',
            inTime: '08:30 AM',
            outTime: '05:30 PM',
        },
        {
            name: 'Mike Rodriguez',
            role: 'UI/UX Designer',
            avatar: 'MR',
            status: 'out-of-office',
            inTime: '09:00 AM',
            outTime: '06:00 PM',
        },
        {
            name: 'Emily Davis',
            role: 'Product Manager',
            avatar: 'ED',
            status: 'active',
            inTime: '08:00 AM',
            outTime: '05:00 PM',
        },
        {
            name: 'James Wilson',
            role: 'DevOps Engineer',
            avatar: 'JW',
            status: 'inactive',
            inTime: '10:00 AM',
            outTime: '07:00 PM',
        },
    ];

    const announcements = [
        {
            id: 1,
            title: 'Daily Stand-up Meeting',
            message: 'Stand-up meeting at 10:00 AM in Conference Room B',
            time: 'Today, 9:30 AM',
            priority: 'high',
            type: 'meeting',
        },
        {
            id: 2,
            title: 'Project Deadline Extended',
            message: 'Submission deadline extended to July 15th due to scope changes',
            time: 'Yesterday, 3:45 PM',
            priority: 'medium',
            type: 'update',
        },
        {
            id: 3,
            title: 'Mentorship Session',
            message: 'One-on-one mentorship session scheduled for Friday at 4:00 PM',
            time: '2 days ago',
            priority: 'low',
            type: 'session',
        },
        {
            id: 4,
            title: 'Code Review Session',
            message: 'Weekly code review session moved to Thursday 2:00 PM',
            time: '3 days ago',
            priority: 'medium',
            type: 'review',
        },
    ];

    const statusOptions = [
        { value: 'active', label: 'Active', color: 'bg-green-500', icon: '🟢' },
        { value: 'inactive', label: 'Inactive', color: 'bg-gray-500', icon: '⚫' },
        { value: 'out-of-office', label: 'Out of Office', color: 'bg-yellow-500', icon: '🟡' },
        { value: 'busy', label: 'Busy', color: 'bg-red-500', icon: '🔴' },
    ];

    const getStatusInfo = (status) => {
        return statusOptions.find((option) => option.value === status) || statusOptions[0];
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return 'border-l-red-500 bg-gradient-to-r from-red-900/20 to-transparent';
            case 'medium':
                return 'border-l-yellow-500 bg-gradient-to-r from-yellow-900/20 to-transparent';
            case 'low':
                return 'border-l-green-500 bg-gradient-to-r from-green-900/20 to-transparent';
            default:
                return 'border-l-gray-500 bg-gradient-to-r from-gray-900/20 to-transparent';
        }
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div
            className="min-h-screen"
            style={{ background: 'var(--bg-primary)' }}
            data-oid="r:eesag"
        >
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none" data-oid="r-z-fr.">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 float-animation"
                    style={{ background: 'var(--gradient-primary)' }}
                    data-oid="6d5zo0r"
                ></div>
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 float-animation"
                    style={{ background: 'var(--gradient-secondary)', animationDelay: '1s' }}
                    data-oid="di.k8yx"
                ></div>
            </div>

            {/* Header */}
            <header
                className="glass-effect border-b"
                style={{ borderColor: 'var(--border-primary)' }}
                data-oid="3565ybk"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="a:gj9qm">
                    <div className="flex justify-between items-center h-20" data-oid="y0:ce85">
                        <div className="flex items-center space-x-4" data-oid="27eownl">
                            <div className="flex items-center space-x-3" data-oid=":eg42o3">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center glow-red"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="y6ldjet"
                                >
                                    <span
                                        className="text-white font-bold text-lg"
                                        data-oid="4cknga3"
                                    >
                                        PGT
                                    </span>
                                </div>
                                <div data-oid="89xqilr">
                                    <h1
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="imqi3s_"
                                    >
                                        Intern Dashboard
                                    </h1>
                                    <p
                                        className="text-sm"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="c2gx2fq"
                                    >
                                        {formatDate(currentTime)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Header Right - Time and Profile */}
                        <div className="flex items-center space-x-6" data-oid="hbnllz5">
                            {/* Live Clock */}
                            <div className="text-right" data-oid="lw_6ro0">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{ color: 'var(--accent-yellow)' }}
                                    data-oid="b5b1bd4"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="3gzz7y8"
                                >
                                    Live Time
                                </div>
                            </div>

                            {/* Profile with Status */}
                            <div className="flex items-center space-x-3" data-oid="1k31.7o">
                                <div className="text-right" data-oid="uwmne2q">
                                    <div
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="w1ia188"
                                    >
                                        Welcome, {internProfile.name.split(' ')[0]}
                                    </div>
                                    <div className="flex items-center space-x-2" data-oid="5up.112">
                                        <span
                                            className="text-xs"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="v3hj76m"
                                        >
                                            Status:
                                        </span>
                                        <select
                                            value={currentStatus}
                                            onChange={(e) => setCurrentStatus(e.target.value)}
                                            className="text-xs px-2 py-1 rounded-md border-0 focus:ring-2 focus:ring-red-500"
                                            style={{
                                                background: 'var(--bg-tertiary)',
                                                color: 'var(--text-primary)',
                                                borderColor: 'var(--border-primary)',
                                            }}
                                            data-oid="k5v4e1:"
                                        >
                                            {statusOptions.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                    data-oid="3w9nkuy"
                                                >
                                                    {option.icon} {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="relative" data-oid="dtym7cf">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center glow-yellow"
                                        style={{ background: 'var(--gradient-secondary)' }}
                                        data-oid="s98t5c0"
                                    >
                                        <span
                                            className="text-black font-bold text-lg"
                                            data-oid="27kei6v"
                                        >
                                            {internProfile.avatar}
                                        </span>
                                    </div>
                                    <div
                                        className={`absolute -top-1 -right-1 w-4 h-4 ${getStatusInfo(currentStatus).color} rounded-full border-2`}
                                        style={{ borderColor: 'var(--bg-primary)' }}
                                        data-oid="_s5v9.2"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10"
                data-oid="4rmkezm"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-oid="92bwxqi">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8" data-oid="hjc0d-e">
                        {/* Enhanced Profile Card */}
                        <div
                            className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                            data-oid="p.r857o"
                        >
                            <div className="flex items-start space-x-6" data-oid="-fwbfvb">
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center glow-red"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="b:yr6pl"
                                >
                                    <span
                                        className="text-white font-bold text-2xl"
                                        data-oid="td1csyx"
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div className="flex-1" data-oid="080l39k">
                                    <div
                                        className="flex items-center space-x-3 mb-2"
                                        data-oid="1-ecc.f"
                                    >
                                        <h2
                                            className="text-2xl font-bold"
                                            style={{ color: 'var(--text-primary)' }}
                                            data-oid="z:2r-ps"
                                        >
                                            {internProfile.name}
                                        </h2>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusInfo(currentStatus).color} text-white`}
                                            data-oid="jmn28a7"
                                        >
                                            {getStatusInfo(currentStatus).label}
                                        </span>
                                    </div>
                                    <p
                                        className="font-medium text-lg mb-4"
                                        style={{ color: 'var(--accent-yellow)' }}
                                        data-oid="1e44ti3"
                                    >
                                        {internProfile.role}
                                    </p>
                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
                                        data-oid="0ylqndf"
                                    >
                                        <div className="space-y-2" data-oid="czosxkx">
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="ystxfx6"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="4aw_msr"
                                                >
                                                    📧 Email:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="0-2l9nz"
                                                >
                                                    {internProfile.email}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="nfsamhw"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="yqrs6wv"
                                                >
                                                    🎓 College:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="m5ln4ax"
                                                >
                                                    {internProfile.college}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid=":9at_m_"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="0qj844i"
                                                >
                                                    📚 Year:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="8ifd35d"
                                                >
                                                    {internProfile.year}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-2" data-oid="zmi:u85">
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="kju.wwr"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="4is0.4g"
                                                >
                                                    🏢 Department:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="vmiyg1:"
                                                >
                                                    {internProfile.department}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="5:l8n-3"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="2ps9pbv"
                                                >
                                                    👤 Manager:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="sabje83"
                                                >
                                                    {internProfile.manager}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="usy:9ud"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="o94-d1p"
                                                >
                                                    📅 Start Date:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="-8klv:d"
                                                >
                                                    {internProfile.startDate}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Time Tracking Card */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid="wvwkt3d"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="cllmr.a"
                            >
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="8splm_1"
                                >
                                    ⏰ Time Tracking
                                </h3>
                                <button
                                    onClick={() => setIsEditingTime(!isEditingTime)}
                                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                                    style={{
                                        background: 'var(--gradient-secondary)',
                                        color: 'black',
                                    }}
                                    data-oid="u0w.yaq"
                                >
                                    {isEditingTime ? 'Save' : 'Edit Times'}
                                </button>
                            </div>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="40wo0:l"
                            >
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="v98z:n3"
                                >
                                    <div
                                        className="flex items-center space-x-2 mb-2"
                                        data-oid="okcinoq"
                                    >
                                        <span className="text-2xl" data-oid="y3ofpc-">
                                            🌅
                                        </span>
                                        <span
                                            className="font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="14oxf-k"
                                        >
                                            In Time
                                        </span>
                                    </div>
                                    {isEditingTime ? (
                                        <input
                                            type="time"
                                            value={inTime.replace(/\s(AM|PM)/, '')}
                                            onChange={(e) => setInTime(e.target.value)}
                                            className="w-full p-2 rounded-lg border-0 focus:ring-2 focus:ring-green-500"
                                            style={{
                                                background: 'var(--bg-secondary)',
                                                color: 'var(--text-primary)',
                                            }}
                                            data-oid="jc8fzof"
                                        />
                                    ) : (
                                        <div
                                            className="text-2xl font-bold"
                                            style={{ color: 'var(--status-active)' }}
                                            data-oid="3d0grwq"
                                        >
                                            {inTime}
                                        </div>
                                    )}
                                </div>

                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="__r0ejb"
                                >
                                    <div
                                        className="flex items-center space-x-2 mb-2"
                                        data-oid="_q98zpi"
                                    >
                                        <span className="text-2xl" data-oid="ps3h-41">
                                            🌅
                                        </span>
                                        <span
                                            className="font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="145p:z-"
                                        >
                                            Out Time
                                        </span>
                                    </div>
                                    {isEditingTime ? (
                                        <input
                                            type="time"
                                            value={outTime.replace(/\s(AM|PM)/, '')}
                                            onChange={(e) => setOutTime(e.target.value)}
                                            className="w-full p-2 rounded-lg border-0 focus:ring-2 focus:ring-red-500"
                                            style={{
                                                background: 'var(--bg-secondary)',
                                                color: 'var(--text-primary)',
                                            }}
                                            data-oid="f2hqrn7"
                                        />
                                    ) : (
                                        <div
                                            className="text-2xl font-bold"
                                            style={{ color: 'var(--accent-red)' }}
                                            data-oid="lr0tvd7"
                                        >
                                            {outTime}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl"
                                style={{ background: 'var(--bg-tertiary)' }}
                                data-oid="l47v5a3"
                            >
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="di65t1k"
                                >
                                    <span
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="i824ch2"
                                    >
                                        Total Work Hours Today:
                                    </span>
                                    <span
                                        className="text-xl font-bold"
                                        style={{ color: 'var(--accent-yellow)' }}
                                        data-oid="t3wlnp7"
                                    >
                                        8h 30m
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Project Info */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid="bba5klk"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid="qbl15ou">
                                <span className="text-2xl" data-oid=".ngi2zj">
                                    🚀
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="_qrcpbd"
                                >
                                    Current Project
                                </h3>
                            </div>
                            <div className="space-y-6" data-oid="-p2q61v">
                                <div data-oid="j4:at_8">
                                    <h4
                                        className="font-bold text-lg mb-3"
                                        style={{ color: 'var(--accent-cream)' }}
                                        data-oid="mu_y2rf"
                                    >
                                        {projectInfo.name}
                                    </h4>
                                    <p
                                        className="leading-relaxed mb-4"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="zz5i6ov"
                                    >
                                        {projectInfo.description}
                                    </p>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                    data-oid="z015y:9"
                                >
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="_gi9rm5"
                                    >
                                        <div
                                            className="text-xs mb-1"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="trr4m._"
                                        >
                                            Status
                                        </div>
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--status-active)' }}
                                            data-oid="lr71rxr"
                                        >
                                            {projectInfo.status}
                                        </div>
                                    </div>
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="dhx08la"
                                    >
                                        <div
                                            className="text-xs mb-1"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="3n8-vld"
                                        >
                                            Priority
                                        </div>
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--accent-red)' }}
                                            data-oid="0xrj--d"
                                        >
                                            {projectInfo.priority}
                                        </div>
                                    </div>
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="5-340:m"
                                    >
                                        <div
                                            className="text-xs mb-1"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="11qg-nz"
                                        >
                                            Deadline
                                        </div>
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--accent-yellow)' }}
                                            data-oid="s0pgl.e"
                                        >
                                            {projectInfo.deadline}
                                        </div>
                                    </div>
                                </div>

                                <div data-oid="wuxkxg.">
                                    <div
                                        className="flex justify-between items-center mb-2"
                                        data-oid="39me1.0"
                                    >
                                        <span
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid=":4_xz:2"
                                        >
                                            Progress
                                        </span>
                                        <span
                                            className="font-bold"
                                            style={{ color: 'var(--text-primary)' }}
                                            data-oid="d5-3k.7"
                                        >
                                            {projectInfo.progress}%
                                        </span>
                                    </div>
                                    <div
                                        className="w-full rounded-full h-3"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="6_rhuxw"
                                    >
                                        <div
                                            className="h-3 rounded-full transition-all duration-500 glow-red"
                                            style={{
                                                width: `${projectInfo.progress}%`,
                                                background: 'var(--gradient-primary)',
                                            }}
                                            data-oid="z2lgn:4"
                                        ></div>
                                    </div>
                                </div>

                                <div data-oid="v6.lq-f">
                                    <span
                                        className="block mb-3 font-medium"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="7e3:jr2"
                                    >
                                        Tech Stack:
                                    </span>
                                    <div className="flex flex-wrap gap-2" data-oid="vmc_p62">
                                        {projectInfo.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                                                style={{
                                                    background: 'var(--bg-tertiary)',
                                                    color: 'var(--text-primary)',
                                                    border: '1px solid var(--border-secondary)',
                                                }}
                                                data-oid="m.rwgwj"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8" data-oid="vpfbn.j">
                        {/* Enhanced Team Members */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid="tc:rizq"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid="y_b4mw:">
                                <span className="text-2xl" data-oid="ih_6fxs">
                                    👥
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="t4q_9p_"
                                >
                                    Team Members
                                </h3>
                            </div>
                            <div className="space-y-4" data-oid="ih4uz5h">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl transition-all duration-200 hover:scale-105"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid=":ryj.sv"
                                    >
                                        <div
                                            className="flex items-center space-x-4 mb-3"
                                            data-oid="5_eyz0a"
                                        >
                                            <div className="relative" data-oid="6f7uc0w">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{
                                                        background: 'var(--gradient-secondary)',
                                                    }}
                                                    data-oid="wnr_-by"
                                                >
                                                    <span
                                                        className="text-black font-bold"
                                                        data-oid="l2qv3h9"
                                                    >
                                                        {member.avatar}
                                                    </span>
                                                </div>
                                                <div
                                                    className={`absolute -top-1 -right-1 w-4 h-4 ${getStatusInfo(member.status).color} rounded-full border-2`}
                                                    style={{ borderColor: 'var(--bg-primary)' }}
                                                    data-oid="sck8pec"
                                                ></div>
                                            </div>
                                            <div className="flex-1" data-oid="c0zzlr4">
                                                <div
                                                    className="flex items-center space-x-2 mb-1"
                                                    data-oid="3-w3.2s"
                                                >
                                                    <p
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="3i63i6f"
                                                    >
                                                        {member.name}
                                                    </p>
                                                    <span
                                                        className={`px-2 py-0.5 rounded-full text-xs ${getStatusInfo(member.status).color} text-white`}
                                                        data-oid="z08uif3"
                                                    >
                                                        {getStatusInfo(member.status).label}
                                                    </span>
                                                </div>
                                                <p
                                                    className="text-sm"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="__n.343"
                                                >
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex justify-between text-xs"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="qe34_1h"
                                        >
                                            <span data-oid="ahjvipo">In: {member.inTime}</span>
                                            <span data-oid=".zx5_9e">Out: {member.outTime}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Announcements */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid="e2cbup7"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid="xt92p9h">
                                <span className="text-2xl" data-oid="n:uw:m8">
                                    📢
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="cj0u0zd"
                                >
                                    Announcements
                                </h3>
                            </div>
                            <div className="space-y-4" data-oid="-nmyagj">
                                {announcements.map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className={`p-4 rounded-xl border-l-4 transition-all hover:scale-105 ${getPriorityColor(announcement.priority)}`}
                                        data-oid="r27gady"
                                    >
                                        <div
                                            className="flex justify-between items-start mb-2"
                                            data-oid="j-607g4"
                                        >
                                            <h4
                                                className="font-medium"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid=".cd-:sq"
                                            >
                                                {announcement.title}
                                            </h4>
                                            <span
                                                className="text-xs px-2 py-1 rounded-full"
                                                style={{
                                                    background: 'var(--bg-tertiary)',
                                                    color: 'var(--text-secondary)',
                                                }}
                                                data-oid="--06rx3"
                                            >
                                                {announcement.type}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm mb-3 leading-relaxed"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="207z8ce"
                                        >
                                            {announcement.message}
                                        </p>
                                        <p
                                            className="text-xs"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="43dlad8"
                                        >
                                            {announcement.time}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
