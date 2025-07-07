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
            description: 'Building a comprehensive API integration platform for third-party services.',
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
                'Demo preparation'
            ],
            duration: '30 minutes',
            meetingLink: 'https://meet.pgt.com/standup-eng-001',
            isRecurring: true,
            recurrence: 'Daily at 10:00 AM',
        },
        {
            id: 2,
            title: 'Project Deadline Extended',
            message: 'Customer Analytics Platform deadline extended to July 15th due to scope changes',
            time: 'Yesterday, 3:45 PM',
            priority: 'medium',
            type: 'update',
            author: 'Emily Davis',
            department: 'Product Management',
            details: 'The client has requested additional features including real-time notifications and advanced filtering capabilities. This will require an additional 2 weeks of development time.',
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
            location: 'Sarah\'s Office - Room 305',
            topics: [
                'Career development planning',
                'Technical skill assessment',
                'Project feedback and guidance',
                'Industry best practices'
            ],
            duration: '60 minutes',
            preparationNotes: 'Please prepare questions about React optimization and bring your recent code samples for review.',
            followUpActions: ['Schedule next session', 'Complete skill assessment', 'Review recommended resources'],
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
                'Security vulnerability fixes'
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
                'Open Q&A Session'
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
                'Incident Reporting Procedures'
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
                { name: 'Nina Patel', role: 'Data Scientist', department: 'Analytics' }
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
            temporaryArrangements: 'Hot-desking system in West Wing, Additional meeting rooms booked in nearby building',
            improvements: [
                'Modern ergonomic furniture',
                'Enhanced lighting systems',
                'Improved HVAC system',
                'New collaboration spaces'
            ],
            budget: '$250,000',
        }
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
            case 'task': return '✅';
            case 'review': return '👀';
            case 'meeting': return '🤝';
            case 'bug': return '🐛';
            case 'documentation': return '📝';
            default: return '📋';
        }
    };

    const getPriorityBadgeColor = (priority) => {
        switch (priority) {
            case 'high': return 'bg-red-500';
            case 'medium': return 'bg-yellow-500';
            case 'low': return 'bg-green-500';
            default: return 'bg-gray-500';
        }
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

                        {/* Performance Statistics */}
                        <div
                            className=\"glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300\"
                            data-oid=\"perf-stats\"
                        >
                            <div className=\"flex items-center space-x-2 mb-6\">
                                <span className=\"text-2xl\">📊</span>
                                <h3
                                    className=\"text-xl font-bold\"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Performance Statistics
                                </h3>
                            </div>
                            <div className=\"grid grid-cols-2 md:grid-cols-4 gap-4\">
                                <div
                                    className=\"p-4 rounded-xl text-center\"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div
                                        className=\"text-2xl font-bold\"
                                        style={{ color: 'var(--accent-yellow)' }}
                                    >
                                        {performanceStats.tasksCompleted}
                                    </div>
                                    <div
                                        className=\"text-xs\"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Tasks Completed
                                    </div>
                                </div>
                                <div
                                    className=\"p-4 rounded-xl text-center\"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div
                                        className=\"text-2xl font-bold\"
                                        style={{ color: 'var(--status-active)' }}
                                    >
                                        {performanceStats.productivityScore}%
                                    </div>
                                    <div
                                        className=\"text-xs\"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Productivity Score
                                    </div>
                                </div>
                                <div
                                    className=\"p-4 rounded-xl text-center\"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div
                                        className=\"text-2xl font-bold\"
                                        style={{ color: 'var(--accent-red)' }}
                                    >
                                        {performanceStats.codeCommits}
                                    </div>
                                    <div
                                        className=\"text-xs\"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Code Commits
                                    </div>
                                </div>
                                <div
                                    className=\"p-4 rounded-xl text-center\"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div
                                        className=\"text-2xl font-bold\"
                                        style={{ color: 'var(--accent-cream)' }}
                                    >
                                        {performanceStats.bugsFixed}
                                    </div>
                                    <div
                                        className=\"text-xs\"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        Bugs Fixed
                                    </div>
                                </div>
                            </div>
                            <div className=\"mt-6 grid grid-cols-1 md:grid-cols-3 gap-4\">
                                <div
                                    className=\"p-4 rounded-xl\"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div className=\"flex justify-between items-center mb-2\">
                                        <span
                                            className=\"text-sm\"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Client Satisfaction
                                        </span>
                                        <span
                                            className=\"font-bold\"
                                            style={{ color: 'var(--accent-yellow)' }}
                                        >
                                            {performanceStats.clientSatisfaction}/5.0
                                        </span>
                                    </div>
                                    <div
                                        className=\"w-full rounded-full h-2\"
                                        style={{ background: 'var(--bg-secondary)' }}
                                    >
                                        <div
                                            className=\"h-2 rounded-full\"
                                            style={{
                                                width: `${(performanceStats.clientSatisfaction / 5) * 100}%`,
                                                background: 'var(--gradient-secondary)',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className=\"p-4 rounded-xl\"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div className=\"flex justify-between items-center mb-2\">
                                        <span
                                            className=\"text-sm\"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Team Collaboration
                                        </span>
                                        <span
                                            className=\"font-bold\"
                                            style={{ color: 'var(--status-active)' }}
                                        >
                                            {performanceStats.teamCollaboration}/5.0
                                        </span>
                                    </div>
                                    <div
                                        className=\"w-full rounded-full h-2\"
                                        style={{ background: 'var(--bg-secondary)' }}
                                    >
                                        <div
                                            className=\"h-2 rounded-full\"
                                            style={{
                                                width: `${(performanceStats.teamCollaboration / 5) * 100}%`,
                                                background: 'var(--gradient-primary)',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className=\"p-4 rounded-xl\"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                >
                                    <div className=\"flex justify-between items-center mb-2\">
                                        <span
                                            className=\"text-sm\"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            Technical Skills
                                        </span>
                                        <span
                                            className=\"font-bold\"
                                            style={{ color: 'var(--accent-red)' }}
                                        >
                                            {performanceStats.technicalSkills}/5.0
                                        </span>
                                    </div>
                                    <div
                                        className=\"w-full rounded-full h-2\"
                                        style={{ background: 'var(--bg-secondary)' }}
                                    >
                                        <div
                                            className=\"h-2 rounded-full\"
                                            style={{
                                                width: `${(performanceStats.technicalSkills / 5) * 100}%`,
                                                background: 'var(--gradient-primary)',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className=\"space-y-8\" data-oid=\"vpfbn.j\">
                        {/* Enhanced Team Members */}
                        <div
                            className=\"glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300\"
                            data-oid=\"tc:rizq\"
                        >
                            <div className=\"flex items-center space-x-2 mb-6\" data-oid=\"y_b4mw:\">
                                <span className=\"text-2xl\" data-oid=\"ih_6fxs\">
                                    👥
                                </span>
                                <h3
                                    className=\"text-xl font-bold\"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid=\"t4q_9p_\"
                                >
                                    Team Members
                                </h3>
                            </div>
                            <div className=\"space-y-4\" data-oid=\"ih4uz5h\">
                                {teamMembers.slice(0, 4).map((member, index) => (
                                    <div
                                        key={index}
                                        className=\"p-4 rounded-xl transition-all duration-200 hover:scale-105\"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid=\":ryj.sv\"
                                    >
                                        <div
                                            className=\"flex items-center space-x-4 mb-3\"
                                            data-oid=\"5_eyz0a\"
                                        >
                                            <div className=\"relative\" data-oid=\"6f7uc0w\">
                                                <div
                                                    className=\"w-12 h-12 rounded-xl flex items-center justify-center\"
                                                    style={{
                                                        background: 'var(--gradient-secondary)',
                                                    }}
                                                    data-oid=\"wnr_-by\"
                                                >
                                                    <span
                                                        className=\"text-black font-bold\"
                                                        data-oid=\"l2qv3h9\"
                                                    >
                                                        {member.avatar}
                                                    </span>
                                                </div>
                                                <div
                                                    className={`absolute -top-1 -right-1 w-4 h-4 ${getStatusInfo(member.status).color} rounded-full border-2`}
                                                    style={{ borderColor: 'var(--bg-primary)' }}
                                                    data-oid=\"sck8pec\"
                                                ></div>
                                            </div>
                                            <div className=\"flex-1\" data-oid=\"c0zzlr4\">
                                                <div
                                                    className=\"flex items-center space-x-2 mb-1\"
                                                    data-oid=\"3-w3.2s\"
                                                >
                                                    <p
                                                        className=\"font-medium\"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid=\"3i63i6f\"
                                                    >
                                                        {member.name}
                                                    </p>
                                                    <span
                                                        className={`px-2 py-0.5 rounded-full text-xs ${getStatusInfo(member.status).color} text-white`}
                                                        data-oid=\"z08uif3\"
                                                    >
                                                        {getStatusInfo(member.status).label}
                                                    </span>
                                                </div>
                                                <p
                                                    className=\"text-sm mb-1\"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid=\"__n.343\"
                                                >
                                                    {member.role}
                                                </p>
                                                <p
                                                    className=\"text-xs\"
                                                    style={{ color: 'var(--text-muted)' }}
                                                >
                                                    {member.currentProject}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className=\"flex justify-between text-xs\"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid=\"qe34_1h\"
                                        >
                                            <span data-oid=\"ahjvipo\">In: {member.inTime}</span>
                                            <span data-oid=\".zx5_9e\">Out: {member.outTime}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Announcements */}
                        <div
                            className=\"glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300\"
                            data-oid=\"e2cbup7\"
                        >
                            <div className=\"flex items-center space-x-2 mb-6\" data-oid=\"xt92p9h\">
                                <span className=\"text-2xl\" data-oid=\"n:uw:m8\">
                                    📢
                                </span>
                                <h3
                                    className=\"text-xl font-bold\"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid=\"cj0u0zd\"
                                >
                                    Announcements
                                </h3>
                            </div>
                            <div className=\"space-y-4\" data-oid=\"-nmyagj\">
                                {announcements.slice(0, 6).map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className={`p-4 rounded-xl border-l-4 transition-all hover:scale-105 cursor-pointer ${getPriorityColor(announcement.priority)}`}
                                        onClick={() => handleAnnouncementClick(announcement)}
                                        data-oid=\"r27gady\"
                                    >
                                        <div
                                            className=\"flex justify-between items-start mb-2\"
                                            data-oid=\"j-607g4\"
                                        >
                                            <h4
                                                className=\"font-medium hover:text-yellow-400 transition-colors\"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid=\".cd-:sq\"
                                            >
                                                {announcement.title}
                                            </h4>
                                            <div className=\"flex items-center space-x-2\">
                                                <span
                                                    className=\"text-xs px-2 py-1 rounded-full\"
                                                    style={{
                                                        background: 'var(--bg-tertiary)',
                                                        color: 'var(--text-secondary)',
                                                    }}
                                                    data-oid=\"--06rx3\"
                                                >
                                                    {announcement.type}
                                                </span>
                                                <span className=\"text-xs text-gray-400\">👆 Click for details</span>
                                            </div>
                                        </div>
                                        <p
                                            className=\"text-sm mb-3 leading-relaxed\"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid=\"207z8ce\"
                                        >
                                            {announcement.message}
                                        </p>
                                        <div className=\"flex justify-between items-center\">
                                            <p
                                                className=\"text-xs\"
                                                style={{ color: 'var(--text-muted)' }}
                                                data-oid=\"43dlad8\"
                                            >
                                                {announcement.time}
                                            </p>
                                            <p
                                                className=\"text-xs\"
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
                        <div
                            className=\"glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300\"
                            data-oid=\"recent-activities\"
                        >
                            <div className=\"flex items-center space-x-2 mb-6\">
                                <span className=\"text-2xl\">⚡</span>
                                <h3
                                    className=\"text-xl font-bold\"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Recent Activities
                                </h3>
                            </div>
                            <div className=\"space-y-3\">
                                {recentActivities.map((activity) => (
                                    <div
                                        key={activity.id}
                                        className=\"p-3 rounded-lg transition-all hover:scale-105\"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <div className=\"flex items-start space-x-3\">
                                            <span className=\"text-lg\">{getActivityIcon(activity.type)}</span>
                                            <div className=\"flex-1\">
                                                <div className=\"flex justify-between items-start mb-1\">
                                                    <span
                                                        className=\"font-medium text-sm\"
                                                        style={{ color: 'var(--text-primary)' }}
                                                    >
                                                        {activity.action}
                                                    </span>
                                                    <span
                                                        className=\"text-xs\"
                                                        style={{ color: 'var(--text-muted)' }}
                                                    >
                                                        {activity.time}
                                                    </span>
                                                </div>
                                                <p
                                                    className=\"text-xs mb-1\"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    {activity.description}
                                                </p>
                                                <span
                                                    className=\"text-xs px-2 py-1 rounded-full\"
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
                        <div
                            className=\"glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300\"
                            data-oid=\"upcoming-deadlines\"
                        >
                            <div className=\"flex items-center space-x-2 mb-6\">
                                <span className=\"text-2xl\">⏰</span>
                                <h3
                                    className=\"text-xl font-bold\"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Upcoming Deadlines
                                </h3>
                            </div>
                            <div className=\"space-y-4\">
                                {upcomingDeadlines.map((deadline) => (
                                    <div
                                        key={deadline.id}
                                        className=\"p-4 rounded-xl transition-all hover:scale-105\"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <div className=\"flex justify-between items-start mb-2\">
                                            <h4
                                                className=\"font-medium\"
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
                                            className=\"text-sm mb-2\"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {deadline.project}
                                        </p>
                                        <div className=\"flex justify-between items-center\">
                                            <span
                                                className=\"text-xs\"
                                                style={{ color: 'var(--text-muted)' }}
                                            >
                                                Due: {deadline.deadline}
                                            </span>
                                            <span
                                                className={`text-xs font-bold ${
                                                    deadline.daysLeft <= 3 ? 'text-red-400' : 
                                                    deadline.daysLeft <= 7 ? 'text-yellow-400' : 'text-green-400'
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
                        className=\"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4\"
                        onClick={closeAnnouncementModal}
                    >
                        <div
                            className=\"glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto\"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className=\"flex justify-between items-start mb-6\">
                                <div>
                                    <h2
                                        className=\"text-2xl font-bold mb-2\"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {selectedAnnouncement.title}
                                    </h2>
                                    <div className=\"flex items-center space-x-4 text-sm\">
                                        <span
                                            className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                        >
                                            {selectedAnnouncement.priority} priority
                                        </span>
                                        <span
                                            className=\"px-3 py-1 rounded-full\"
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
                                    className=\"text-2xl hover:text-red-400 transition-colors\"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    ×
                                </button>
                            </div>

                            <div className=\"space-y-6\">
                                <div>
                                    <p
                                        className=\"text-lg leading-relaxed\"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {selectedAnnouncement.message}
                                    </p>
                                </div>

                                <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">
                                    <div
                                        className=\"p-4 rounded-xl\"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <h4
                                            className=\"font-medium mb-2\"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            📝 Details
                                        </h4>
                                        <div className=\"space-y-2 text-sm\">
                                            <div>
                                                <span style={{ color: 'var(--text-secondary)' }}>Author: </span>
                                                <span style={{ color: 'var(--text-primary)' }}>
                                                    {selectedAnnouncement.author}
                                                </span>
                                            </div>
                                            <div>
                                                <span style={{ color: 'var(--text-secondary)' }}>Department: </span>
                                                <span style={{ color: 'var(--text-primary)' }}>
                                                    {selectedAnnouncement.department}
                                                </span>
                                            </div>
                                            {selectedAnnouncement.location && (
                                                <div>
                                                    <span style={{ color: 'var(--text-secondary)' }}>Location: </span>
                                                    <span style={{ color: 'var(--text-primary)' }}>
                                                        {selectedAnnouncement.location}
                                                    </span>
                                                </div>
                                            )}
                                            {selectedAnnouncement.duration && (
                                                <div>
                                                    <span style={{ color: 'var(--text-secondary)' }}>Duration: </span>
                                                    <span style={{ color: 'var(--text-primary)' }}>
                                                        {selectedAnnouncement.duration}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {selectedAnnouncement.attendees && (
                                        <div
                                            className=\"p-4 rounded-xl\"
                                            style={{ background: 'var(--bg-tertiary)' }}
                                        >
                                            <h4
                                                className=\"font-medium mb-2\"
                                                style={{ color: 'var(--text-primary)' }}
                                            >
                                                👥 Attendees
                                            </h4>
                                            <div className=\"space-y-1 text-sm\">
                                                {selectedAnnouncement.attendees.map((attendee, index) => (
                                                    <div
                                                        key={index}
                                                        style={{ color: 'var(--text-secondary)' }}
                                                    >
                                                        • {attendee}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {selectedAnnouncement.agenda && (
                                    <div
                                        className=\"p-4 rounded-xl\"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <h4
                                            className=\"font-medium mb-3\"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            📋 Agenda
                                        </h4>
                                        <div className=\"space-y-2\">
                                            {selectedAnnouncement.agenda.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className=\"flex items-start space-x-2 text-sm\"
                                                >
                                                    <span
                                                        className=\"font-medium\"
                                                        style={{ color: 'var(--accent-yellow)' }}
                                                    >
                                                        {index + 1}.
                                                    </span>
                                                    <span style={{ color: 'var(--text-secondary)' }}>
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedAnnouncement.meetingLink && (
                                    <div className=\"flex justify-center\">
                                        <a
                                            href={selectedAnnouncement.meetingLink}
                                            target=\"_blank\"
                                            rel=\"noopener noreferrer\"
                                            className=\"px-6 py-3 rounded-lg font-medium transition-all hover:scale-105\"
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
