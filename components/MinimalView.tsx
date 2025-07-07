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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900" data-oid="7wc5ew0">
            {/* Demo Data Notice */}
            {isDemoData && (
                <div
                    className="bg-amber-100 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6"
                    data-oid="_.uzq5y"
                >
                    <div className="flex" data-oid="pxcawfy">
                        <div className="flex-shrink-0" data-oid="..sczim">
                            <span className="text-amber-500" data-oid="0q_jps9">
                                ⚠️
                            </span>
                        </div>
                        <div className="ml-3" data-oid="1nd:k6g">
                            <p
                                className="text-sm text-amber-700 dark:text-amber-300"
                                data-oid="20h3_j0"
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
                data-oid="pqayle8"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".xhj0.e">
                    <div className="flex justify-between items-center h-16" data-oid="c6b6o6k">
                        <div className="flex items-center space-x-4" data-oid="muyxh2q">
                            <div
                                className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center"
                                data-oid="yw1.a02"
                            >
                                <span className="text-white font-bold text-lg" data-oid="uf6f2km">
                                    🚀
                                </span>
                            </div>
                            <div data-oid="fy65br4">
                                <h1
                                    className="text-xl font-bold text-slate-900 dark:text-white"
                                    data-oid="ydf6s.w"
                                >
                                    Priyansh Dashboard - Minimal View
                                </h1>
                                <p
                                    className="text-sm text-slate-500 dark:text-slate-400"
                                    data-oid="4kynmsv"
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4" data-oid="ltsubin">
                            <div className="text-right" data-oid="btz5gh7">
                                <div
                                    className="text-lg font-bold text-slate-900 dark:text-white"
                                    data-oid="ogffdp1"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs text-slate-500 dark:text-slate-400"
                                    data-oid="85aai2n"
                                >
                                    Current Time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="54.5ylk">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="vnr5g53">
                    {/* Left Column */}
                    <div className="space-y-8" data-oid="xzldz29">
                        {/* 1. Intern Profile Card */}
                        <section
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                            data-oid="wja_hf_"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="pgz7:y4"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="b1gy_9f"
                                >
                                    <span className="mr-3" data-oid="j51tht1">
                                        👤
                                    </span>
                                    Intern Profile
                                </h2>
                                <button
                                    className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                                    data-oid="._n7u:j"
                                >
                                    ✏️ Quick Edit
                                </button>
                            </div>

                            <div className="flex items-start space-x-4" data-oid="vuyweqn">
                                <div
                                    className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center"
                                    data-oid="xuu1vid"
                                >
                                    <span
                                        className="text-white font-bold text-xl"
                                        data-oid="s86kiog"
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div className="flex-1" data-oid="pf6qr_k">
                                    <h3
                                        className="text-lg font-semibold text-slate-900 dark:text-white"
                                        data-oid="xsc6m15"
                                    >
                                        {internProfile.name}
                                    </h3>
                                    <p
                                        className="text-indigo-600 dark:text-indigo-400 font-medium"
                                        data-oid="ch3_moy"
                                    >
                                        {internProfile.role}
                                    </p>
                                    <div
                                        className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
                                        data-oid="ruvgox0"
                                    >
                                        <div data-oid="li4.5hv">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="34jhxds"
                                            >
                                                Email:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="13_tkxz"
                                            >
                                                {internProfile.email}
                                            </p>
                                        </div>
                                        <div data-oid=":q3n5g5">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="7_9y.70"
                                            >
                                                College:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="26htt:h"
                                            >
                                                {internProfile.college}
                                            </p>
                                        </div>
                                        <div data-oid="t_1j2dg">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="r1p957x"
                                            >
                                                Year:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="wh95sq2"
                                            >
                                                {internProfile.year}
                                            </p>
                                        </div>
                                        <div data-oid="_590y0e">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="gnrhjvv"
                                            >
                                                Manager:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="rncjwly"
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
                            data-oid="bkvrs-e"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="uw_fl6j"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="7e9x_h0"
                                >
                                    <span className="mr-3" data-oid="-i8c_gz">
                                        🚀
                                    </span>
                                    Assigned Project
                                </h2>
                                <div className="flex items-center space-x-2" data-oid="q7ochq3">
                                    <span
                                        className="text-sm text-slate-500 dark:text-slate-400"
                                        data-oid="ndtfjy7"
                                    >
                                        Days left:
                                    </span>
                                    <span
                                        className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-2 py-1 rounded text-sm font-medium"
                                        data-oid="j7gtbjb"
                                    >
                                        23 days
                                    </span>
                                </div>
                            </div>

                            <div data-oid="d_wxgfv">
                                <h3
                                    className="text-lg font-semibold text-slate-900 dark:text-white mb-2"
                                    data-oid="bvvw688"
                                >
                                    {projectInfo.name}
                                </h3>
                                <p
                                    className="text-slate-600 dark:text-slate-300 mb-4"
                                    data-oid="p5m11nr"
                                >
                                    {projectInfo.description}
                                </p>

                                <div
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
                                    data-oid="k:df_s8"
                                >
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="ycwtwf0"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="qu.-b.v"
                                        >
                                            Status
                                        </div>
                                        <div
                                            className="text-green-600 dark:text-green-400 font-medium"
                                            data-oid="5_a10m0"
                                        >
                                            {projectInfo.status}
                                        </div>
                                    </div>
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid=".rj5xn4"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="onamahy"
                                        >
                                            Priority
                                        </div>
                                        <div
                                            className="text-red-600 dark:text-red-400 font-medium"
                                            data-oid="buaecj."
                                        >
                                            {projectInfo.priority}
                                        </div>
                                    </div>
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="9lc9xal"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="34sibv2"
                                        >
                                            Deadline
                                        </div>
                                        <div
                                            className="text-amber-600 dark:text-amber-400 font-medium"
                                            data-oid="i-kx6vq"
                                        >
                                            {projectInfo.deadline}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4" data-oid="r4_-280">
                                    <div
                                        className="flex justify-between items-center mb-2"
                                        data-oid="y2ej89t"
                                    >
                                        <span
                                            className="text-sm text-slate-600 dark:text-slate-300"
                                            data-oid="n4mjymw"
                                        >
                                            Progress
                                        </span>
                                        <span
                                            className="text-sm font-medium text-slate-900 dark:text-white"
                                            data-oid="b-rkdxf"
                                        >
                                            {projectInfo.progress}%
                                        </span>
                                    </div>
                                    <div
                                        className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"
                                        data-oid="vang3o2"
                                    >
                                        <div
                                            className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${projectInfo.progress}%` }}
                                            data-oid="ixl:xnr"
                                        ></div>
                                    </div>
                                </div>

                                <div data-oid="twrgezw">
                                    <span
                                        className="text-sm text-slate-600 dark:text-slate-300 mb-2 block"
                                        data-oid="4qipva."
                                    >
                                        Tech Stack:
                                    </span>
                                    <div className="flex flex-wrap gap-2" data-oid="lnbw-qr">
                                        {projectInfo.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                                                data-oid="s7ni8.h"
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
                    <div className="space-y-8" data-oid="4pf.-nf">
                        {/* 3. Team Members List */}
                        <section
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                            data-oid="ig0v-1p"
                        >
                            <h2
                                className="text-xl font-bold text-slate-900 dark:text-white flex items-center mb-6"
                                data-oid="i40zf8p"
                            >
                                <span className="mr-3" data-oid="h4l-hsd">
                                    👥
                                </span>
                                Team Members
                            </h2>

                            <div className="space-y-4" data-oid="i146tvk">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                                        data-oid="568k8yr"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="pr8:zf9"
                                        >
                                            <div
                                                className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center relative"
                                                data-oid="spw.tfi"
                                            >
                                                <span
                                                    className="text-white font-bold text-sm"
                                                    data-oid="rgwcq8o"
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
                                                    data-oid="o7r4ih5"
                                                ></div>
                                            </div>
                                            <div data-oid="8:lbr1c">
                                                <div
                                                    className="font-medium text-slate-900 dark:text-white"
                                                    data-oid="2veo5vw"
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="text-sm text-slate-500 dark:text-slate-400"
                                                    data-oid="lzc:kdz"
                                                >
                                                    {member.role}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right" data-oid="069.gjp">
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
                                                data-oid="79m_wkb"
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
                            data-oid="ybibnzd"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="ac8sw73"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="6jozi2c"
                                >
                                    <span className="mr-3" data-oid="it099_g">
                                        📢
                                    </span>
                                    Announcements
                                </h2>
                                <div className="flex space-x-2" data-oid="7bn1ck_">
                                    <button
                                        className="text-xs px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300 rounded"
                                        data-oid="-nzjx.f"
                                    >
                                        High
                                    </button>
                                    <button
                                        className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300 rounded"
                                        data-oid="8r8oild"
                                    >
                                        Medium
                                    </button>
                                    <button
                                        className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300 rounded"
                                        data-oid="ptmknfz"
                                    >
                                        Low
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3" data-oid="zx6tl:n">
                                {announcements.slice(0, 4).map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                                        onClick={() => handleAnnouncementClick(announcement)}
                                        data-oid="syc5_yd"
                                    >
                                        <div
                                            className="flex items-start justify-between"
                                            data-oid="4nkf:4q"
                                        >
                                            <div className="flex-1" data-oid="ooup25q">
                                                <div
                                                    className="flex items-center space-x-2 mb-2"
                                                    data-oid="l48kqlh"
                                                >
                                                    <span className="text-sm" data-oid="tbgy1_v">
                                                        {announcement.priority === 'high'
                                                            ? '🔴'
                                                            : announcement.priority === 'medium'
                                                              ? '🟡'
                                                              : '🟢'}
                                                    </span>
                                                    <h4
                                                        className="font-medium text-slate-900 dark:text-white text-sm"
                                                        data-oid="4k0zfh4"
                                                    >
                                                        {announcement.title}
                                                    </h4>
                                                </div>
                                                <p
                                                    className="text-sm text-slate-600 dark:text-slate-300 mb-2"
                                                    data-oid="dcxhqe8"
                                                >
                                                    {announcement.message.substring(0, 80)}...
                                                </p>
                                                <div
                                                    className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400"
                                                    data-oid="ur.wnfk"
                                                >
                                                    <span data-oid="ou0c:l2">
                                                        {announcement.time}
                                                    </span>
                                                    <span data-oid="0o-flzl">•</span>
                                                    <span data-oid="z71cr-m">
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
                    data-oid="3gd2-ds"
                >
                    <div
                        className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="1_0_x.e"
                    >
                        <div className="flex justify-between items-start mb-6" data-oid="0af1.yz">
                            <div data-oid="p2:7psh">
                                <h2
                                    className="text-2xl font-bold mb-2 text-slate-900 dark:text-white"
                                    data-oid=":revzj2"
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div
                                    className="flex items-center space-x-3 text-sm"
                                    data-oid="7g95bk_"
                                >
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(
                                            selectedAnnouncement.priority,
                                        )}`}
                                        data-oid="mi42xn0"
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                                        data-oid="7q8vut_"
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span
                                        className="text-slate-500 dark:text-slate-400"
                                        data-oid=":2s8e1-"
                                    >
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors text-slate-500 dark:text-slate-400"
                                data-oid="pc7o7dh"
                            >
                                ×
                            </button>
                        </div>
                        <div className="space-y-6" data-oid="t6_08xk">
                            <div data-oid="k615wdh">
                                <p
                                    className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                                    data-oid="abwea0x"
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>
                            <div className="flex justify-center space-x-4" data-oid="z__6.y0">
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                                    data-oid=".rl.ols"
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
