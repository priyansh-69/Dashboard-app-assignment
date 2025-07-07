'use client';

import { useState, useEffect } from 'react';
import { TaskManager } from '../components/TaskManager';
import { TimeTracker } from '../components/TimeTracker';

export default function Page() {
    const [currentStatus, setCurrentStatus] = useState('active');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);
    const [inTime, setInTime] = useState('09:00 AM');
    const [outTime, setOutTime] = useState('06:00 PM');
    const [isEditingTime, setIsEditingTime] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);
    const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);

    // Update time every second and handle mounting
    useEffect(() => {
        setMounted(true);
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

    const handleAnnouncementClick = (announcement: any) => {
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
            {/* Header */}
            <header
                className="card border-b-0 rounded-none"
                style={{ borderColor: 'var(--border-primary)' }}
                data-oid="d282xdw"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="72vnwfw">
                    <div className="flex justify-between items-center h-16" data-oid="jbk2riy">
                        <div className="flex items-center space-x-3" data-oid="va8y33w">
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="eofcbpk"
                            >
                                <span className="text-white font-bold" data-oid="pdu5ysb">
                                    D
                                </span>
                            </div>
                            <div data-oid="xugtdou">
                                <h1
                                    className="text-xl font-semibold"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="8631cm7"
                                >
                                    Dashboard
                                </h1>
                                <p
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="3s6xz1i"
                                >
                                    {formatDate(currentTime)}
                                </p>
                            </div>
                        </div>

                        {/* Header Right - Time and Profile */}
                        <div className="flex items-center space-x-6" data-oid="ehfe_na">
                            {/* Live Clock */}
                            <div className="text-right" data-oid="5q_liv1">
                                <div
                                    className="text-xl font-semibold"
                                    style={{ color: 'var(--accent-primary)' }}
                                    data-oid="_s.ttsc"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="ypkx.nc"
                                >
                                    Current Time
                                </div>
                            </div>

                            {/* Profile */}
                            <div className="flex items-center space-x-3" data-oid="fkpu-sw">
                                <div className="text-right" data-oid="bnqp.j5">
                                    <div
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="3.byoo5"
                                    >
                                        {internProfile.name}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="zzxeixf"
                                    >
                                        {internProfile.role}
                                    </div>
                                </div>
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="ghor44c"
                                >
                                    <span className="text-white font-semibold" data-oid="rbtqxl1">
                                        {internProfile.avatar}
                                    </span>
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

                        {/* Task Management */}
                        <TaskManager data-oid="ss5rfxv" />

                        {/* Time Tracker */}
                        <TimeTracker data-oid="j09wf6o" />
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6" data-oid="xk2g52j">
                        {/* Quick Stats */}
                        <div className="card p-4" data-oid="mlfx-:j">
                            <h3
                                className="text-sm font-semibold mb-4"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="1ao0yu."
                            >
                                Quick Stats
                            </h3>
                            <div className="space-y-3" data-oid="dlfs0af">
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="tp8panj"
                                >
                                    <span
                                        className="text-sm"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="ayk7s3o"
                                    >
                                        Tasks Completed
                                    </span>
                                    <span
                                        className="font-semibold"
                                        style={{ color: 'var(--accent-primary)' }}
                                        data-oid="_j7kf-r"
                                    >
                                        {performanceStats.tasksCompleted}
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="hbmfy1."
                                >
                                    <span
                                        className="text-sm"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid="a:15::q"
                                    >
                                        Productivity
                                    </span>
                                    <span
                                        className="font-semibold"
                                        style={{ color: 'var(--accent-secondary)' }}
                                        data-oid="6s_--it"
                                    >
                                        {performanceStats.productivityScore}%
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid=".lrx2xq"
                                >
                                    <span
                                        className="text-sm"
                                        style={{ color: 'var(--text-secondary)' }}
                                        data-oid=":vh84z0"
                                    >
                                        Code Commits
                                    </span>
                                    <span
                                        className="font-semibold"
                                        style={{ color: 'var(--accent-primary)' }}
                                        data-oid="mzzy8i7"
                                    >
                                        {performanceStats.codeCommits}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Announcements */}
                        <div className="card p-4" data-oid="jbtonu7">
                            <h3
                                className="text-sm font-semibold mb-4"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid=".lkt0o0"
                            >
                                Recent Announcements
                            </h3>
                            <div className="space-y-3" data-oid="i4wt9lq">
                                {announcements.slice(0, 3).map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="6bv_ona"
                                    >
                                        <h4
                                            className="text-sm font-medium mb-1"
                                            style={{ color: 'var(--text-primary)' }}
                                            data-oid="bc_x_y5"
                                        >
                                            {announcement.title}
                                        </h4>
                                        <p
                                            className="text-xs"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="3r:va8f"
                                        >
                                            {announcement.message.substring(0, 80)}...
                                        </p>
                                        <p
                                            className="text-xs mt-1"
                                            style={{ color: 'var(--text-muted)' }}
                                            data-oid=".vbuhtw"
                                        >
                                            {announcement.time}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Team Members */}
                        <div className="card p-4" data-oid="0tlubts">
                            <h3
                                className="text-sm font-semibold mb-4"
                                style={{ color: 'var(--text-primary)' }}
                                data-oid="4_--qh3"
                            >
                                Team Members
                            </h3>
                            <div className="space-y-3" data-oid="t_0:fz5">
                                {teamMembers.slice(0, 4).map((member, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3"
                                        data-oid="-opr611"
                                    >
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
                                            style={{ background: 'var(--gradient-secondary)' }}
                                            data-oid="v8hzzq2"
                                        >
                                            {member.avatar}
                                        </div>
                                        <div className="flex-1" data-oid="p8_39xx">
                                            <div
                                                className="text-sm font-medium"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="vrlzxhy"
                                            >
                                                {member.name}
                                            </div>
                                            <div
                                                className="text-xs"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="xf5225k"
                                            >
                                                {member.role}
                                            </div>
                                        </div>
                                        <div
                                            className={`w-2 h-2 rounded-full ${getStatusInfo(member.status).color}`}
                                            data-oid="hquyicp"
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Announcement Modal */}
            {showAnnouncementModal && selectedAnnouncement && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={closeAnnouncementModal}
                    data-oid=".gcqy2p"
                >
                    <div
                        className="card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="38ycuk8"
                    >
                        <div className="flex justify-between items-start mb-6" data-oid="nn334-g">
                            <div data-oid="oxlc8ep">
                                <h2
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                    data-oid="k:-jk85"
                                >
                                    {selectedAnnouncement.title}
                                </h2>
                                <div
                                    className="flex items-center space-x-3 text-sm"
                                    data-oid="uy-qcbc"
                                >
                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${getPriorityBadgeColor(selectedAnnouncement.priority)}`}
                                        data-oid="nhmpngd"
                                    >
                                        {selectedAnnouncement.priority} priority
                                    </span>
                                    <span
                                        className="px-3 py-1 rounded-full"
                                        style={{
                                            background: 'var(--bg-tertiary)',
                                            color: 'var(--text-secondary)',
                                        }}
                                        data-oid="65p3zfy"
                                    >
                                        {selectedAnnouncement.type}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }} data-oid="8m43n4.">
                                        {selectedAnnouncement.time}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={closeAnnouncementModal}
                                className="text-2xl hover:text-red-500 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                data-oid="ds8j6fq"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6" data-oid="zawdiyr">
                            {/* Main Message */}
                            <div data-oid="3z2ovi4">
                                <p
                                    className="text-lg leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="o_-kuu0"
                                >
                                    {selectedAnnouncement.message}
                                </p>
                            </div>

                            {/* Details Section */}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="n:lvcli"
                            >
                                <div
                                    className="p-4 rounded-lg"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="25n_hf8"
                                >
                                    <h4
                                        className="font-semibold mb-3"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="6ro07a:"
                                    >
                                        📝 Details
                                    </h4>
                                    <div className="space-y-2 text-sm" data-oid="7u010tx">
                                        <div data-oid="a8ppfy4">
                                            <span
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="1djwaxk"
                                            >
                                                Author:{' '}
                                            </span>
                                            <span
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="ecqr5uh"
                                            >
                                                {selectedAnnouncement.author}
                                            </span>
                                        </div>
                                        <div data-oid="2m29ysa">
                                            <span
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="058ynya"
                                            >
                                                Department:{' '}
                                            </span>
                                            <span
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="l58277."
                                            >
                                                {selectedAnnouncement.department}
                                            </span>
                                        </div>
                                        {selectedAnnouncement.location && (
                                            <div data-oid="mc6bg4v">
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="ylr488a"
                                                >
                                                    Location:{' '}
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="j4.e-4o"
                                                >
                                                    {selectedAnnouncement.location}
                                                </span>
                                            </div>
                                        )}
                                        {selectedAnnouncement.duration && (
                                            <div data-oid="1tw9j0b">
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="j:x60wv"
                                                >
                                                    Duration:{' '}
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="xbpmtke"
                                                >
                                                    {selectedAnnouncement.duration}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Additional Info */}
                                {(selectedAnnouncement.attendees ||
                                    selectedAnnouncement.newEmployees ||
                                    selectedAnnouncement.trainingModules) && (
                                    <div
                                        className="p-4 rounded-lg"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                        data-oid="3thdh_p"
                                    >
                                        <h4
                                            className="font-semibold mb-3"
                                            style={{ color: 'var(--text-primary)' }}
                                            data-oid="x01icua"
                                        >
                                            {selectedAnnouncement.attendees && '👥 Attendees'}
                                            {selectedAnnouncement.newEmployees &&
                                                '👋 New Team Members'}
                                            {selectedAnnouncement.trainingModules &&
                                                '📚 Training Modules'}
                                        </h4>
                                        <div className="space-y-1 text-sm" data-oid="qqqgd4x">
                                            {selectedAnnouncement.attendees?.map(
                                                (attendee: string, index: number) => (
                                                    <div
                                                        key={index}
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="6b2rta4"
                                                    >
                                                        • {attendee}
                                                    </div>
                                                ),
                                            )}
                                            {selectedAnnouncement.newEmployees?.map(
                                                (employee: any, index: number) => (
                                                    <div
                                                        key={index}
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="kuiulj5"
                                                    >
                                                        • {employee.name} - {employee.role} (
                                                        {employee.department})
                                                    </div>
                                                ),
                                            )}
                                            {selectedAnnouncement.trainingModules?.map(
                                                (module: string, index: number) => (
                                                    <div
                                                        key={index}
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="om2plqg"
                                                    >
                                                        • {module}
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Agenda Section */}
                            {selectedAnnouncement.agenda && (
                                <div
                                    className="p-4 rounded-lg"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="jd1:cs6"
                                >
                                    <h4
                                        className="font-semibold mb-3"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="02x1a5f"
                                    >
                                        📋 Agenda
                                    </h4>
                                    <div className="space-y-2" data-oid="ji_e-4-">
                                        {selectedAnnouncement.agenda.map(
                                            (item: string, index: number) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start space-x-2 text-sm"
                                                    data-oid="4p_.2v7"
                                                >
                                                    <span
                                                        className="font-medium"
                                                        style={{ color: 'var(--accent-primary)' }}
                                                        data-oid="py2y8t4"
                                                    >
                                                        {index + 1}.
                                                    </span>
                                                    <span
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="4c05s0y"
                                                    >
                                                        {item}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Additional Details */}
                            {(selectedAnnouncement.details ||
                                selectedAnnouncement.improvements ||
                                selectedAnnouncement.affectedAreas) && (
                                <div
                                    className="p-4 rounded-lg"
                                    style={{ background: 'var(--bg-tertiary)' }}
                                    data-oid="y1u:-6."
                                >
                                    <h4
                                        className="font-semibold mb-3"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="kselavk"
                                    >
                                        ℹ️ Additional Information
                                    </h4>
                                    <div className="space-y-3 text-sm" data-oid="eh0cpok">
                                        {selectedAnnouncement.details && (
                                            <div data-oid="7b4x53l">
                                                <span
                                                    className="font-medium"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="9hk6sxc"
                                                >
                                                    Details:
                                                </span>
                                                <span
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="o40o7.u"
                                                >
                                                    {selectedAnnouncement.details}
                                                </span>
                                            </div>
                                        )}
                                        {selectedAnnouncement.improvements && (
                                            <div data-oid="d.i5lb:">
                                                <span
                                                    className="font-medium"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="77z079q"
                                                >
                                                    Improvements:
                                                </span>
                                                <ul className="mt-1 space-y-1" data-oid="lhn.tqj">
                                                    {selectedAnnouncement.improvements.map(
                                                        (improvement: string, index: number) => (
                                                            <li
                                                                key={index}
                                                                style={{
                                                                    color: 'var(--text-secondary)',
                                                                }}
                                                                data-oid="_apri2w"
                                                            >
                                                                • {improvement}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                        {selectedAnnouncement.affectedAreas && (
                                            <div data-oid="0fhdfzu">
                                                <span
                                                    className="font-medium"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="w8py:d:"
                                                >
                                                    Affected Areas:
                                                </span>
                                                <ul className="mt-1 space-y-1" data-oid="eld7tc9">
                                                    {selectedAnnouncement.affectedAreas.map(
                                                        (area: string, index: number) => (
                                                            <li
                                                                key={index}
                                                                style={{
                                                                    color: 'var(--text-secondary)',
                                                                }}
                                                                data-oid="q-f5265"
                                                            >
                                                                • {area}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex justify-center space-x-4" data-oid="63oi4rp">
                                {selectedAnnouncement.meetingLink && (
                                    <a
                                        href={selectedAnnouncement.meetingLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        data-oid="ttovrkg"
                                    >
                                        🔗 Join Meeting
                                    </a>
                                )}
                                {selectedAnnouncement.trainingLink && (
                                    <a
                                        href={selectedAnnouncement.trainingLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                        data-oid="j8wclpd"
                                    >
                                        📚 Start Training
                                    </a>
                                )}
                                <button
                                    onClick={closeAnnouncementModal}
                                    className="btn-secondary"
                                    data-oid="ugftd5k"
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
