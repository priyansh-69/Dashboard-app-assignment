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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900" data-oid="kygm7o7">
            {/* Demo Data Notice */}
            {isDemoData && (
                <div
                    className="bg-amber-100 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6"
                    data-oid="vgv87a1"
                >
                    <div className="flex" data-oid="ikyuqdv">
                        <div className="flex-shrink-0" data-oid="m.qieze">
                            <span className="text-amber-500" data-oid="c8v.voi">
                                ⚠️
                            </span>
                        </div>
                        <div className="ml-3" data-oid="2sc.akf">
                            <p
                                className="text-sm text-amber-700 dark:text-amber-300"
                                data-oid="4dnmo.p"
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
                data-oid="vdm.1b0"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="520ok7p">
                    <div className="flex justify-between items-center h-16" data-oid="2qug5mt">
                        <div className="flex items-center space-x-4" data-oid="2gi:-mi">
                            <div
                                className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center"
                                data-oid="-h_61yc"
                            >
                                <span className="text-white font-bold text-lg" data-oid="g54.lls">
                                    🚀
                                </span>
                            </div>
                            <div data-oid="25d83jd">
                                <h1
                                    className="text-xl font-bold text-slate-900 dark:text-white"
                                    data-oid=".7eoc27"
                                >
                                    Intern Dashboard - Minimal View
                                </h1>
                                <p
                                    className="text-sm text-slate-500 dark:text-slate-400"
                                    data-oid="0lrcw9q"
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4" data-oid="47cs4st">
                            <div className="text-right" data-oid="1ckobv4">
                                <div
                                    className="text-lg font-bold text-slate-900 dark:text-white"
                                    data-oid="_oei99v"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs text-slate-500 dark:text-slate-400"
                                    data-oid="7it1:8h"
                                >
                                    Current Time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="xy9xb3x">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="iln7pr:">
                    {/* Left Column */}
                    <div className="space-y-8" data-oid="2866kz_">
                        {/* 1. Intern Profile Card */}
                        <section
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                            data-oid="0rrc7ip"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="e6z6low"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="3ethvxb"
                                >
                                    <span className="mr-3" data-oid="zzqu1dn">
                                        👤
                                    </span>
                                    Intern Profile
                                </h2>
                                <button
                                    className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                                    data-oid="5i69ygl"
                                >
                                    ✏️ Quick Edit
                                </button>
                            </div>

                            <div className="flex items-start space-x-4" data-oid="t5q48_g">
                                <div
                                    className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center"
                                    data-oid="qvozwe7"
                                >
                                    <span
                                        className="text-white font-bold text-xl"
                                        data-oid="4w_h9qb"
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div className="flex-1" data-oid="0ps_ees">
                                    <h3
                                        className="text-lg font-semibold text-slate-900 dark:text-white"
                                        data-oid="q2q.osa"
                                    >
                                        {internProfile.name}
                                    </h3>
                                    <p
                                        className="text-indigo-600 dark:text-indigo-400 font-medium"
                                        data-oid="pd.yb-6"
                                    >
                                        {internProfile.role}
                                    </p>
                                    <div
                                        className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
                                        data-oid="7h.15ny"
                                    >
                                        <div data-oid="i4wrev-">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="y0we6b5"
                                            >
                                                Email:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="33d7f6r"
                                            >
                                                {internProfile.email}
                                            </p>
                                        </div>
                                        <div data-oid="1msobxm">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="qsn1:-5"
                                            >
                                                College:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="tdudxwx"
                                            >
                                                {internProfile.college}
                                            </p>
                                        </div>
                                        <div data-oid="gcxu375">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="pxvs4ts"
                                            >
                                                Year:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="l7gak-0"
                                            >
                                                {internProfile.year}
                                            </p>
                                        </div>
                                        <div data-oid="qflatt0">
                                            <span
                                                className="text-slate-500 dark:text-slate-400"
                                                data-oid="qiiccad"
                                            >
                                                Manager:
                                            </span>
                                            <p
                                                className="text-slate-900 dark:text-white font-medium"
                                                data-oid="-6:5jra"
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
                            data-oid="rwr-n_0"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="lk.2twf"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="ji9:8a:"
                                >
                                    <span className="mr-3" data-oid="biid5yw">
                                        🚀
                                    </span>
                                    Assigned Project
                                </h2>
                                <div className="flex items-center space-x-2" data-oid="9l9zxw-">
                                    <span
                                        className="text-sm text-slate-500 dark:text-slate-400"
                                        data-oid="qtc3ely"
                                    >
                                        Days left:
                                    </span>
                                    <span
                                        className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-2 py-1 rounded text-sm font-medium"
                                        data-oid="sr4wi83"
                                    >
                                        23 days
                                    </span>
                                </div>
                            </div>

                            <div data-oid="-xui34w">
                                <h3
                                    className="text-lg font-semibold text-slate-900 dark:text-white mb-2"
                                    data-oid="1om5a7t"
                                >
                                    {projectInfo.name}
                                </h3>
                                <p
                                    className="text-slate-600 dark:text-slate-300 mb-4"
                                    data-oid=":qih1c0"
                                >
                                    {projectInfo.description}
                                </p>

                                <div
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
                                    data-oid="f7kuht-"
                                >
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="se-aw8y"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="8sz_g3t"
                                        >
                                            Status
                                        </div>
                                        <div
                                            className="text-green-600 dark:text-green-400 font-medium"
                                            data-oid="89wvs:h"
                                        >
                                            {projectInfo.status}
                                        </div>
                                    </div>
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="lddnsz2"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="g1i7.kb"
                                        >
                                            Priority
                                        </div>
                                        <div
                                            className="text-red-600 dark:text-red-400 font-medium"
                                            data-oid="xin5kgw"
                                        >
                                            {projectInfo.priority}
                                        </div>
                                    </div>
                                    <div
                                        className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg"
                                        data-oid="fe30zg2"
                                    >
                                        <div
                                            className="text-xs text-slate-500 dark:text-slate-400 mb-1"
                                            data-oid="j1ywjxb"
                                        >
                                            Deadline
                                        </div>
                                        <div
                                            className="text-amber-600 dark:text-amber-400 font-medium"
                                            data-oid="28u3esv"
                                        >
                                            {projectInfo.deadline}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4" data-oid="klf:otv">
                                    <div
                                        className="flex justify-between items-center mb-2"
                                        data-oid="-kf4suw"
                                    >
                                        <span
                                            className="text-sm text-slate-600 dark:text-slate-300"
                                            data-oid="cg.fgjq"
                                        >
                                            Progress
                                        </span>
                                        <span
                                            className="text-sm font-medium text-slate-900 dark:text-white"
                                            data-oid="qjo0a4l"
                                        >
                                            {projectInfo.progress}%
                                        </span>
                                    </div>
                                    <div
                                        className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"
                                        data-oid="jurng0r"
                                    >
                                        <div
                                            className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${projectInfo.progress}%` }}
                                            data-oid="x.8pe1l"
                                        ></div>
                                    </div>
                                </div>

                                <div data-oid="boiub.a">
                                    <span
                                        className="text-sm text-slate-600 dark:text-slate-300 mb-2 block"
                                        data-oid="tip2:2b"
                                    >
                                        Tech Stack:
                                    </span>
                                    <div className="flex flex-wrap gap-2" data-oid="nqqvsla">
                                        {projectInfo.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                                                data-oid="93ya7sy"
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
                    <div className="space-y-8" data-oid="-n7m8u8">
                        {/* 3. Team Members List */}
                        <section
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6"
                            data-oid="a2:51yw"
                        >
                            <h2
                                className="text-xl font-bold text-slate-900 dark:text-white flex items-center mb-6"
                                data-oid="y6r:ch0"
                            >
                                <span className="mr-3" data-oid="8y1f:2h">
                                    👥
                                </span>
                                Team Members
                            </h2>

                            <div className="space-y-4" data-oid="iq07smb">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                                        data-oid="1qan_kp"
                                    >
                                        <div
                                            className="flex items-center space-x-3"
                                            data-oid="p978s7s"
                                        >
                                            <div
                                                className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center relative"
                                                data-oid="nqfi_og"
                                            >
                                                <span
                                                    className="text-white font-bold text-sm"
                                                    data-oid="sitk_.b"
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
                                                    data-oid="3a_0kyy"
                                                ></div>
                                            </div>
                                            <div data-oid="-1jplu7">
                                                <div
                                                    className="font-medium text-slate-900 dark:text-white"
                                                    data-oid=":0-7.-8"
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    className="text-sm text-slate-500 dark:text-slate-400"
                                                    data-oid="qzdhpri"
                                                >
                                                    {member.role}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right" data-oid="u-v0r_h">
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
                                                data-oid="t.tpv6x"
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
                            data-oid="nbfditg"
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="4:wm-t-"
                            >
                                <h2
                                    className="text-xl font-bold text-slate-900 dark:text-white flex items-center"
                                    data-oid="5jbqy1c"
                                >
                                    <span className="mr-3" data-oid="h2i05qm">
                                        📢
                                    </span>
                                    Announcements
                                </h2>
                                <div className="flex space-x-2" data-oid="e:rscc_">
                                    <button
                                        className="text-xs px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300 rounded"
                                        data-oid="k-vhaf5"
                                    >
                                        High
                                    </button>
                                    <button
                                        className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300 rounded"
                                        data-oid="h5y0af4"
                                    >
                                        Medium
                                    </button>
                                    <button
                                        className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300 rounded"
                                        data-oid="o7i:j_4"
                                    >
                                        Low
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3" data-oid=".:.bdx4">
                                {announcements.slice(0, 4).map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                                        onClick={() => handleAnnouncementClick(announcement)}
                                        data-oid="-e.1wta"
                                    >
                                        <div
                                            className="flex items-start justify-between"
                                            data-oid="wb:qmx1"
                                        >
                                            <div className="flex-1" data-oid="meelumb">
                                                <div
                                                    className="flex items-center space-x-2 mb-2"
                                                    data-oid="nujhz.s"
                                                >
                                                    <span className="text-sm" data-oid="osup8ie">
                                                        {announcement.priority === 'high'
                                                            ? '🔴'
                                                            : announcement.priority === 'medium'
                                                              ? '🟡'
                                                              : '🟢'}
                                                    </span>
                                                    <h4
                                                        className="font-medium text-slate-900 dark:text-white text-sm"
                                                        data-oid="7l-k.41"
                                                    >
                                                        {announcement.title}
                                                    </h4>
                                                </div>
                                                <p
                                                    className="text-sm text-slate-600 dark:text-slate-300 mb-2"
                                                    data-oid="zn4..m4"
                                                >
                                                    {announcement.message.substring(0, 80)}...
                                                </p>
                                                <div
                                                    className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400"
                                                    data-oid="0:al1ci"
                                                >
                                                    <span data-oid="7:.5ihk">
                                                        {announcement.time}
                                                    </span>
                                                    <span data-oid="1godcfj">•</span>
                                                    <span data-oid="rs7_8vi">
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
                    data-oid="-ngh.2h"
                >
                    <div
                        className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="z3ogz1w"
                    >
                        <div className="flex justify-between items-start mb-6" data-oid="716.4kn">
                            <div data-oid="6c:5v62">
                                <h2
                                    className="text-2xl font-bold mb-2 text-slate-900 dark:text-white"
                                    data-oid="anboeqp"
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div
                                    className="flex items-center space-x-3 text-sm"
                                    data-oid="tr2hd8-"
                                >
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                        data-oid="_ofhwyt"
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                                        data-oid="8uo7yvn"
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span
                                        className="text-slate-500 dark:text-slate-400"
                                        data-oid="8::m.34"
                                    >
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors text-slate-500 dark:text-slate-400"
                                data-oid="s2fsg5x"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6" data-oid="etty9lo">
                            <div data-oid="1dkx5un">
                                <p
                                    className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                                    data-oid="jpyinhm"
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>

                            <div className="flex justify-center space-x-4" data-oid="2p.hb_j">
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                                    data-oid="po2b95p"
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
