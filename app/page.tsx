'use client';

import { useState, useEffect } from 'react';

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
        <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 float-animation"
                    style={{ background: 'var(--gradient-primary)' }}
                ></div>
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 float-animation"
                    style={{ background: 'var(--gradient-secondary)', animationDelay: '1s' }}
                ></div>
            </div>

            {/* Header */}
            <header
                className="glass-effect border-b"
                style={{ borderColor: 'var(--border-primary)' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-3">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center glow-red"
                                    style={{ background: 'var(--gradient-primary)' }}
                                >
                                    <span className="text-white font-bold text-lg">PGT</span>
                                </div>
                                <div>
                                    <h1
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        Intern Dashboard
                                    </h1>
                                    <p
                                        className="text-sm"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {formatDate(currentTime)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Header Right - Time and Profile */}
                        <div className="flex items-center space-x-6">
                            {/* Live Clock */}
                            <div className="text-right">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{ color: 'var(--accent-yellow)' }}
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                    Live Time
                                </div>
                            </div>

                            {/* Profile with Status */}
                            <div className="flex items-center space-x-3">
                                <div className="text-right">
                                    <div
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        Welcome, {internProfile.name.split(' ')[0]}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span
                                            className="text-xs"
                                            style={{ color: 'var(--text-secondary)' }}
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
                                        >
                                            {statusOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.icon} {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center glow-yellow"
                                        style={{ background: 'var(--gradient-secondary)' }}
                                    >
                                        <span className="text-black font-bold text-lg">
                                            {internProfile.avatar}
                                        </span>
                                    </div>
                                    <div
                                        className={`absolute -top-1 -right-1 w-4 h-4 ${getStatusInfo(currentStatus).color} rounded-full border-2`}
                                        style={{ borderColor: 'var(--bg-primary)' }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Enhanced Profile Card */}
                        <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-start space-x-6">
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center glow-red"
                                    style={{ background: 'var(--gradient-primary)' }}
                                >
                                    <span className="text-white font-bold text-2xl">
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h2
                                            className="text-2xl font-bold"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            {internProfile.name}
                                        </h2>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusInfo(currentStatus).color} text-white`}
                                        >
                                            {getStatusInfo(currentStatus).label}
                                        </span>
                                    </div>
                                    <p
                                        className="font-medium text-lg mb-4"
                                        style={{ color: 'var(--accent-yellow)' }}
                                    >
                                        {internProfile.role}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <span style={{ color: 'var(--text-secondary)' }}>
                                                    📧 Email:
                                                </span>
                                                <span style={{ color: 'var(--text-primary)' }}>
                                                    {internProfile.email}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span style={{ color: 'var(--text-secondary)' }}>
                                                    🎓 College:
                                                </span>
                                                <span style={{ color: 'var(--text-primary)' }}>
                                                    {internProfile.college}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span style={{ color: 'var(--text-secondary)' }}>
                                                    📚 Year:
                                                </span>
                                                <span style={{ color: 'var(--text-primary)' }}>
                                                    {internProfile.year}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <span style={{ color: 'var(--text-secondary)' }}>
                                                    🏢 Department:
                                                </span>
                                                <span style={{ color: 'var(--text-primary)' }}>
                                                    {internProfile.department}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span style={{ color: 'var(--text-secondary)' }}>
                                                    👤 Manager:
                                                </span>
                                                <span style={{ color: 'var(--text-primary)' }}>
                                                    {internProfile.manager}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span style={{ color: 'var(--text-secondary)' }}>
                                                    📅 Start Date:
                                                </span>
                                                <span style={{ color: 'var(--text-primary)' }}>
                                                    {internProfile.startDate}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Time Tracking Card */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
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
                                >
                                    {isEditingTime ? 'Save' : 'Edit Times'}
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="text-2xl">🌅</span>
                                        <span
                                            className="font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
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
                                        />
                                    ) : (
                                        <div
                                            className="text-2xl font-bold"
                                            style={{ color: 'var(--status-active)' }}
                                        >
                                            {inTime}
                                        </div>
                                    )}
                                </div>

                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="text-2xl">🌅</span>
                                        <span
                                            className="font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
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
                                        />
                                    ) : (
                                        <div
                                            className="text-2xl font-bold"
                                            style={{ color: 'var(--accent-red)' }}
                                        >
                                            {outTime}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div
                                className="mt-6 p-4 rounded-xl"
                                style={{ background: 'var(--bg-tertiary)' }}
                            >
                                <div className="flex items-center justify-between">
                                    <span style={{ color: 'var(--text-secondary)' }}>
                                        Total Work Hours Today:
                                    </span>
                                    <span
                                        className="text-xl font-bold"
                                        style={{ color: 'var(--accent-yellow)' }}
                                    >
                                        8h 30m
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Project Info */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="text-2xl">🚀</span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Current Project
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4
                                        className="font-bold text-lg mb-3"
                                        style={{ color: 'var(--accent-cream)' }}
                                    >
                                        {projectInfo.name}
                                    </h4>
                                    <p
                                        className="leading-relaxed mb-4"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {projectInfo.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <div
                                            className="text-xs mb-1"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Status
                                        </div>
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--status-active)' }}
                                        >
                                            {projectInfo.status}
                                        </div>
                                    </div>
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <div
                                            className="text-xs mb-1"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Priority
                                        </div>
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--accent-red)' }}
                                        >
                                            {projectInfo.priority}
                                        </div>
                                    </div>
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <div
                                            className="text-xs mb-1"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Deadline
                                        </div>
                                        <div
                                            className="font-medium"
                                            style={{ color: 'var(--accent-yellow)' }}
                                        >
                                            {projectInfo.deadline}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span style={{ color: 'var(--text-secondary)' }}>
                                            Progress
                                        </span>
                                        <span
                                            className="font-bold"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            {projectInfo.progress}%
                                        </span>
                                    </div>
                                    <div
                                        className="w-full rounded-full h-3"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <div
                                            className="h-3 rounded-full transition-all duration-500 glow-red"
                                            style={{
                                                width: `${projectInfo.progress}%`,
                                                background: 'var(--gradient-primary)',
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <span
                                        className="block mb-3 font-medium"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Tech Stack:
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {projectInfo.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-lg text-sm font-medium transition-all hover:scale-105"
                                                style={{
                                                    background: 'var(--bg-tertiary)',
                                                    color: 'var(--text-primary)',
                                                    border: '1px solid var(--border-secondary)',
                                                }}
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
                    <div className="space-y-8">
                        {/* Enhanced Team Members */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="text-2xl">👥</span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Team Members
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl transition-all duration-200 hover:scale-105"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <div className="flex items-center space-x-4 mb-3">
                                            <div className="relative">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{
                                                        background: 'var(--gradient-secondary)',
                                                    }}
                                                >
                                                    <span className="text-black font-bold">
                                                        {member.avatar}
                                                    </span>
                                                </div>
                                                <div
                                                    className={`absolute -top-1 -right-1 w-4 h-4 ${getStatusInfo(member.status).color} rounded-full border-2`}
                                                    style={{ borderColor: 'var(--bg-primary)' }}
                                                ></div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-1">
                                                    <p
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                    >
                                                        {member.name}
                                                    </p>
                                                    <span
                                                        className={`px-2 py-0.5 rounded-full text-xs ${getStatusInfo(member.status).color} text-white`}
                                                    >
                                                        {getStatusInfo(member.status).label}
                                                    </span>
                                                </div>
                                                <p
                                                    className="text-sm"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex justify-between text-xs"
                                            style={{ color: 'var(--text-muted)' }}
                                        >
                                            <span>In: {member.inTime}</span>
                                            <span>Out: {member.outTime}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Announcements */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="text-2xl">📢</span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Announcements
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {announcements.map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className={`p-4 rounded-xl border-l-4 transition-all hover:scale-105 ${getPriorityColor(announcement.priority)}`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4
                                                className="font-medium"
                                                style={{ color: 'var(--text-primary)' }}
                                            >
                                                {announcement.title}
                                            </h4>
                                            <span
                                                className="text-xs px-2 py-1 rounded-full"
                                                style={{
                                                    background: 'var(--bg-tertiary)',
                                                    color: 'var(--text-secondary)',
                                                }}
                                            >
                                                {announcement.type}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm mb-3 leading-relaxed"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {announcement.message}
                                        </p>
                                        <p
                                            className="text-xs"
                                            style={{ color: 'var(--text-muted)' }}
                                        >
                                            {announcement.time}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Performance Statistics */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="text-2xl">📊</span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Performance Statistics
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div
                                    className="p-4 rounded-xl text-center"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--accent-yellow)' }}
                                    >
                                        {performanceStats.tasksCompleted}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Tasks Completed
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl text-center"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--status-active)' }}
                                    >
                                        {performanceStats.productivityScore}%
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Productivity Score
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl text-center"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--accent-red)' }}
                                    >
                                        {performanceStats.codeCommits}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Code Commits
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl text-center"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--accent-cream)' }}
                                    >
                                        {performanceStats.bugsFixed}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Bugs Fixed
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span
                                            className="text-sm"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Client Satisfaction
                                        </span>
                                        <span
                                            className="font-bold"
                                            style={{ color: 'var(--accent-yellow)' }}
                                        >
                                            {performanceStats.clientSatisfaction}/5.0
                                        </span>
                                    </div>
                                    <div
                                        className="w-full rounded-full h-2"
                                        style={{ background: 'var(--bg-secondary)' }}
                                    >
                                        <div
                                            className="h-2 rounded-full"
                                            style={{
                                                width: `${(performanceStats.clientSatisfaction / 5) * 100}%`,
                                                background: 'var(--gradient-secondary)',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span
                                            className="text-sm"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Team Collaboration
                                        </span>
                                        <span
                                            className="font-bold"
                                            style={{ color: 'var(--status-active)' }}
                                        >
                                            {performanceStats.teamCollaboration}/5.0
                                        </span>
                                    </div>
                                    <div
                                        className="w-full rounded-full h-2"
                                        style={{ background: 'var(--bg-secondary)' }}
                                    >
                                        <div
                                            className="h-2 rounded-full"
                                            style={{
                                                width: `${(performanceStats.teamCollaboration / 5) * 100}%`,
                                                background: 'var(--gradient-primary)',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="p-4 rounded-xl"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span
                                            className="text-sm"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Technical Skills
                                        </span>
                                        <span
                                            className="font-bold"
                                            style={{ color: 'var(--accent-red)' }}
                                        >
                                            {performanceStats.technicalSkills}/5.0
                                        </span>
                                    </div>
                                    <div
                                        className="w-full rounded-full h-2"
                                        style={{ background: 'var(--bg-secondary)' }}
                                    >
                                        <div
                                            className="h-2 rounded-full"
                                            style={{
                                                width: `${(performanceStats.technicalSkills / 5) * 100}%`,
                                                background: 'var(--gradient-primary)',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Team Members */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="text-2xl">👥</span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Team Members
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {teamMembers.slice(0, 4).map((member, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl transition-all duration-200 hover:scale-105"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <div className="flex items-center space-x-4 mb-3">
                                            <div className="relative">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{
                                                        background: 'var(--gradient-secondary)',
                                                    }}
                                                >
                                                    <span className="text-black font-bold">
                                                        {member.avatar}
                                                    </span>
                                                </div>
                                                <div
                                                    className={`absolute -top-1 -right-1 w-4 h-4 ${getStatusInfo(member.status).color} rounded-full border-2`}
                                                    style={{ borderColor: 'var(--bg-primary)' }}
                                                ></div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-1">
                                                    <p
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                    >
                                                        {member.name}
                                                    </p>
                                                    <span
                                                        className={`px-2 py-0.5 rounded-full text-xs ${getStatusInfo(member.status).color} text-white`}
                                                    >
                                                        {getStatusInfo(member.status).label}
                                                    </span>
                                                </div>
                                                <p
                                                    className="text-sm mb-1"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    {member.role}
                                                </p>
                                                <p
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-muted)' }}
                                                >
                                                    {member.currentProject}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex justify-between text-xs"
                                            style={{ color: 'var(--text-muted)' }}
                                        >
                                            <span>In: {member.inTime}</span>
                                            <span>Out: {member.outTime}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Announcements */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="text-2xl">📢</span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Announcements
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {announcements.slice(0, 6).map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className={`p-4 rounded-xl border-l-4 transition-all hover:scale-105 cursor-pointer ${getPriorityColor(announcement.priority)}`}
                                        onClick={() => handleAnnouncementClick(announcement)}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4
                                                className="font-medium hover:text-yellow-400 transition-colors"
                                                style={{ color: 'var(--text-primary)' }}
                                            >
                                                {announcement.title}
                                            </h4>
                                            <div className="flex items-center space-x-2">
                                                <span
                                                    className="text-xs px-2 py-1 rounded-full"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--text-secondary)',
                                                    }}
                                                >
                                                    {announcement.type}
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    👆 Click for details
                                                </span>
                                            </div>
                                        </div>
                                        <p
                                            className="text-sm mb-3 leading-relaxed"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {announcement.message}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <p
                                                className="text-xs"
                                                style={{ color: 'var(--text-muted)' }}
                                            >
                                                {announcement.time}
                                            </p>
                                            <p
                                                className="text-xs"
                                                style={{ color: 'var(--text-muted)' }}
                                            >
                                                By: {announcement.author}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activities */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="text-2xl">⚡</span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Recent Activities
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {recentActivities.map((activity) => (
                                    <div
                                        key={activity.id}
                                        className="p-3 rounded-lg transition-all hover:scale-105"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <div className="flex items-start space-x-3">
                                            <span className="text-lg">
                                                {getActivityIcon(activity.type)}
                                            </span>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span
                                                        className="font-medium text-sm"
                                                        style={{ color: 'var(--text-primary)' }}
                                                    >
                                                        {activity.action}
                                                    </span>
                                                    <span
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-muted)' }}
                                                    >
                                                        {activity.time}
                                                    </span>
                                                </div>
                                                <p
                                                    className="text-xs mb-1"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    {activity.description}
                                                </p>
                                                <span
                                                    className="text-xs px-2 py-1 rounded-full"
                                                    style={{
                                                        background: 'var(--bg-secondary)',
                                                        color: 'var(--accent-yellow)',
                                                    }}
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
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="text-2xl">⏰</span>
                                <h3
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Upcoming Deadlines
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {upcomingDeadlines.map((deadline) => (
                                    <div
                                        key={deadline.id}
                                        className="p-4 rounded-xl transition-all hover:scale-105"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4
                                                className="font-medium"
                                                style={{ color: 'var(--text-primary)' }}
                                            >
                                                {deadline.title}
                                            </h4>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs text-white ${getPriorityBadgeColor(deadline.priority)}`}
                                            >
                                                {deadline.priority}
                                            </span>
                                        </div>
                                        <p
                                            className="text-sm mb-2"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {deadline.project}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span
                                                className="text-xs"
                                                style={{ color: 'var(--text-muted)' }}
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
                    >
                        <div
                            className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2
                                        className="text-2xl font-bold mb-2"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {selectedAnnouncement.title}
                                    </h2>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <span
                                            className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                        >
                                            {selectedAnnouncement.priority} priority
                                        </span>
                                        <span
                                            className="px-3 py-1 rounded-full"
                                            style={{
                                                background: 'var(--bg-tertiary)',
                                                color: 'var(--text-secondary)',
                                            }}
                                        >
                                            {selectedAnnouncement.type}
                                        </span>
                                        <span style={{ color: 'var(--text-muted)' }}>
                                            {selectedAnnouncement.time}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="text-2xl hover:text-red-400 transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    ×
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p
                                        className="text-lg leading-relaxed"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {selectedAnnouncement.message}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div
                                        className="p-4 rounded-xl"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <h4
                                            className="font-medium mb-2"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            📝 Details
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                            <div>
                                                <span style={{ color: 'var(--text-secondary)' }}>
                                                    Author:{' '}
                                                </span>
                                                <span style={{ color: 'var(--text-primary)' }}>
                                                    {selectedAnnouncement.author}
                                                </span>
                                            </div>
                                            <div>
                                                <span style={{ color: 'var(--text-secondary)' }}>
                                                    Department:{' '}
                                                </span>
                                                <span style={{ color: 'var(--text-primary)' }}>
                                                    {selectedAnnouncement.department}
                                                </span>
                                            </div>
                                            {selectedAnnouncement.location && (
                                                <div>
                                                    <span
                                                        style={{ color: 'var(--text-secondary)' }}
                                                    >
                                                        Location:{' '}
                                                    </span>
                                                    <span style={{ color: 'var(--text-primary)' }}>
                                                        {selectedAnnouncement.location}
                                                    </span>
                                                </div>
                                            )}
                                            {selectedAnnouncement.duration && (
                                                <div>
                                                    <span
                                                        style={{ color: 'var(--text-secondary)' }}
                                                    >
                                                        Duration:{' '}
                                                    </span>
                                                    <span style={{ color: 'var(--text-primary)' }}>
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
                                        >
                                            <h4
                                                className="font-medium mb-2"
                                                style={{ color: 'var(--text-primary)' }}
                                            >
                                                👥 Attendees
                                            </h4>
                                            <div className="space-y-1 text-sm">
                                                {selectedAnnouncement.attendees.map(
                                                    (attendee, index) => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                color: 'var(--text-secondary)',
                                                            }}
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
                                    >
                                        <h4
                                            className="font-medium mb-3"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            📋 Agenda
                                        </h4>
                                        <div className="space-y-2">
                                            {selectedAnnouncement.agenda.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start space-x-2 text-sm"
                                                >
                                                    <span
                                                        className="font-medium"
                                                        style={{ color: 'var(--accent-yellow)' }}
                                                    >
                                                        {index + 1}.
                                                    </span>
                                                    <span
                                                        style={{ color: 'var(--text-secondary)' }}
                                                    >
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedAnnouncement.meetingLink && (
                                    <div className="flex justify-center">
                                        <a
                                            href={selectedAnnouncement.meetingLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                                            style={{
                                                background: 'var(--gradient-primary)',
                                                color: 'white',
                                            }}
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
        </div>
    );
}
