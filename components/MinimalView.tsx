'use client';

import { useState, useEffect } from 'react';
import {
    internProfile,
    projectInfo,
    teamMembers,
    announcements,
    formatTime,
    formatDate,
    getStatusInfo,
    getPriorityBadgeColor,
    isDemoData,
    demoDataNotice,
} from '../lib/dummyData';

export function MinimalView() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);
    const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleAnnouncementClick = (announcement: any) => {
        setSelectedAnnouncement(announcement);
        setShowAnnouncementModal(true);
    };

    const closeAnnouncementModal = () => {
        setShowAnnouncementModal(false);
        setSelectedAnnouncement(null);
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900" data-oid=".seafn8">
            {/* Demo Data Notice */}
            {isDemoData && (
                <div
                    className="bg-amber-100 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6"
                    data-oid="p0unjvh"
                >
                    <div className="flex" data-oid="eze.g7e">
                        <div className="flex-shrink-0" data-oid="rlwqdcv">
                            <span className="text-amber-500" data-oid="rgk2e_.">
                                ⚠️
                            </span>
                        </div>
                        <div className="ml-3" data-oid="go:_1ad">
                            <p
                                className="text-sm text-amber-700 dark:text-amber-300"
                                data-oid="5ipmz19"
                            >
                                {demoDataNotice}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Header */}
            <header
                className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700"
                data-oid="n5e443e"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="2b_7_-q">
                    <div className="flex justify-between items-center h-16" data-oid="f.nh1u9">
                        <div className="flex items-center space-x-4" data-oid="5qai80j">
                            <div
                                className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center"
                                data-oid="f16gui3"
                            >
                                <span className="text-white font-bold text-lg" data-oid="fx8-.w5">
                                    🚀
                                </span>
                            </div>
                            <div data-oid="c_3z:s1">
                                <h1
                                    className="text-xl font-bold text-slate-900 dark:text-white"
                                    data-oid="19e.hfi"
                                >
                                    Priyansh Dashboard - Minimal View
                                </h1>
                                <p
                                    className="text-sm text-slate-500 dark:text-slate-400"
                                    data-oid="7qz4j5t"
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4" data-oid="2zs_kmv">
                            <div className="text-right" data-oid="71.3qy1">
                                <div
                                    className="text-lg font-bold text-slate-900 dark:text-white"
                                    data-oid="p1xe:5q"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs text-slate-500 dark:text-slate-400"
                                    data-oid="tka9vy6"
                                >
                                    Current Time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="7tp-z0_">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid=":kr4v.g">
                    {/* Left Column */}
                    <div className="space-y-8" data-oid="7elbjjy">
                        {/* 1. Intern Profile Card */}
                        <section
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                            data-oid="-bxfvh8"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="kaqerdm"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="isg7qef"
                                >
                                    <span className="mr-3" data-oid="t5a54_8">
                                        👤
                                    </span>
                                    Intern Profile
                                </h2>
                                <button
                                    className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                                    data-oid="6rh-35z"
                                >
                                    ✏️ Quick Edit
                                </button>
                            </div>

                            <div className="flex items-start space-x-4" data-oid="ona5_lb">
                                <div
                                    className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center"
                                    data-oid="22qc242"
                                >
                                    <span
                                        className="text-white font-bold text-xl"
                                        data-oid=":uucua."
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div className="flex-1" data-oid="vtmdi1x">
                                    <h3
                                        className="text-lg font-semibold text-slate-900 dark:text-white"
                                        data-oid="kzfv23k"
                                    >
                                        {internProfile.name}
                                    </h3>
                                    <p
                                        className="text-indigo-600 dark:text-indigo-400 font-medium"
                                        data-oid="mlqk4fk"
                                    >
                                        {internProfile.role}
                                    </p>
                                    <div
                                        className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
                                        data-oid="kxb4cid"
                                    >
                                        <div data-oid="at-qs.e">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="m-2o4:q"
                                            >
                                                Email:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="ypcvkrr"
                                            >
                                                {internProfile.email}
                                            </p>
                                        </div>
                                        <div data-oid="k_rwdgh">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="i66dn_p"
                                            >
                                                College:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="mxb_3e-"
                                            >
                                                {internProfile.college}
                                            </p>
                                        </div>
                                        <div data-oid="aq1i8rl">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="-1q_pdq"
                                            >
                                                Year:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="x5r818w"
                                            >
                                                {internProfile.year}
                                            </p>
                                        </div>
                                        <div data-oid="2qv-3rj">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="189wxzw"
                                            >
                                                Manager:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="wkp0d_9"
                                            >
                                                {internProfile.manager}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2. Assigned Project Info */}
                        <section
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                            data-oid="s9p-.l_"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="uibo6u5"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="2dvl94g"
                                >
                                    <span className="mr-3" data-oid="tex8lfs">
                                        🚀
                                    </span>
                                    Assigned Project
                                </h2>
                                <div className="flex items-center space-x-2" data-oid="1-cajpd">
                                    <span
                                        className="text-sm text-slate-500 dark:text-slate-400"
                                        data-oid="1lkvivd"
                                    >
                                        Days left:
                                    </span>
                                    <span
                                        className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-2 py-1 rounded text-sm font-medium"
                                        data-oid="69l167a"
                                    >
                                        23 days
                                    </span>
                                </div>
                            </div>

                            <div data-oid="64_snyo">
                                <h3
                                    className="text-lg font-semibold text-slate-900 dark:text-white mb-2"
                                    data-oid="omlvq80"
                                >
                                    {projectInfo.name}
                                </h3>
                                <p
                                    className="text-slate-600 dark:text-slate-300 mb-4"
                                    data-oid="pt4-8od"
                                >
                                    {projectInfo.description}
                                </p>

                                <div
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
                                    data-oid="ag7mr9f"
                                >
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="f9ddgc:"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="w30f.te"
                                        >
                                            Status
                                        </div>
                                        <div
                                            className="text-green-600 dark:text-green-400 font-medium"
                                            data-oid="l7efmr2"
                                        >
                                            {projectInfo.status}
                                        </div>
                                    </div>
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="u9rt44w"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="a86l4mg"
                                        >
                                            Priority
                                        </div>
                                        <div
                                            className="text-red-600 dark:text-red-400 font-medium"
                                            data-oid="p:4wq1."
                                        >
                                            {projectInfo.priority}
                                        </div>
                                    </div>
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="ude3s__"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="hzkve7o"
                                        >
                                            Deadline
                                        </div>
                                        <div
                                            className="text-amber-600 dark:text-amber-400 font-medium"
                                            data-oid="7kd9gp4"
                                        >
                                            {projectInfo.deadline}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4" data-oid="x_uizz2">
                                    <div
                                        className="flex justify-between items-center mb-2"
                                        data-oid="lf_3h53"
                                    >
                                        <span
                                            className="text-sm text-slate-600 dark:text-slate-300"
                                            data-oid="4prs0qc"
                                        >
                                            Progress
                                        </span>
                                        <span
                                            className="text-sm font-medium text-slate-900 dark:text-white"
                                            data-oid="frl5i2n"
                                        >
                                            {projectInfo.progress}%
                                        </span>
                                    </div>
                                    <div
                                        className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"
                                        data-oid="ovw5p:2"
                                    >
                                        <div
                                            className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${projectInfo.progress}%` }}
                                            data-oid="4iy-eoh"
                                        ></div>
                                    </div>
                                </div>

                                <div data-oid="axc0bex">
                                    <span
                                        className="text-sm text-slate-600 dark:text-slate-300 mb-2 block"
                                        data-oid="cphcnlo"
                                    >
                                        Tech Stack:
                                    </span>
                                    <div className="flex flex-wrap gap-2" data-oid="mokx45n">
                                        {projectInfo.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                                                data-oid="b91zpko"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8" data-oid="heuk-5u">
                        {/* 3. Team Members List */}
                        <section
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                            data-oid="g9n6h8e"
                        >
                            <h2
                                className="text-xl font-bold text-slate-900 dark:text-white flex items-center mb-6"
                                data-oid="2fuloxj"
                            >
                                <span className="mr-3" data-oid="xvi3fg5">
                                    👥
                                </span>
                                Team Members
                            </h2>

                            <div className="space-y-4" data-oid=":fk189c">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                                        data-oid="fpr6r5z"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="4qxt9h1"
                                        >
                                            <div
                                                className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center relative"
                                                data-oid="4jylsxm"
                                            >
                                                <span
                                                    className="text-white font-bold text-sm"
                                                    data-oid="tt0ardm"
                                                >
                                                    {member.avatar}
                                                </span>
                                                <div
                                                    className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                                                        member.status === 'active'
                                                            ? 'bg-green-500'
                                                            : member.status === 'busy'
                                                              ? 'bg-red-500'
                                                              : member.status === 'away'
                                                                ? 'bg-yellow-500'
                                                                : 'bg-gray-500'
                                                    }`}
                                                    data-oid="8lur-km"
                                                ></div>
                                            </div>
                                            <div data-oid="q5utwtr">
                                                <div
                                                    className="font-medium text-slate-900 dark:text-white"
                                                    data-oid="s8ifs87"
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="text-sm text-slate-500 dark:text-slate-400"
                                                    data-oid=":q.tte-"
                                                >
                                                    {member.role}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right" data-oid="73-ldjw">
                                            <div
                                                className={`text-xs px-2 py-1 rounded-full font-medium ${
                                                    member.status === 'active'
                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                                                        : member.status === 'busy'
                                                          ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300'
                                                          : member.status === 'away'
                                                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300'
                                                            : 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300'
                                                }`}
                                                data-oid="7tsn651"
                                            >
                                                {getStatusInfo(member.status).icon}{' '}
                                                {getStatusInfo(member.status).label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. Announcements Section */}
                        <section
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                            data-oid="cc:ovqq"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="ngv8l3_"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="u:-7-_x"
                                >
                                    <span className="mr-3" data-oid="9f.y8oe">
                                        📢
                                    </span>
                                    Announcements
                                </h2>
                                <div className="flex space-x-2" data-oid="4:-ur5o">
                                    <button
                                        className="text-xs px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300 rounded"
                                        data-oid="h:n5npu"
                                    >
                                        High
                                    </button>
                                    <button
                                        className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300 rounded"
                                        data-oid="wtjoh4m"
                                    >
                                        Medium
                                    </button>
                                    <button
                                        className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300 rounded"
                                        data-oid="hjhqnvp"
                                    >
                                        Low
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3" data-oid="_igg.lu">
                                {announcements.slice(0, 4).map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                                        onClick={() => handleAnnouncementClick(announcement)}
                                        data-oid=":6o603x"
                                    >
                                        <div
                                            className="flex items-start justify-between"
                                            data-oid="nf6_bq8"
                                        >
                                            <div className="flex-1" data-oid="gc6y1u1">
                                                <div
                                                    className="flex items-center space-x-2 mb-2"
                                                    data-oid="sw0jrmr"
                                                >
                                                    <span className="text-sm" data-oid="xhy7glw">
                                                        {announcement.priority === 'high'
                                                            ? '🔴'
                                                            : announcement.priority === 'medium'
                                                              ? '🟡'
                                                              : '🟢'}
                                                    </span>
                                                    <h4
                                                        className="font-medium text-slate-900 dark:text-white text-sm"
                                                        data-oid="ohdgukr"
                                                    >
                                                        {announcement.title}
                                                    </h4>
                                                </div>
                                                <p
                                                    className="text-sm text-slate-600 dark:text-slate-300 mb-2"
                                                    data-oid="yy0xf.d"
                                                >
                                                    {announcement.message.substring(0, 80)}...
                                                </p>
                                                <div
                                                    className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400"
                                                    data-oid="sztnyc4"
                                                >
                                                    <span data-oid="prjekzf">
                                                        {announcement.time}
                                                    </span>
                                                    <span data-oid="2lq3ry9">•</span>
                                                    <span data-oid="7ra2v3z">
                                                        {announcement.author}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Announcement Modal */}
            {showAnnouncementModal && selectedAnnouncement && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={closeAnnouncementModal}
                    data-oid="m-wm0h7"
                >
                    <div
                        className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="ty3w307"
                    >
                        <div className="flex justify-between items-start mb-6" data-oid="bbdseg3">
                            <div data-oid=".s8k5h4">
                                <h2
                                    className="text-2xl font-bold mb-2 text-slate-900 dark:text-white"
                                    data-oid="56xzbiu"
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div
                                    className="flex items-center space-x-3 text-sm"
                                    data-oid="a.p6udo"
                                >
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(
                                            selectedAnnouncement.priority,
                                        )}`}
                                        data-oid="9163qa-"
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                                        data-oid="ca6wmwg"
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span
                                        className="text-slate-500 dark:text-slate-400"
                                        data-oid="pk65-:f"
                                    >
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors text-slate-500 dark:text-slate-400"
                                data-oid="m59he1b"
                            >
                                ×
                            </button>
                        </div>
                        <div className="space-y-6" data-oid="1ukgzlr">
                            <div data-oid="ejhuc1w">
                                <p
                                    className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                                    data-oid="i.3me2l"
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>
                            <div className="flex justify-center space-x-4" data-oid="b0vnr.c">
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                                    data-oid="0shu3jc"
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
