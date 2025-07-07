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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Demo Data Notice */}
            {isDemoData && (
                <div className="bg-amber-100 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-6">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <span className="text-amber-500">⚠️</span>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-amber-700 dark:text-amber-300">
                                {demoDataNotice}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Header */}
            <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">🚀</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Priyansh Dashboard - Minimal View
                                </h1>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <div className="text-lg font-bold text-slate-900 dark:text-white">
                                    {formatTime(currentTime)}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                    Current Time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* 1. Intern Profile Card */}
                        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                                    <span className="mr-3">👤</span>
                                    Intern Profile
                                </h2>
                                <button className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                                    ✏️ Quick Edit
                                </button>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                        {internProfile.name}
                                    </h3>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                                        {internProfile.role}
                                    </p>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <span className="text-slate-500 dark:text-slate-400">
                                                Email:
                                            </span>
                                            <p className="text-slate-900 dark:text-white font-medium">
                                                {internProfile.email}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 dark:text-slate-400">
                                                College:
                                            </span>
                                            <p className="text-slate-900 dark:text-white font-medium">
                                                {internProfile.college}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 dark:text-slate-400">
                                                Year:
                                            </span>
                                            <p className="text-slate-900 dark:text-white font-medium">
                                                {internProfile.year}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 dark:text-slate-400">
                                                Manager:
                                            </span>
                                            <p className="text-slate-900 dark:text-white font-medium">
                                                {internProfile.manager}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2. Assigned Project Info */}
                        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                                    <span className="mr-3">🚀</span>
                                    Assigned Project
                                </h2>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-slate-500 dark:text-slate-400">
                                        Days left:
                                    </span>
                                    <span className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-2 py-1 rounded text-sm font-medium">
                                        23 days
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                    {projectInfo.name}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    {projectInfo.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                                            Status
                                        </div>
                                        <div className="text-green-600 dark:text-green-400 font-medium">
                                            {projectInfo.status}
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                                            Priority
                                        </div>
                                        <div className="text-red-600 dark:text-red-400 font-medium">
                                            {projectInfo.priority}
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                                            Deadline
                                        </div>
                                        <div className="text-amber-600 dark:text-amber-400 font-medium">
                                            {projectInfo.deadline}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-slate-600 dark:text-slate-300">
                                            Progress
                                        </span>
                                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                                            {projectInfo.progress}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                        <div
                                            className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${projectInfo.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-sm text-slate-600 dark:text-slate-300 mb-2 block">
                                        Tech Stack:
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {projectInfo.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
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
                    <div className="space-y-8">
                        {/* 3. Team Members List */}
                        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center mb-6">
                                <span className="mr-3">👥</span>
                                Team Members
                            </h2>

                            <div className="space-y-4">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center relative">
                                                <span className="text-white font-bold text-sm">
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
                                                ></div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-slate-900 dark:text-white">
                                                    {member.name}
                                                </div>
                                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                                    {member.role}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
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
                        <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                                    <span className="mr-3">📢</span>
                                    Announcements
                                </h2>
                                <div className="flex space-x-2">
                                    <button className="text-xs px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300 rounded">
                                        High
                                    </button>
                                    <button className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300 rounded">
                                        Medium
                                    </button>
                                    <button className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300 rounded">
                                        Low
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {announcements.slice(0, 4).map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                                        onClick={() => handleAnnouncementClick(announcement)}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <span className="text-sm">
                                                        {announcement.priority === 'high'
                                                            ? '🔴'
                                                            : announcement.priority === 'medium'
                                                              ? '🟡'
                                                              : '🟢'}
                                                    </span>
                                                    <h4 className="font-medium text-slate-900 dark:text-white text-sm">
                                                        {announcement.title}
                                                    </h4>
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                                                    {announcement.message.substring(0, 80)}...
                                                </p>
                                                <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400">
                                                    <span>{announcement.time}</span>
                                                    <span>•</span>
                                                    <span>{announcement.author}</span>
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
                >
                    <div
                        className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                                    {selectedAnnouncement.title}
                                </h2>
                                <div className="flex items-center space-x-3 text-sm">
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(
                                            selectedAnnouncement.priority,
                                        )}`}
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span className="text-slate-500 dark:text-slate-400">
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors text-slate-500 dark:text-slate-400"
                            >
                                ×
                            </button>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                    {selectedAnnouncement.message}
                                </p>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
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
