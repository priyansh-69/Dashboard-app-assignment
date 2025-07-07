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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900" data-oid="-6bj1rt">
            {/* Demo Data Notice */}
            {isDemoData && (
                <div
                    className="bg-amber-100 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6"
                    data-oid="8611cz-"
                >
                    <div className="flex" data-oid="aapfby7">
                        <div className="flex-shrink-0" data-oid="joc96v_">
                            <span className="text-amber-500" data-oid="tt2--3f">
                                ⚠️
                            </span>
                        </div>
                        <div className="ml-3" data-oid="02z8rj1">
                            <p
                                className="text-sm text-amber-700 dark:text-amber-300"
                                data-oid=".q.-dz_"
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
                data-oid="a40j:be"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="pliys1y">
                    <div className="flex justify-between items-center h-16" data-oid=":ydby::">
                        <div className="flex items-center space-x-4" data-oid="xe4u05o">
                            <div
                                className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center"
                                data-oid="khma3kf"
                            >
                                <span className="text-white font-bold text-lg" data-oid="gl_t15:">
                                    🚀
                                </span>
                            </div>
                            <div data-oid=".tau4zf">
                                <h1
                                    className="text-xl font-bold text-slate-900 dark:text-white"
                                    data-oid="orygq8k"
                                >
                                    Priyansh Dashboard - Minimal View
                                </h1>
                                <p
                                    className="text-sm text-slate-500 dark:text-slate-400"
                                    data-oid="dug_225"
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4" data-oid="syqiews">
                            <div className="text-right" data-oid="m.aogt7">
                                <div
                                    className="text-lg font-bold text-slate-900 dark:text-white"
                                    data-oid="frb2y:s"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs text-slate-500 dark:text-slate-400"
                                    data-oid="-ii8j0u"
                                >
                                    Current Time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="veepu_0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="p:_9f4r">
                    {/* Left Column */}
                    <div className="space-y-8" data-oid="u59bp.h">
                        {/* 1. Intern Profile Card */}
                        <section
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                            data-oid="6f0fb43"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="4_e1zgz"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="sme7mnv"
                                >
                                    <span className="mr-3" data-oid="_eda74o">
                                        👤
                                    </span>
                                    Intern Profile
                                </h2>
                                <button
                                    className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                                    data-oid="ku46.0y"
                                >
                                    ✏️ Quick Edit
                                </button>
                            </div>

                            <div className="flex items-start space-x-4" data-oid="usibo1a">
                                <div
                                    className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center"
                                    data-oid="1fl1-wy"
                                >
                                    <span
                                        className="text-white font-bold text-xl"
                                        data-oid=".ra5qhz"
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div className="flex-1" data-oid="nm461tm">
                                    <h3
                                        className="text-lg font-semibold text-slate-900 dark:text-white"
                                        data-oid=".0tz.wp"
                                    >
                                        {internProfile.name}
                                    </h3>
                                    <p
                                        className="text-indigo-600 dark:text-indigo-400 font-medium"
                                        data-oid="r63hcp6"
                                    >
                                        {internProfile.role}
                                    </p>
                                    <div
                                        className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
                                        data-oid="a0.w_hy"
                                    >
                                        <div data-oid="bb-4zvo">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="4st49h-"
                                            >
                                                Email:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="4sohazl"
                                            >
                                                {internProfile.email}
                                            </p>
                                        </div>
                                        <div data-oid="49ugnj:">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="iypam1j"
                                            >
                                                College:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="m_f6i_9"
                                            >
                                                {internProfile.college}
                                            </p>
                                        </div>
                                        <div data-oid="9zrh8u8">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="89j0vyt"
                                            >
                                                Year:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid=":0y1uxp"
                                            >
                                                {internProfile.year}
                                            </p>
                                        </div>
                                        <div data-oid="xiy2:0q">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="8ve-4nw"
                                            >
                                                Manager:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="12te8.c"
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
                            data-oid="c.ss0ng"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="0az:69d"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="c5pek71"
                                >
                                    <span className="mr-3" data-oid="dph64ps">
                                        🚀
                                    </span>
                                    Assigned Project
                                </h2>
                                <div className="flex items-center space-x-2" data-oid="64tp8pl">
                                    <span
                                        className="text-sm text-slate-500 dark:text-slate-400"
                                        data-oid="6z3k22y"
                                    >
                                        Days left:
                                    </span>
                                    <span
                                        className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-2 py-1 rounded text-sm font-medium"
                                        data-oid="a5smxn:"
                                    >
                                        23 days
                                    </span>
                                </div>
                            </div>

                            <div data-oid="l1tyh.1">
                                <h3
                                    className="text-lg font-semibold text-slate-900 dark:text-white mb-2"
                                    data-oid="t1gsnda"
                                >
                                    {projectInfo.name}
                                </h3>
                                <p
                                    className="text-slate-600 dark:text-slate-300 mb-4"
                                    data-oid="wlglzz9"
                                >
                                    {projectInfo.description}
                                </p>

                                <div
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
                                    data-oid="j3.3m9c"
                                >
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="i1ry0.o"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="4g.a0:w"
                                        >
                                            Status
                                        </div>
                                        <div
                                            className="text-green-600 dark:text-green-400 font-medium"
                                            data-oid="pdinhi2"
                                        >
                                            {projectInfo.status}
                                        </div>
                                    </div>
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="u5_2mmw"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="jedv6s."
                                        >
                                            Priority
                                        </div>
                                        <div
                                            className="text-red-600 dark:text-red-400 font-medium"
                                            data-oid="6q96z:2"
                                        >
                                            {projectInfo.priority}
                                        </div>
                                    </div>
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="shpt.yx"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="w5qbim9"
                                        >
                                            Deadline
                                        </div>
                                        <div
                                            className="text-amber-600 dark:text-amber-400 font-medium"
                                            data-oid="tdxr3h3"
                                        >
                                            {projectInfo.deadline}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4" data-oid="i-e2w.i">
                                    <div
                                        className="flex justify-between items-center mb-2"
                                        data-oid=":46zmwl"
                                    >
                                        <span
                                            className="text-sm text-slate-600 dark:text-slate-300"
                                            data-oid="nal2s.c"
                                        >
                                            Progress
                                        </span>
                                        <span
                                            className="text-sm font-medium text-slate-900 dark:text-white"
                                            data-oid="g-y3k1a"
                                        >
                                            {projectInfo.progress}%
                                        </span>
                                    </div>
                                    <div
                                        className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"
                                        data-oid="_dlpgi_"
                                    >
                                        <div
                                            className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${projectInfo.progress}%` }}
                                            data-oid="mt6otwx"
                                        ></div>
                                    </div>
                                </div>

                                <div data-oid="5ki.g__">
                                    <span
                                        className="text-sm text-slate-600 dark:text-slate-300 mb-2 block"
                                        data-oid="auiet1v"
                                    >
                                        Tech Stack:
                                    </span>
                                    <div className="flex flex-wrap gap-2" data-oid="mnrtc5p">
                                        {projectInfo.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                                                data-oid="p643jrr"
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
                    <div className="space-y-8" data-oid=".5njwn_">
                        {/* 3. Team Members List */}
                        <section
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                            data-oid="2bc8nv0"
                        >
                            <h2
                                className="text-xl font-bold text-slate-900 dark:text-white flex items-center mb-6"
                                data-oid="u9u4-sq"
                            >
                                <span className="mr-3" data-oid="si40uj.">
                                    👥
                                </span>
                                Team Members
                            </h2>

                            <div className="space-y-4" data-oid="4gw5yn2">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                                        data-oid="quye0k4"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="kvfc511"
                                        >
                                            <div
                                                className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center relative"
                                                data-oid="wolgxx3"
                                            >
                                                <span
                                                    className="text-white font-bold text-sm"
                                                    data-oid="0h_9syo"
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
                                                    data-oid="dsl9r0z"
                                                ></div>
                                            </div>
                                            <div data-oid="7t_a52y">
                                                <div
                                                    className="font-medium text-slate-900 dark:text-white"
                                                    data-oid="jzpkq3p"
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="text-sm text-slate-500 dark:text-slate-400"
                                                    data-oid="vna3:dd"
                                                >
                                                    {member.role}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right" data-oid="tm.5f_i">
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
                                                data-oid="__gpyh-"
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
                            data-oid="uwm_l_r"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="n5ze7kt"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="tmiu0be"
                                >
                                    <span className="mr-3" data-oid="673rld1">
                                        📢
                                    </span>
                                    Announcements
                                </h2>
                                <div className="flex space-x-2" data-oid="saf90m-">
                                    <button
                                        className="text-xs px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300 rounded"
                                        data-oid="e9sl:hp"
                                    >
                                        High
                                    </button>
                                    <button
                                        className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300 rounded"
                                        data-oid="ws5f7jd"
                                    >
                                        Medium
                                    </button>
                                    <button
                                        className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300 rounded"
                                        data-oid="6hbk-vh"
                                    >
                                        Low
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3" data-oid="5.5qu-j">
                                {announcements.slice(0, 4).map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                                        onClick={() => handleAnnouncementClick(announcement)}
                                        data-oid="s8llk.z"
                                    >
                                        <div
                                            className="flex items-start justify-between"
                                            data-oid="7couvr-"
                                        >
                                            <div className="flex-1" data-oid="u9r1:9u">
                                                <div
                                                    className="flex items-center space-x-2 mb-2"
                                                    data-oid="l1x-md0"
                                                >
                                                    <span className="text-sm" data-oid="u.65wok">
                                                        {announcement.priority === 'high'
                                                            ? '🔴'
                                                            : announcement.priority === 'medium'
                                                              ? '🟡'
                                                              : '🟢'}
                                                    </span>
                                                    <h4
                                                        className="font-medium text-slate-900 dark:text-white text-sm"
                                                        data-oid="8cxo42a"
                                                    >
                                                        {announcement.title}
                                                    </h4>
                                                </div>
                                                <p
                                                    className="text-sm text-slate-600 dark:text-slate-300 mb-2"
                                                    data-oid="r-l1vq7"
                                                >
                                                    {announcement.message.substring(0, 80)}...
                                                </p>
                                                <div
                                                    className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400"
                                                    data-oid="882-rrt"
                                                >
                                                    <span data-oid="2y830yc">
                                                        {announcement.time}
                                                    </span>
                                                    <span data-oid="toplnu0">•</span>
                                                    <span data-oid="s-dn71x">
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
                    data-oid="miqond7"
                >
                    <div
                        className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-oid=".8xj.5y"
                    >
                        <div className="flex justify-between items-start mb-6" data-oid="u6i3dky">
                            <div data-oid="bzbwjaf">
                                <h2
                                    className="text-2xl font-bold mb-2 text-slate-900 dark:text-white"
                                    data-oid="vv5wc2n"
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div
                                    className="flex items-center space-x-3 text-sm"
                                    data-oid="_ry0vnt"
                                >
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(
                                            selectedAnnouncement.priority,
                                        )}`}
                                        data-oid="mfr4_i3"
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                                        data-oid="4s.pppc"
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span
                                        className="text-slate-500 dark:text-slate-400"
                                        data-oid="jieattp"
                                    >
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors text-slate-500 dark:text-slate-400"
                                data-oid="5ww4dxq"
                            >
                                ×
                            </button>
                        </div>
                        <div className="space-y-6" data-oid="ogo8hlp">
                            <div data-oid="gx9vbht">
                                <p
                                    className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                                    data-oid="6fuvo10"
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>
                            <div className="flex justify-center space-x-4" data-oid=".874-ry">
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                                    data-oid="t--z19n"
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
