'use client';

import { useState } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('dashboard');

    // Dummy data
    const internProfile = {
        name: 'Alex Johnson',
        role: 'Software Development Intern',
        email: 'alex.johnson@pgt.com',
        college: 'Stanford University',
        year: 'Junior (3rd Year)',
        avatar: 'AJ',
    };

    const projectInfo = {
        name: 'Customer Analytics Platform',
        description:
            'Developing a comprehensive analytics dashboard to track customer behavior and engagement metrics across multiple touchpoints.',
        status: 'In Progress',
        progress: 65,
        techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    };

    const teamMembers = [
        { name: 'Sarah Chen', role: 'Senior Developer', avatar: 'SC', status: 'online' },
        { name: 'Mike Rodriguez', role: 'UI/UX Designer', avatar: 'MR', status: 'away' },
        { name: 'Emily Davis', role: 'Product Manager', avatar: 'ED', status: 'online' },
        { name: 'James Wilson', role: 'DevOps Engineer', avatar: 'JW', status: 'offline' },
    ];

    const announcements = [
        {
            id: 1,
            title: 'Daily Stand-up Meeting',
            message: 'Stand-up meeting at 10:00 AM in Conference Room B',
            time: 'Today, 9:30 AM',
            priority: 'high',
        },
        {
            id: 2,
            title: 'Project Deadline Extended',
            message: 'Submission deadline extended to July 15th due to scope changes',
            time: 'Yesterday, 3:45 PM',
            priority: 'medium',
        },
        {
            id: 3,
            title: 'Mentorship Session',
            message: 'One-on-one mentorship session scheduled for Friday at 4:00 PM',
            time: '2 days ago',
            priority: 'low',
        },
        {
            id: 4,
            title: 'Code Review Session',
            message: 'Weekly code review session moved to Thursday 2:00 PM',
            time: '3 days ago',
            priority: 'medium',
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'online':
                return 'bg-green-400';
            case 'away':
                return 'bg-yellow-400';
            case 'offline':
                return 'bg-gray-400';
            default:
                return 'bg-gray-400';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return 'border-l-red-500 bg-red-50';
            case 'medium':
                return 'border-l-yellow-500 bg-yellow-50';
            case 'low':
                return 'border-l-green-500 bg-green-50';
            default:
                return 'border-l-gray-500 bg-gray-50';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" data-oid="vvyxwei">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200" data-oid="o0cjr2v">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="avsxnsm">
                    <div className="flex justify-between items-center h-16" data-oid="25710nu">
                        <div className="flex items-center space-x-4" data-oid=":xk0pjy">
                            <div className="flex items-center space-x-2" data-oid="dmpx7su">
                                <div
                                    className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
                                    data-oid="b9fn3le"
                                >
                                    <span
                                        className="text-white font-bold text-sm"
                                        data-oid="bvcfb-4"
                                    >
                                        PGT
                                    </span>
                                </div>
                                <h1
                                    className="text-xl font-semibold text-gray-900"
                                    data-oid="ti8hyxv"
                                >
                                    Intern Dashboard
                                </h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4" data-oid="eioxiit">
                            <div className="relative" data-oid="yigkm19">
                                <div
                                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                    data-oid="b2fq5pi"
                                >
                                    <span
                                        className="text-blue-600 font-medium text-sm"
                                        data-oid="l_8p.f3"
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div
                                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
                                    data-oid="ifg3f.2"
                                ></div>
                            </div>
                            <span className="text-sm text-gray-700" data-oid="yjpcel_">
                                Welcome, {internProfile.name.split(' ')[0]}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="ct5nsge">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-oid="nfdhj0h">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8" data-oid="9rrw-cz">
                        {/* Intern Profile Card */}
                        <div
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                            data-oid="nrrf:-i"
                        >
                            <div className="flex items-start space-x-4" data-oid="rdw30td">
                                <div
                                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                                    data-oid="3zdnrps"
                                >
                                    <span
                                        className="text-white font-bold text-xl"
                                        data-oid="mvz6qhd"
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div className="flex-1" data-oid="qe8n3lc">
                                    <h2
                                        className="text-xl font-semibold text-gray-900 mb-1"
                                        data-oid="kq-.3gr"
                                    >
                                        {internProfile.name}
                                    </h2>
                                    <p
                                        className="text-blue-600 font-medium mb-3"
                                        data-oid="yx0wtk7"
                                    >
                                        {internProfile.role}
                                    </p>
                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
                                        data-oid="zl:ot72"
                                    >
                                        <div
                                            className="flex items-center space-x-2"
                                            data-oid="h6p18ud"
                                        >
                                            <span className="text-gray-500" data-oid="zyvhfri">
                                                Email:
                                            </span>
                                            <span className="text-gray-900" data-oid="mc_yb:p">
                                                {internProfile.email}
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2"
                                            data-oid="40:e.0v"
                                        >
                                            <span className="text-gray-500" data-oid=":6ep8h1">
                                                College:
                                            </span>
                                            <span className="text-gray-900" data-oid="pl0v7d1">
                                                {internProfile.college}
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2"
                                            data-oid="kn3ppn1"
                                        >
                                            <span className="text-gray-500" data-oid="tmjmznp">
                                                Year:
                                            </span>
                                            <span className="text-gray-900" data-oid="iqo7u4g">
                                                {internProfile.year}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                            data-oid="twmgp4:"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-900 mb-4"
                                data-oid="gmz956d"
                            >
                                Current Project
                            </h3>
                            <div className="space-y-4" data-oid="bi6ifj6">
                                <div data-oid="dtmv:oj">
                                    <h4
                                        className="font-medium text-gray-900 mb-2"
                                        data-oid="woig21:"
                                    >
                                        {projectInfo.name}
                                    </h4>
                                    <p
                                        className="text-gray-600 text-sm leading-relaxed"
                                        data-oid="hj3db_0"
                                    >
                                        {projectInfo.description}
                                    </p>
                                </div>

                                <div
                                    className="flex items-center justify-between"
                                    data-oid="fr.fqj2"
                                >
                                    <div className="flex items-center space-x-2" data-oid="rnclouj">
                                        <span className="text-sm text-gray-500" data-oid="9g-rywq">
                                            Status:
                                        </span>
                                        <span
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                            data-oid="w9c-pv1"
                                        >
                                            {projectInfo.status}
                                        </span>
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="vj2bod7">
                                        {projectInfo.progress}% Complete
                                    </div>
                                </div>

                                <div
                                    className="w-full bg-gray-200 rounded-full h-2"
                                    data-oid="oxynpl3"
                                >
                                    <div
                                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${projectInfo.progress}%` }}
                                        data-oid="_zjsee3"
                                    ></div>
                                </div>

                                <div data-oid="k7lwx-2">
                                    <span
                                        className="text-sm text-gray-500 mb-2 block"
                                        data-oid="ad_fhdc"
                                    >
                                        Tech Stack:
                                    </span>
                                    <div className="flex flex-wrap gap-2" data-oid="-oesh93">
                                        {projectInfo.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                                                data-oid="6afbv.e"
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
                    <div className="space-y-8" data-oid="lzve5mk">
                        {/* Team Members */}
                        <div
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                            data-oid="-7xnyl:"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-900 mb-4"
                                data-oid="4kyx9r1"
                            >
                                Team Members
                            </h3>
                            <div className="space-y-3" data-oid="i0o3eyj">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                        data-oid="gnfaoys"
                                    >
                                        <div className="relative" data-oid="s9jkaal">
                                            <div
                                                className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center"
                                                data-oid="h2fmxqk"
                                            >
                                                <span
                                                    className="text-white font-medium text-sm"
                                                    data-oid="nsb3otv"
                                                >
                                                    {member.avatar}
                                                </span>
                                            </div>
                                            <div
                                                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(member.status)} rounded-full border-2 border-white`}
                                                data-oid="6xs8:kr"
                                            ></div>
                                        </div>
                                        <div className="flex-1 min-w-0" data-oid="1r0765_">
                                            <p
                                                className="text-sm font-medium text-gray-900 truncate"
                                                data-oid="habbpel"
                                            >
                                                {member.name}
                                            </p>
                                            <p
                                                className="text-xs text-gray-500 truncate"
                                                data-oid="h91ab:7"
                                            >
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Announcements */}
                        <div
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                            data-oid="plo80jw"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-900 mb-4"
                                data-oid="2hvt436"
                            >
                                Announcements
                            </h3>
                            <div className="space-y-3" data-oid="shhk7uw">
                                {announcements.map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className={`p-3 rounded-lg border-l-4 ${getPriorityColor(announcement.priority)} transition-all hover:shadow-sm`}
                                        data-oid="1ede.uq"
                                    >
                                        <div
                                            className="flex justify-between items-start mb-1"
                                            data-oid="yig1.45"
                                        >
                                            <h4
                                                className="text-sm font-medium text-gray-900"
                                                data-oid="zc453.s"
                                            >
                                                {announcement.title}
                                            </h4>
                                        </div>
                                        <p
                                            className="text-xs text-gray-600 mb-2"
                                            data-oid=".q0c7.z"
                                        >
                                            {announcement.message}
                                        </p>
                                        <p className="text-xs text-gray-500" data-oid="scxy8ff">
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
