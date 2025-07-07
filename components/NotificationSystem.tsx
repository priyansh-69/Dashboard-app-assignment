'use client';

import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface Notification {
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    timestamp: Date;
    read: boolean;
    action?: {
        label: string;
        onClick: () => void;
    };
}

export function NotificationSystem() {
    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: '1',
            title: 'New Announcement',
            message: 'Daily stand-up meeting has been moved to 10:30 AM',
            type: 'info',
            timestamp: new Date(Date.now() - 5 * 60 * 1000),
            read: false,
        },
        {
            id: '2',
            title: 'Task Deadline',
            message: 'API Integration Testing is due in 2 days',
            type: 'warning',
            timestamp: new Date(Date.now() - 15 * 60 * 1000),
            read: false,
        },
        {
            id: '3',
            title: 'Task Completed',
            message: 'User authentication implementation has been completed',
            type: 'success',
            timestamp: new Date(Date.now() - 30 * 60 * 1000),
            read: true,
        },
    ]);

    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        // Simulate real-time notifications
        const interval = setInterval(() => {
            if (Math.random() > 0.8) {
                // 20% chance every 30 seconds
                addNotification({
                    title: 'System Update',
                    message: 'Your productivity score has been updated',
                    type: 'info',
                });
            }
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const addNotification = (notificationData: Partial<Notification>) => {
        const newNotification: Notification = {
            id: Date.now().toString(),
            title: notificationData.title || 'Notification',
            message: notificationData.message || '',
            type: notificationData.type || 'info',
            timestamp: new Date(),
            read: false,
            action: notificationData.action,
        };

        setNotifications((prev) => [newNotification, ...prev]);

        // Show toast notification
        const toastOptions = {
            duration: 4000,
            style: {
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-primary)',
            },
        };

        switch (newNotification.type) {
            case 'success':
                toast.success(newNotification.message, toastOptions);
                break;
            case 'error':
                toast.error(newNotification.message, toastOptions);
                break;
            case 'warning':
                toast(newNotification.message, { ...toastOptions, icon: '⚠️' });
                break;
            default:
                toast(newNotification.message, { ...toastOptions, icon: 'ℹ️' });
        }
    };

    const markAsRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id ? { ...notification, read: true } : notification,
            ),
        );
    };

    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })));
    };

    const deleteNotification = (id: string) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    const getUnreadCount = () => {
        return notifications.filter((n) => !n.read).length;
    };

    const getNotificationIcon = (type: string) => {
        switch (type) {
            case 'success':
                return '✅';
            case 'error':
                return '❌';
            case 'warning':
                return '⚠️';
            default:
                return 'ℹ️';
        }
    };

    const getNotificationColor = (type: string) => {
        switch (type) {
            case 'success':
                return 'border-l-green-500';
            case 'error':
                return 'border-l-red-500';
            case 'warning':
                return 'border-l-yellow-500';
            default:
                return 'border-l-blue-500';
        }
    };

    const formatTimeAgo = (timestamp: Date) => {
        const now = new Date();
        const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));

        if (diffInMinutes < 1) return 'Just now';
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
        return `${Math.floor(diffInMinutes / 1440)}d ago`;
    };

    return (
        <>
            <Toaster position="top-right" data-oid="wosvu7t" />

            {/* Notification Bell */}
            <div className="relative" data-oid=":a1:7sa">
                <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 rounded-lg transition-all hover:scale-110"
                    style={{
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                    }}
                    data-oid="6tr65c8"
                >
                    <span className="text-xl" data-oid="33wbg0e">
                        🔔
                    </span>
                    {getUnreadCount() > 0 && (
                        <span
                            className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center text-white font-bold"
                            style={{ background: 'var(--accent-red)' }}
                            data-oid="8.3d-on"
                        >
                            {getUnreadCount()}
                        </span>
                    )}
                </button>

                {/* Notification Dropdown */}
                {showNotifications && (
                    <div
                        className="absolute right-0 top-12 w-80 max-h-96 overflow-y-auto glass-effect rounded-xl p-4 z-50"
                        style={{ background: 'var(--bg-secondary)' }}
                        data-oid="bqqg7gb"
                    >
                        <div className="flex items-center justify-between mb-4" data-oid="-qiedlw">
                            <h3
                                className="font-bold"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="pg46rfy"
                            >
                                Notifications
                            </h3>
                            <div className="flex space-x-2" data-oid="az56mg9">
                                <button
                                    onClick={markAllAsRead}
                                    className="text-xs px-2 py-1 rounded-md transition-all hover:scale-105"
                                    style={{
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-secondary)',
                                    }}
                                    data-oid="640jk30"
                                >
                                    Mark all read
                                </button>
                                <button
                                    onClick={() => setShowNotifications(false)}
                                    className="text-lg hover:text-red-400 transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="hhiy3i6"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3" data-oid="xe1ac6l">
                            {notifications.length === 0 ? (
                                <div
                                    className="text-center py-8"
                                    style={{ color: 'var(--text-muted)' }}
                                    data-oid=".4_4avr"
                                >
                                    No notifications
                                </div>
                            ) : (
                                notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className={`p-3 rounded-lg border-l-4 transition-all hover:scale-105 cursor-pointer ${getNotificationColor(notification.type)} ${
                                            !notification.read ? 'bg-opacity-20' : ''
                                        }`}
                                        style={{
                                            background: notification.read
                                                ? 'var(--bg-tertiary)'
                                                : 'var(--bg-card)',
                                            opacity: notification.read ? 0.7 : 1,
                                        }}
                                        onClick={() => markAsRead(notification.id)}
                                        data-oid="v.vbflb"
                                    >
                                        <div
                                            className="flex items-start space-x-3"
                                            data-oid="dlqufz1"
                                        >
                                            <span className="text-lg" data-oid="q0v4ei7">
                                                {getNotificationIcon(notification.type)}
                                            </span>
                                            <div className="flex-1" data-oid="vh4pjbu">
                                                <div
                                                    className="flex items-start justify-between"
                                                    data-oid="c5rt:-o"
                                                >
                                                    <h4
                                                        className="font-medium text-sm"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="h:rtzgz"
                                                    >
                                                        {notification.title}
                                                    </h4>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            deleteNotification(notification.id);
                                                        }}
                                                        className="text-xs hover:text-red-400 transition-colors"
                                                        style={{ color: 'var(--text-muted)' }}
                                                        data-oid="l5v:yg0"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                                <p
                                                    className="text-xs mt-1"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="e30rr4l"
                                                >
                                                    {notification.message}
                                                </p>
                                                <div
                                                    className="flex items-center justify-between mt-2"
                                                    data-oid="9giuq-0"
                                                >
                                                    <span
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-muted)' }}
                                                        data-oid="5tm0g:i"
                                                    >
                                                        {formatTimeAgo(notification.timestamp)}
                                                    </span>
                                                    {notification.action && (
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                notification.action!.onClick();
                                                            }}
                                                            className="text-xs px-2 py-1 rounded-md transition-all hover:scale-105"
                                                            style={{
                                                                background:
                                                                    'var(--gradient-primary)',
                                                                color: 'white',
                                                            }}
                                                            data-oid="bwin8sn"
                                                        >
                                                            {notification.action.label}
                                                        </button>
                                                    )}
                                                </div>
                                                {!notification.read && (
                                                    <div
                                                        className="w-2 h-2 rounded-full mt-2"
                                                        style={{ background: 'var(--accent-red)' }}
                                                        data-oid="y7u5u.m"
                                                    ></div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
