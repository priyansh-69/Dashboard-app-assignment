'use client';

import { useState, useEffect } from 'react';
import { Charts } from '../components/Charts';
import { TaskManager } from '../components/TaskManager';
import { TimeTracker } from '../components/TimeTracker';
import { NotificationSystem } from '../components/NotificationSystem';
import { ThemeCustomizer } from '../components/ThemeCustomizer';
import { GlobalSearch } from '../components/GlobalSearch';

export default function Page() {
    const [currentStatus, setCurrentStatus] = useState('active');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [inTime, setInTime] = useState('09:00 AM');
    const [outTime, setOutTime] = useState('06:00 PM');
    const [isEditingTime, setIsEditingTime] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
    const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);

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
        employeeId: 'PGT-2024-INT-001',
        location: 'San Francisco, CA',
        phone: '+1 (555) 123-4567',
        emergencyContact: 'Jennifer Johnson - +1 (555) 987-6543',
        internshipDuration: '12 weeks',
        weeklyHours: '40 hours',
        stipend: '$2,500/month',
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
        projectId: 'PGT-CAP-2024',
        budget: '$125,000',
        teamSize: 8,
        clientName: 'TechCorp Solutions',
        estimatedHours: '480 hours',
        completedTasks: 23,
        totalTasks: 35,
        nextMilestone: 'Beta Testing Phase',
        milestoneDate: 'June 28, 2024',
    };

    // Additional projects
    const allProjects = [
        projectInfo,
        {
            name: 'Mobile App Redesign',
            description: 'Redesigning the company mobile application with modern UI/UX principles.',
            status: 'Planning',
            progress: 15,
            techStack: ['React Native', 'TypeScript', 'Firebase'],
            deadline: 'August 30, 2024',
            priority: 'Medium',
            projectId: 'PGT-MAR-2024',
            budget: '$85,000',
            teamSize: 5,
            clientName: 'Internal Project',
            estimatedHours: '320 hours',
            completedTasks: 3,
            totalTasks: 20,
            nextMilestone: 'Wireframe Approval',
            milestoneDate: 'June 20, 2024',
        },
        {
            name: 'API Integration Suite',
            description:
                'Building a comprehensive API integration platform for third-party services.',
            status: 'Testing',
            progress: 85,
            techStack: ['Python', 'FastAPI', 'Redis', 'MongoDB'],
            deadline: 'June 25, 2024',
            priority: 'High',
            projectId: 'PGT-AIS-2024',
            budget: '$95,000',
            teamSize: 6,
            clientName: 'DataFlow Inc.',
            estimatedHours: '400 hours',
            completedTasks: 28,
            totalTasks: 33,
            nextMilestone: 'Production Deployment',
            milestoneDate: 'June 22, 2024',
        },
    ];

    const teamMembers = [
        {
            name: 'Sarah Chen',
            role: 'Senior Developer',
            avatar: 'SC',
            status: 'active',
            inTime: '08:30 AM',
            outTime: '05:30 PM',
            email: 'sarah.chen@pgt.com',
            department: 'Engineering',
            experience: '8 years',
            currentProject: 'Customer Analytics Platform',
            skills: ['React', 'Node.js', 'Python', 'AWS'],
            location: 'San Francisco, CA',
        },
        {
            name: 'Mike Rodriguez',
            role: 'UI/UX Designer',
            avatar: 'MR',
            status: 'out-of-office',
            inTime: '09:00 AM',
            outTime: '06:00 PM',
            email: 'mike.rodriguez@pgt.com',
            department: 'Design',
            experience: '5 years',
            currentProject: 'Mobile App Redesign',
            skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
            location: 'Los Angeles, CA',
        },
        {
            name: 'Emily Davis',
            role: 'Product Manager',
            avatar: 'ED',
            status: 'active',
            inTime: '08:00 AM',
            outTime: '05:00 PM',
            email: 'emily.davis@pgt.com',
            department: 'Product',
            experience: '6 years',
            currentProject: 'Customer Analytics Platform',
            skills: ['Agile', 'Scrum', 'Analytics', 'Strategy'],
            location: 'New York, NY',
        },
        {
            name: 'James Wilson',
            role: 'DevOps Engineer',
            avatar: 'JW',
            status: 'inactive',
            inTime: '10:00 AM',
            outTime: '07:00 PM',
            email: 'james.wilson@pgt.com',
            department: 'Infrastructure',
            experience: '7 years',
            currentProject: 'API Integration Suite',
            skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
            location: 'Austin, TX',
        },
        {
            name: 'Lisa Park',
            role: 'QA Engineer',
            avatar: 'LP',
            status: 'active',
            inTime: '09:30 AM',
            outTime: '06:30 PM',
            email: 'lisa.park@pgt.com',
            department: 'Quality Assurance',
            experience: '4 years',
            currentProject: 'API Integration Suite',
            skills: ['Selenium', 'Jest', 'Cypress', 'Manual Testing'],
            location: 'Seattle, WA',
        },
        {
            name: 'David Kim',
            role: 'Data Analyst',
            avatar: 'DK',
            status: 'busy',
            inTime: '08:45 AM',
            outTime: '05:45 PM',
            email: 'david.kim@pgt.com',
            department: 'Analytics',
            experience: '3 years',
            currentProject: 'Customer Analytics Platform',
            skills: ['Python', 'SQL', 'Tableau', 'R'],
            location: 'Chicago, IL',
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
            author: 'Sarah Chen',
            department: 'Engineering',
            location: 'Conference Room B, 3rd Floor',
            attendees: ['Alex Johnson', 'Emily Davis', 'David Kim', 'Lisa Park'],
            agenda: [
                'Sprint progress review',
                'Blocker discussions',
                'Task assignments for today',
                'Demo preparation',
            ],

            duration: '30 minutes',
            meetingLink: 'https://meet.pgt.com/standup-eng-001',
            isRecurring: true,
            recurrence: 'Daily at 10:00 AM',
        },
        {
            id: 2,
            title: 'Project Deadline Extended',
            message:
                'Customer Analytics Platform deadline extended to July 15th due to scope changes',
            time: 'Yesterday, 3:45 PM',
            priority: 'medium',
            type: 'update',
            author: 'Emily Davis',
            department: 'Product Management',
            details:
                'The client has requested additional features including real-time notifications and advanced filtering capabilities. This will require an additional 2 weeks of development time.',
            affectedProjects: ['Customer Analytics Platform'],
            newDeadline: 'July 15, 2024',
            previousDeadline: 'July 1, 2024',
            approvedBy: 'John Mitchell - VP Engineering',
            budgetImpact: '+$15,000',
        },
        {
            id: 3,
            title: 'Mentorship Session',
            message: 'One-on-one mentorship session scheduled for Friday at 4:00 PM',
            time: '2 days ago',
            priority: 'low',
            type: 'session',
            author: 'Sarah Chen',
            department: 'Engineering',
            location: "Sarah's Office - Room 305",
            topics: [
                'Career development planning',
                'Technical skill assessment',
                'Project feedback and guidance',
                'Industry best practices',
            ],

            duration: '60 minutes',
            preparationNotes:
                'Please prepare questions about React optimization and bring your recent code samples for review.',
            followUpActions: [
                'Schedule next session',
                'Complete skill assessment',
                'Review recommended resources',
            ],
        },
        {
            id: 4,
            title: 'Code Review Session',
            message: 'Weekly code review session moved to Thursday 2:00 PM',
            time: '3 days ago',
            priority: 'medium',
            type: 'review',
            author: 'James Wilson',
            department: 'Engineering',
            location: 'Conference Room A, 2nd Floor',
            reviewItems: [
                'Customer Analytics API endpoints',
                'Database optimization queries',
                'Frontend component refactoring',
                'Security vulnerability fixes',
            ],

            attendees: ['Sarah Chen', 'Alex Johnson', 'Lisa Park'],
            duration: '90 minutes',
            previousTime: 'Friday 3:00 PM',
            reason: 'Conflict with client demo preparation',
        },
        {
            id: 5,
            title: 'Company All-Hands Meeting',
            message: 'Quarterly all-hands meeting this Friday at 2:00 PM - Mandatory attendance',
            time: '1 hour ago',
            priority: 'high',
            type: 'meeting',
            author: 'Jennifer Martinez - CEO',
            department: 'Executive',
            location: 'Main Auditorium & Virtual',
            agenda: [
                'Q2 Financial Results',
                'New Product Announcements',
                'Team Recognition Awards',
                'Q3 Strategic Initiatives',
                'Open Q&A Session',
            ],

            duration: '120 minutes',
            meetingLink: 'https://meet.pgt.com/allhands-q2-2024',
            isRecurring: true,
            recurrence: 'Quarterly',
            dresscode: 'Business Casual',
            refreshments: 'Light snacks and beverages will be provided',
        },
        {
            id: 6,
            title: 'Security Training Mandatory',
            message: 'Complete cybersecurity training by end of week - Required for all employees',
            time: '6 hours ago',
            priority: 'high',
            type: 'training',
            author: 'IT Security Team',
            department: 'Information Technology',
            trainingModules: [
                'Password Security Best Practices',
                'Phishing Attack Recognition',
                'Data Protection Guidelines',
                'Incident Reporting Procedures',
            ],

            duration: '45 minutes',
            deadline: 'June 21, 2024',
            completionRate: '73%',
            trainingLink: 'https://training.pgt.com/security-2024',
            certificate: 'Digital certificate upon completion',
        },
        {
            id: 7,
            title: 'New Employee Onboarding',
            message: 'Welcome our new team members joining next Monday',
            time: '1 day ago',
            priority: 'low',
            type: 'announcement',
            author: 'HR Department',
            department: 'Human Resources',
            newEmployees: [
                { name: 'Rachel Green', role: 'Frontend Developer', department: 'Engineering' },
                { name: 'Tom Anderson', role: 'Marketing Specialist', department: 'Marketing' },
                { name: 'Nina Patel', role: 'Data Scientist', department: 'Analytics' },
            ],

            startDate: 'June 24, 2024',
            buddySystem: 'Each new employee will be paired with a buddy for their first month',
            welcomeLunch: 'Team lunch scheduled for Tuesday at 12:30 PM',
        },
        {
            id: 8,
            title: 'Office Renovation Update',
            message: 'East wing renovation will begin next month - Temporary workspace assignments',
            time: '3 days ago',
            priority: 'medium',
            type: 'facility',
            author: 'Facilities Management',
            department: 'Operations',
            renovationStart: 'July 1, 2024',
            renovationEnd: 'August 15, 2024',
            affectedAreas: ['East Wing Offices', 'Conference Rooms C & D', 'East Wing Kitchen'],
            temporaryArrangements:
                'Hot-desking system in West Wing, Additional meeting rooms booked in nearby building',
            improvements: [
                'Modern ergonomic furniture',
                'Enhanced lighting systems',
                'Improved HVAC system',
                'New collaboration spaces',
            ],

            budget: '$250,000',
        },
    ];

    // Performance metrics and stats
    const performanceStats = {
        tasksCompleted: 47,
        tasksInProgress: 8,
        tasksPending: 12,
        averageTaskTime: '2.3 hours',
        productivityScore: 87,
        codeCommits: 156,
        codeReviews: 23,
        bugsFixed: 15,
        featuresDelivered: 7,
        clientSatisfaction: 4.8,
        teamCollaboration: 4.6,
        technicalSkills: 4.4,
        weeklyGoalCompletion: 92,
    };

    // Recent activities
    const recentActivities = [
        {
            id: 1,
            action: 'Completed task',
            description: 'Implemented user authentication API endpoints',
            time: '2 hours ago',
            type: 'task',
            project: 'Customer Analytics Platform',
        },
        {
            id: 2,
            action: 'Code review',
            description: 'Reviewed pull request for dashboard components',
            time: '4 hours ago',
            type: 'review',
            project: 'Customer Analytics Platform',
        },
        {
            id: 3,
            action: 'Meeting attended',
            description: 'Daily standup with engineering team',
            time: '1 day ago',
            type: 'meeting',
            project: 'General',
        },
        {
            id: 4,
            action: 'Bug fixed',
            description: 'Resolved data visualization rendering issue',
            time: '1 day ago',
            type: 'bug',
            project: 'Customer Analytics Platform',
        },
        {
            id: 5,
            action: 'Documentation',
            description: 'Updated API documentation for new endpoints',
            time: '2 days ago',
            type: 'documentation',
            project: 'Customer Analytics Platform',
        },
    ];

    // Upcoming deadlines
    const upcomingDeadlines = [
        {
            id: 1,
            title: 'API Integration Testing',
            project: 'Customer Analytics Platform',
            deadline: 'June 22, 2024',
            daysLeft: 4,
            priority: 'high',
            assignee: 'Alex Johnson',
        },
        {
            id: 2,
            title: 'Security Training Completion',
            project: 'General',
            deadline: 'June 21, 2024',
            daysLeft: 3,
            priority: 'high',
            assignee: 'Alex Johnson',
        },
        {
            id: 3,
            title: 'Mobile App Wireframes',
            project: 'Mobile App Redesign',
            deadline: 'June 28, 2024',
            daysLeft: 10,
            priority: 'medium',
            assignee: 'Mike Rodriguez',
        },
        {
            id: 4,
            title: 'Database Migration Plan',
            project: 'API Integration Suite',
            deadline: 'June 25, 2024',
            daysLeft: 7,
            priority: 'medium',
            assignee: 'James Wilson',
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

    const handleAnnouncementClick = (announcement) => {
        setSelectedAnnouncement(announcement);
        setShowAnnouncementModal(true);
    };

    const closeAnnouncementModal = () => {
        setShowAnnouncementModal(false);
        setSelectedAnnouncement(null);
    };

    const getActivityIcon = (type) => {
        switch (type) {
            case 'task':
                return '✅';
            case 'review':
                return '👀';
            case 'meeting':
                return '🤝';
            case 'bug':
                return '🐛';
            case 'documentation':
                return '📝';
            default:
                return '📋';
        }
    };

    const getPriorityBadgeColor = (priority) => {
        switch (priority) {
            case 'high':
                return 'bg-red-500';
            case 'medium':
                return 'bg-yellow-500';
            case 'low':
                return 'bg-green-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div
            className="min-h-screen"
            style={{ background: 'var(--bg-primary)' }}
            data-oid="g_h-r6l"
        >
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none" data-oid="zyfxiia">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 float-animation"
                    style={{ background: 'var(--gradient-primary)' }}
                    data-oid="eozl6a0"
                ></div>
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 float-animation"
                    style={{ background: 'var(--gradient-secondary)', animationDelay: '1s' }}
                    data-oid="o4h2fsr"
                ></div>
            </div>

            {/* Header */}
            <header
                className="glass-effect border-b"
                style={{ borderColor: 'var(--border-primary)' }}
                data-oid="jk.r5d9"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="72vnwfw">
                    <div className="flex justify-between items-center h-20" data-oid="w4486b-">
                        <div className="flex items-center space-x-4" data-oid="9c:ygg:">
                            <div className="flex items-center space-x-3" data-oid="vwli_cu">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center glow-red"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="e2f53vp"
                                >
                                    <span
                                        className="text-white font-bold text-lg"
                                        data-oid="-_fn6qo"
                                    >
                                        PGT
                                    </span>
                                </div>
                                <div data-oid="pktv.5k">
                                    <h1
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="yjx90ox"
                                    >
                                        Intern Dashboard
                                    </h1>
                                    <p
                                        className="text-sm"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="52p3vkv"
                                    >
                                        {formatDate(currentTime)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Header Right - Search, Notifications, Time and Profile */}
                        <div className="flex items-center space-x-6" data-oid="bzx.utv">
                            {/* Global Search */}
                            <GlobalSearch data={{}} data-oid="dk39ka6" />

                            {/* Notifications */}
                            <NotificationSystem data-oid="japc9pt" />
                            {/* Live Clock */}
                            <div className="text-right" data-oid="n1_0pf1">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{ color: 'var(--accent-yellow)' }}
                                    data-oid="5eos8o5"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="c-7p_ha"
                                >
                                    Live Time
                                </div>
                            </div>

                            {/* Profile with Status */}
                            <div className="flex items-center space-x-3" data-oid="ls:fv37">
                                <div className="text-right" data-oid="3kjm1g7">
                                    <div
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="7baokmh"
                                    >
                                        Welcome, {internProfile.name.split(' ')[0]}
                                    </div>
                                    <div className="flex items-center space-x-2" data-oid="itil6:v">
                                        <span
                                            className="text-xs"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="gqqz7.2"
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
                                            data-oid="9m335gi"
                                        >
                                            {statusOptions.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                    data-oid="5:e9_4q"
                                                >
                                                    {option.icon} {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="relative" data-oid="gt6chn4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center glow-yellow"
                                        style={{ background: 'var(--gradient-secondary)' }}
                                        data-oid="reiiyqg"
                                    >
                                        <span
                                            className="text-black font-bold text-lg"
                                            data-oid="3pk_0o5"
                                        >
                                            {internProfile.avatar}
                                        </span>
                                    </div>
                                    <div
                                        className={`absolute -top-1 -right-1 w-4 h-4 ${getStatusInfo(currentStatus).color} rounded-full border-2`}
                                        style={{ borderColor: 'var(--bg-primary)' }}
                                        data-oid="0zjn4ae"
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
                data-oid="26fh1kx"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-oid="62oi3.d">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8" data-oid="ifpi4l2">
                        {/* Enhanced Profile Card */}
                        <div
                            className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                            data-oid="au_s-jw"
                        >
                            <div className="flex items-start space-x-6" data-oid="nz.v3xv">
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center glow-red"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="e.r4sap"
                                >
                                    <span
                                        className="text-white font-bold text-2xl"
                                        data-oid="4:5c73_"
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div className="flex-1" data-oid="jfxc1uu">
                                    <div
                                        className="flex items-center space-x-3 mb-2"
                                        data-oid="nadwif:"
                                    >
                                        <h2
                                            className="text-2xl font-bold"
                                            style={{ color: 'var(--text-primary)' }}
                                            data-oid="6h1vx:n"
                                        >
                                            {internProfile.name}
                                        </h2>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusInfo(currentStatus).color} text-white`}
                                            data-oid="lg86k29"
                                        >
                                            {getStatusInfo(currentStatus).label}
                                        </span>
                                    </div>
                                    <p
                                        className="font-medium text-lg mb-4"
                                        style={{ color: 'var(--accent-yellow)' }}
                                        data-oid="3_a3xcb"
                                    >
                                        {internProfile.role}
                                    </p>
                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
                                        data-oid="3.2a28v"
                                    >
                                        <div className="space-y-2" data-oid="nmra8_o">
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="ip6a:_9"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="gvdskv7"
                                                >
                                                    📧 Email:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="o6n..n_"
                                                >
                                                    {internProfile.email}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="g8dxk5b"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="x8qpsy9"
                                                >
                                                    🎓 College:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="71vou3v"
                                                >
                                                    {internProfile.college}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="yd49:e7"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="ecj:zu9"
                                                >
                                                    📚 Year:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="dn.eb2n"
                                                >
                                                    {internProfile.year}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-2" data-oid="iy66k67">
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="::17gon"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="w:g0hfj"
                                                >
                                                    🏢 Department:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="hztmys8"
                                                >
                                                    {internProfile.department}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="y:j6777"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="i3e_qxq"
                                                >
                                                    👤 Manager:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="rm2rxo9"
                                                >
                                                    {internProfile.manager}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="5s:u1w9"
                                            >
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="h_71ni9"
                                                >
                                                    📅 Start Date:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="3jr1j8y"
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
                            data-oid=":g0hmx."
                        >
                            <div
                                className="flex items-center justify-between mb-6"
                                data-oid="5vjnx09"
                            >
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="26m3g2q"
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
                                    data-oid="lvro3qx"
                                >
                                    {isEditingTime ? 'Save' : 'Edit Times'}
                                </button>
                            </div>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="48tbk-8"
                            >
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="g2h.emu"
                                >
                                    <div
                                        className="flex items-center space-x-2 mb-2"
                                        data-oid="6_fyase"
                                    >
                                        <span className="text-2xl" data-oid="_j:8l9z">
                                            🌅
                                        </span>
                                        <span
                                            className="font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="c_slc7q"
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
                                            data-oid="kl:xgqh"
                                        />
                                    ) : (
                                        <div
                                            className="text-2xl font-bold"
                                            style={{ color: 'var(--status-active)' }}
                                            data-oid="hx64.8o"
                                        >
                                            {inTime}
                                        </div>
                                    )}
                                </div>

                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="bkyvt5e"
                                >
                                    <div
                                        className="flex items-center space-x-2 mb-2"
                                        data-oid="o8av_fq"
                                    >
                                        <span className="text-2xl" data-oid="n6_r1k.">
                                            🌅
                                        </span>
                                        <span
                                            className="font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="-veb7g2"
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
                                            data-oid="2bkz3qr"
                                        />
                                    ) : (
                                        <div
                                            className="text-2xl font-bold"
                                            style={{ color: 'var(--accent-red)' }}
                                            data-oid="d7ojiw:"
                                        >
                                            {outTime}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl"
                                style={{ background: 'var(--bg-tertiary)' }}
                                data-oid=":n2:60l"
                            >
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="7zqorf2"
                                >
                                    <span
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="xc4a5oj"
                                    >
                                        Total Work Hours Today:
                                    </span>
                                    <span
                                        className="text-xl font-bold"
                                        style={{ color: 'var(--accent-yellow)' }}
                                        data-oid="boo:hwv"
                                    >
                                        8h 30m
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Project Info */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid="t5nyj8f"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid="7qjt7_0">
                                <span className="text-2xl" data-oid="d56ax7:">
                                    🚀
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="pxezaqq"
                                >
                                    Current Project
                                </h3>
                            </div>
                            <div className="space-y-6" data-oid="8:7:m4w">
                                <div data-oid="st8e-s8">
                                    <h4
                                        className="font-bold text-lg mb-3"
                                        style={{ color: 'var(--accent-cream)' }}
                                        data-oid="_2b8:hu"
                                    >
                                        {projectInfo.name}
                                    </h4>
                                    <p
                                        className="leading-relaxed mb-4"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="r7xoo3y"
                                    >
                                        {projectInfo.description}
                                    </p>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                    data-oid="1txj3qy"
                                >
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="-t_1a24"
                                    >
                                        <div
                                            className="text-xs mb-1"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="xklxswu"
                                        >
                                            Status
                                        </div>
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--status-active)' }}
                                            data-oid="2yzeo:l"
                                        >
                                            {projectInfo.status}
                                        </div>
                                    </div>
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid=".b3u7b0"
                                    >
                                        <div
                                            className="text-xs mb-1"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="lv7mb7l"
                                        >
                                            Priority
                                        </div>
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--accent-red)' }}
                                            data-oid="d8:w9fh"
                                        >
                                            {projectInfo.priority}
                                        </div>
                                    </div>
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="-7r2xw4"
                                    >
                                        <div
                                            className="text-xs mb-1"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="3vzxg6a"
                                        >
                                            Deadline
                                        </div>
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--accent-yellow)' }}
                                            data-oid="dk7:naz"
                                        >
                                            {projectInfo.deadline}
                                        </div>
                                    </div>
                                </div>

                                <div data-oid=":lr5aum">
                                    <div
                                        className="flex justify-between items-center mb-2"
                                        data-oid="i7rrgt5"
                                    >
                                        <span
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid=":d:ajkb"
                                        >
                                            Progress
                                        </span>
                                        <span
                                            className="font-bold"
                                            style={{ color: 'var(--text-primary)' }}
                                            data-oid="ijf32qn"
                                        >
                                            {projectInfo.progress}%
                                        </span>
                                    </div>
                                    <div
                                        className="w-full rounded-full h-3"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="gqaif0e"
                                    >
                                        <div
                                            className="h-3 rounded-full transition-all duration-500 glow-red"
                                            style={{
                                                width: `${projectInfo.progress}%`,
                                                background: 'var(--gradient-primary)',
                                            }}
                                            data-oid="hhfg9-c"
                                        ></div>
                                    </div>
                                </div>

                                <div data-oid="c0m2oz.">
                                    <span
                                        className="block mb-3 font-medium"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="y2ycyk3"
                                    >
                                        Tech Stack:
                                    </span>
                                    <div className="flex flex-wrap gap-2" data-oid="0j2qrny">
                                        {projectInfo.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                                                style={{
                                                    background: 'var(--bg-tertiary)',
                                                    color: 'var(--text-primary)',
                                                    border: '1px solid var(--border-secondary)',
                                                }}
                                                data-oid="fww-9mc"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Charts */}
                        <Charts performanceStats={performanceStats} data-oid="p-690wc" />

                        {/* Task Management */}
                        <TaskManager data-oid="q5v4v4e" />

                        {/* Enhanced Time Tracker */}
                        <TimeTracker data-oid=":1e9v2j" />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8" data-oid="z4uop.x">
                        {/* Enhanced Team Members */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid="zbxt0ty"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid="q7xzh--">
                                <span className="text-2xl" data-oid="9j8lfi.">
                                    👥
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="2e28:at"
                                >
                                    Team Members
                                </h3>
                            </div>
                            <div className="space-y-4" data-oid="od_k588">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl transition-all duration-200 hover:scale-105"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="xxq9ywo"
                                    >
                                        <div
                                            className="flex items-center space-x-4 mb-3"
                                            data-oid="wl1ff.b"
                                        >
                                            <div className="relative" data-oid="xg3pqk-">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{
                                                        background: 'var(--gradient-secondary)',
                                                    }}
                                                    data-oid="tinicw9"
                                                >
                                                    <span
                                                        className="text-black font-bold"
                                                        data-oid="f0jujt8"
                                                    >
                                                        {member.avatar}
                                                    </span>
                                                </div>
                                                <div
                                                    className={`absolute -top-1 -right-1 w-4 h-4 ${getStatusInfo(member.status).color} rounded-full border-2`}
                                                    style={{ borderColor: 'var(--bg-primary)' }}
                                                    data-oid="nhuy27q"
                                                ></div>
                                            </div>
                                            <div className="flex-1" data-oid="vk.8emz">
                                                <div
                                                    className="flex items-center space-x-2 mb-1"
                                                    data-oid="suzw9lx"
                                                >
                                                    <p
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="e33jupr"
                                                    >
                                                        {member.name}
                                                    </p>
                                                    <span
                                                        className={`px-2 py-0.5 rounded-full text-xs ${getStatusInfo(member.status).color} text-white`}
                                                        data-oid="njkl7:y"
                                                    >
                                                        {getStatusInfo(member.status).label}
                                                    </span>
                                                </div>
                                                <p
                                                    className="text-sm"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="hpmulpa"
                                                >
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex justify-between text-xs"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="e-n50t8"
                                        >
                                            <span data-oid="za6mh1j">In: {member.inTime}</span>
                                            <span data-oid="bi26bcm">Out: {member.outTime}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Announcements */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid=":3eq5hv"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid="zjv69ke">
                                <span className="text-2xl" data-oid="io3hym-">
                                    📢
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="e57eeg8"
                                >
                                    Announcements
                                </h3>
                            </div>
                            <div className="space-y-4" data-oid="xt6fxcc">
                                {announcements.map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className={`p-4 rounded-xl border-l-4 transition-all hover:scale-105 ${getPriorityColor(announcement.priority)}`}
                                        data-oid="6j29f:g"
                                    >
                                        <div
                                            className="flex justify-between items-start mb-2"
                                            data-oid="7yqcxye"
                                        >
                                            <h4
                                                className="font-medium"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="r3f-nka"
                                            >
                                                {announcement.title}
                                            </h4>
                                            <span
                                                className="text-xs px-2 py-1 rounded-full"
                                                style={{
                                                    background: 'var(--bg-tertiary)',
                                                    color: 'var(--text-secondary)',
                                                }}
                                                data-oid=".3_jn5g"
                                            >
                                                {announcement.type}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm mb-3 leading-relaxed"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="63yth-t"
                                        >
                                            {announcement.message}
                                        </p>
                                        <p
                                            className="text-xs"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="tnnsqic"
                                        >
                                            {announcement.time}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Performance Statistics */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid=".2o0i9t"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid="_1l5z4p">
                                <span className="text-2xl" data-oid="3gcqg3o">
                                    📊
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="mt5st87"
                                >
                                    Performance Statistics
                                </h3>
                            </div>
                            <div
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                data-oid="wlx4-e8"
                            >
                                <div
                                    className="p-4 rounded-xl text-center"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="u0:087g"
                                >
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--accent-yellow)' }}
                                        data-oid="lezuo-h"
                                    >
                                        {performanceStats.tasksCompleted}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="7ap02gf"
                                    >
                                        Tasks Completed
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl text-center"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid=":neno_8"
                                >
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--status-active)' }}
                                        data-oid="zfy5o_8"
                                    >
                                        {performanceStats.productivityScore}%
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="qu.kl4n"
                                    >
                                        Productivity Score
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl text-center"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="q63jwn5"
                                >
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--accent-red)' }}
                                        data-oid="6rsqc-9"
                                    >
                                        {performanceStats.codeCommits}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="7b_61a7"
                                    >
                                        Code Commits
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl text-center"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="yht1fnp"
                                >
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--accent-cream)' }}
                                        data-oid="f3ikob6"
                                    >
                                        {performanceStats.bugsFixed}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="-.6wn3r"
                                    >
                                        Bugs Fixed
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
                                data-oid="eb1l3sn"
                            >
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="ps28op7"
                                >
                                    <div
                                        className="flex justify-between items-center mb-2"
                                        data-oid="ep:f_rm"
                                    >
                                        <span
                                            className="text-sm"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid=":3:qseu"
                                        >
                                            Client Satisfaction
                                        </span>
                                        <span
                                            className="font-bold"
                                            style={{ color: 'var(--accent-yellow)' }}
                                            data-oid=".dposs:"
                                        >
                                            {performanceStats.clientSatisfaction}/5.0
                                        </span>
                                    </div>
                                    <div
                                        className="w-full rounded-full h-2"
                                        style={{ background: 'var(--bg-secondary)' }}
                                        data-oid="qk40lbl"
                                    >
                                        <div
                                            className="h-2 rounded-full"
                                            style={{
                                                width: `${(performanceStats.clientSatisfaction / 5) * 100}%`,
                                                background: 'var(--gradient-secondary)',
                                            }}
                                            data-oid="01jnuwq"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="0je8dmv"
                                >
                                    <div
                                        className="flex justify-between items-center mb-2"
                                        data-oid="d7y_z_m"
                                    >
                                        <span
                                            className="text-sm"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="m8ia_r5"
                                        >
                                            Team Collaboration
                                        </span>
                                        <span
                                            className="font-bold"
                                            style={{ color: 'var(--status-active)' }}
                                            data-oid="q_65qx9"
                                        >
                                            {performanceStats.teamCollaboration}/5.0
                                        </span>
                                    </div>
                                    <div
                                        className="w-full rounded-full h-2"
                                        style={{ background: 'var(--bg-secondary)' }}
                                        data-oid="2qbwe74"
                                    >
                                        <div
                                            className="h-2 rounded-full"
                                            style={{
                                                width: `${(performanceStats.teamCollaboration / 5) * 100}%`,
                                                background: 'var(--gradient-primary)',
                                            }}
                                            data-oid="6:_c-sg"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="x2c1_1q"
                                >
                                    <div
                                        className="flex justify-between items-center mb-2"
                                        data-oid="yz30:sn"
                                    >
                                        <span
                                            className="text-sm"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="lxpa36o"
                                        >
                                            Technical Skills
                                        </span>
                                        <span
                                            className="font-bold"
                                            style={{ color: 'var(--accent-red)' }}
                                            data-oid="c1f.j3a"
                                        >
                                            {performanceStats.technicalSkills}/5.0
                                        </span>
                                    </div>
                                    <div
                                        className="w-full rounded-full h-2"
                                        style={{ background: 'var(--bg-secondary)' }}
                                        data-oid="g6kw51f"
                                    >
                                        <div
                                            className="h-2 rounded-full"
                                            style={{
                                                width: `${(performanceStats.technicalSkills / 5) * 100}%`,
                                                background: 'var(--gradient-primary)',
                                            }}
                                            data-oid="q883r.b"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Team Members */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid="wfktc.9"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid="4iovkfo">
                                <span className="text-2xl" data-oid="c16m3.r">
                                    👥
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="jgum7sj"
                                >
                                    Team Members
                                </h3>
                            </div>
                            <div className="space-y-4" data-oid="o_npugl">
                                {teamMembers.slice(0, 4).map((member, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl transition-all duration-200 hover:scale-105"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="x1wptzn"
                                    >
                                        <div
                                            className="flex items-center space-x-4 mb-3"
                                            data-oid="ke:3z:7"
                                        >
                                            <div className="relative" data-oid="dr3z:fz">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{
                                                        background: 'var(--gradient-secondary)',
                                                    }}
                                                    data-oid="32652c:"
                                                >
                                                    <span
                                                        className="text-black font-bold"
                                                        data-oid="ms9dik."
                                                    >
                                                        {member.avatar}
                                                    </span>
                                                </div>
                                                <div
                                                    className={`absolute -top-1 -right-1 w-4 h-4 ${getStatusInfo(member.status).color} rounded-full border-2`}
                                                    style={{ borderColor: 'var(--bg-primary)' }}
                                                    data-oid="lv5ow55"
                                                ></div>
                                            </div>
                                            <div className="flex-1" data-oid="wccmmu7">
                                                <div
                                                    className="flex items-center space-x-2 mb-1"
                                                    data-oid="o:-3f2d"
                                                >
                                                    <p
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="fkrwsjl"
                                                    >
                                                        {member.name}
                                                    </p>
                                                    <span
                                                        className={`px-2 py-0.5 rounded-full text-xs ${getStatusInfo(member.status).color} text-white`}
                                                        data-oid="4:4qo_i"
                                                    >
                                                        {getStatusInfo(member.status).label}
                                                    </span>
                                                </div>
                                                <p
                                                    className="text-sm mb-1"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="oirc1u-"
                                                >
                                                    {member.role}
                                                </p>
                                                <p
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-muted)' }}
                                                    data-oid="1nognvt"
                                                >
                                                    {member.currentProject}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex justify-between text-xs"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="ecoahd5"
                                        >
                                            <span data-oid="k_2:u.2">In: {member.inTime}</span>
                                            <span data-oid="-y2-h4a">Out: {member.outTime}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Announcements */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid="oeq3mcp"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid=".4s2spz">
                                <span className="text-2xl" data-oid="12uq4t2">
                                    📢
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="l.rez4."
                                >
                                    Announcements
                                </h3>
                            </div>
                            <div className="space-y-4" data-oid="coel8d2">
                                {announcements.slice(0, 6).map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className={`p-4 rounded-xl border-l-4 transition-all hover:scale-105 cursor-pointer ${getPriorityColor(announcement.priority)}`}
                                        onClick={() => handleAnnouncementClick(announcement)}
                                        data-oid="w7yq43h"
                                    >
                                        <div
                                            className="flex justify-between items-start mb-2"
                                            data-oid="dthq:4g"
                                        >
                                            <h4
                                                className="font-medium hover:text-yellow-400 transition-colors"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="zb4bit8"
                                            >
                                                {announcement.title}
                                            </h4>
                                            <div
                                                className="flex items-center space-x-2"
                                                data-oid="0sx.geg"
                                            >
                                                <span
                                                    className="text-xs px-2 py-1 rounded-full"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--text-secondary)',
                                                    }}
                                                    data-oid="7d817.1"
                                                >
                                                    {announcement.type}
                                                </span>
                                                <span
                                                    className="text-xs text-gray-400"
                                                    data-oid=":i4sw8t"
                                                >
                                                    👆 Click for details
                                                </span>
                                            </div>
                                        </div>
                                        <p
                                            className="text-sm mb-3 leading-relaxed"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="3fnyt_y"
                                        >
                                            {announcement.message}
                                        </p>
                                        <div
                                            className="flex justify-between items-center"
                                            data-oid="tu622g_"
                                        >
                                            <p
                                                className="text-xs"
                                                style={{ color: 'var(--text-muted)' }}
                                                data-oid="rn6wjhq"
                                            >
                                                {announcement.time}
                                            </p>
                                            <p
                                                className="text-xs"
                                                style={{ color: 'var(--text-muted)' }}
                                                data-oid="i1y3.gc"
                                            >
                                                By: {announcement.author}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activities */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid="0i8hs0l"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid="w11s5lu">
                                <span className="text-2xl" data-oid="o:52v8t">
                                    ⚡
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="oawn1gy"
                                >
                                    Recent Activities
                                </h3>
                            </div>
                            <div className="space-y-3" data-oid="bt65veg">
                                {recentActivities.map((activity) => (
                                    <div
                                        key={activity.id}
                                        className="p-3 rounded-lg transition-all hover:scale-105"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="1qymawb"
                                    >
                                        <div
                                            className="flex items-start space-x-3"
                                            data-oid="yl6mgd:"
                                        >
                                            <span className="text-lg" data-oid="9p9g6b_">
                                                {getActivityIcon(activity.type)}
                                            </span>
                                            <div className="flex-1" data-oid="aokoo32">
                                                <div
                                                    className="flex justify-between items-start mb-1"
                                                    data-oid="c6gbtpx"
                                                >
                                                    <span
                                                        className="font-medium text-sm"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="_rc7y-3"
                                                    >
                                                        {activity.action}
                                                    </span>
                                                    <span
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-muted)' }}
                                                        data-oid="db-awei"
                                                    >
                                                        {activity.time}
                                                    </span>
                                                </div>
                                                <p
                                                    className="text-xs mb-1"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="0uo9nt2"
                                                >
                                                    {activity.description}
                                                </p>
                                                <span
                                                    className="text-xs px-2 py-1 rounded-full"
                                                    style={{
                                                        background: 'var(--bg-secondary)',
                                                        color: 'var(--accent-yellow)',
                                                    }}
                                                    data-oid=":1sl2i3"
                                                >
                                                    {activity.project}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Deadlines */}
                        <div
                            className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                            data-oid="ey_4k_0"
                        >
                            <div className="flex items-center space-x-2 mb-6" data-oid="5sezhii">
                                <span className="text-2xl" data-oid="9c1d:4k">
                                    ⏰
                                </span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="ab1rkml"
                                >
                                    Upcoming Deadlines
                                </h3>
                            </div>
                            <div className="space-y-4" data-oid="mysu6yl">
                                {upcomingDeadlines.map((deadline) => (
                                    <div
                                        key={deadline.id}
                                        className="p-4 rounded-xl transition-all hover:scale-105"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="zy:.jo3"
                                    >
                                        <div
                                            className="flex justify-between items-start mb-2"
                                            data-oid="4dvs3k-"
                                        >
                                            <h4
                                                className="font-medium"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="fkj:ils"
                                            >
                                                {deadline.title}
                                            </h4>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs text-white ${getPriorityBadgeColor(deadline.priority)}`}
                                                data-oid="pfdtih6"
                                            >
                                                {deadline.priority}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm mb-2"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="z5c7qmr"
                                        >
                                            {deadline.project}
                                        </p>
                                        <div
                                            className="flex justify-between items-center"
                                            data-oid="iasy3v0"
                                        >
                                            <span
                                                className="text-xs"
                                                style={{ color: 'var(--text-muted)' }}
                                                data-oid="5fd5v4c"
                                            >
                                                Due: {deadline.deadline}
                                            </span>
                                            <span
                                                className={`text-xs font-bold ${
                                                    deadline.daysLeft <= 3
                                                        ? 'text-red-400'
                                                        : deadline.daysLeft <= 7
                                                          ? 'text-yellow-400'
                                                          : 'text-green-400'
                                                }`}
                                                data-oid="r46.2-1"
                                            >
                                                {deadline.daysLeft} days left
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Announcement Modal */}
                {showAnnouncementModal && selectedAnnouncement && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                        onClick={closeAnnouncementModal}
                        data-oid="5qbvv57"
                    >
                        <div
                            className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                            data-oid="ln.nkmb"
                        >
                            <div
                                className="flex justify-between items-start mb-6"
                                data-oid="8adnryr"
                            >
                                <div data-oid="z:aj60h">
                                    <h2
                                        className="text-2xl font-bold mb-2"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="utkyd9e"
                                    >
                                        {selectedAnnouncement.title}
                                    </h2>
                                    <div
                                        className="flex items-center space-x-4 text-sm"
                                        data-oid="a7fh-fk"
                                    >
                                        <span
                                            className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                            data-oid="4zxykgd"
                                        >
                                            {selectedAnnouncement.priority} priority
                                        </span>
                                        <span
                                            className="px-3 py-1 rounded-full"
                                            style={{
                                                background: 'var(--bg-tertiary)',
                                                color: 'var(--text-secondary)',
                                            }}
                                            data-oid="0treu8f"
                                        >
                                            {selectedAnnouncement.type}
                                        </span>
                                        <span
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid="rzdrxhr"
                                        >
                                            {selectedAnnouncement.time}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="text-2xl hover:text-red-400 transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid=":py3m86"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="space-y-6" data-oid="5-waofj">
                                <div data-oid="6_rwcp6">
                                    <p
                                        className="text-lg leading-relaxed"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="vxhzk:8"
                                    >
                                        {selectedAnnouncement.message}
                                    </p>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    data-oid="0aoz075"
                                >
                                    <div
                                        className="p-4 rounded-xl"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="l8mzq4t"
                                    >
                                        <h4
                                            className="font-medium mb-2"
                                            style={{ color: 'var(--text-primary)' }}
                                            data-oid="cdhvbn:"
                                        >
                                            📝 Details
                                        </h4>
                                        <div className="space-y-2 text-sm" data-oid="io_yb.-">
                                            <div data-oid="wlljjc:">
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="tqw0y28"
                                                >
                                                    Author:{' '}
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="4qz41a1"
                                                >
                                                    {selectedAnnouncement.author}
                                                </span>
                                            </div>
                                            <div data-oid="l6se375">
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="sye5uyw"
                                                >
                                                    Department:{' '}
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="0j.c44p"
                                                >
                                                    {selectedAnnouncement.department}
                                                </span>
                                            </div>
                                            {selectedAnnouncement.location && (
                                                <div data-oid="1g84i2p">
                                                    <span
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="rq:x7pf"
                                                    >
                                                        Location:{' '}
                                                    </span>
                                                    <span
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="8dqqmqh"
                                                    >
                                                        {selectedAnnouncement.location}
                                                    </span>
                                                </div>
                                            )}
                                            {selectedAnnouncement.duration && (
                                                <div data-oid="kfmj.ie">
                                                    <span
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="r.d02h9"
                                                    >
                                                        Duration:{' '}
                                                    </span>
                                                    <span
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="-:qhoh-"
                                                    >
                                                        {selectedAnnouncement.duration}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {selectedAnnouncement.attendees && (
                                        <div
                                            className="p-4 rounded-xl"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                            data-oid="wwoc9qs"
                                        >
                                            <h4
                                                className="font-medium mb-2"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="per.gcw"
                                            >
                                                👥 Attendees
                                            </h4>
                                            <div className="space-y-1 text-sm" data-oid="7cshsu-">
                                                {selectedAnnouncement.attendees.map(
                                                    (attendee, index) => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                color: 'var(--text-secondary)',
                                                            }}
                                                            data-oid="g-itasf"
                                                        >
                                                            • {attendee}
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {selectedAnnouncement.agenda && (
                                    <div
                                        className="p-4 rounded-xl"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="4w3:g:y"
                                    >
                                        <h4
                                            className="font-medium mb-3"
                                            style={{ color: 'var(--text-primary)' }}
                                            data-oid="39gypo_"
                                        >
                                            📋 Agenda
                                        </h4>
                                        <div className="space-y-2" data-oid="cko53.3">
                                            {selectedAnnouncement.agenda.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start space-x-2 text-sm"
                                                    data-oid="f2-siaq"
                                                >
                                                    <span
                                                        className="font-medium"
                                                        style={{ color: 'var(--accent-yellow)' }}
                                                        data-oid="_ef0zh5"
                                                    >
                                                        {index + 1}.
                                                    </span>
                                                    <span
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="0.j1iq2"
                                                    >
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedAnnouncement.meetingLink && (
                                    <div className="flex justify-center" data-oid="3m4mft:">
                                        <a
                                            href={selectedAnnouncement.meetingLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                                            style={{
                                                background: 'var(--gradient-primary)',
                                                color: 'white',
                                            }}
                                            data-oid=".ckcb9e"
                                        >
                                            🔗 Join Meeting
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Theme Customizer */}
            <ThemeCustomizer data-oid="e2vjugg" />
        </div>
    );
}
