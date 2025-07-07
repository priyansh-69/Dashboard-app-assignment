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
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);

    // Update time every second and handle mounting
    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Close status dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (showStatusDropdown) {
                setShowStatusDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showStatusDropdown]);

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

    const handleStatusChange = (newStatus: string) => {
        setCurrentStatus(newStatus);
        setShowStatusDropdown(false);
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
        <div className="min-h-screen relative" data-oid="g_h-r6l">
            {/* 🌊 Animated Background with Gradient Orbs */}
            <div className="animated-background" data-oid="_op8q4-">
                <div className="orb orb-1" data-oid="bf7fr_h"></div>
                <div className="orb orb-2" data-oid="3_hs11:"></div>
                <div className="orb orb-3" data-oid="lx59j9y"></div>
            </div>
            {/* ✨ Enhanced Header with Glass Morphism */}
            <header
                className="glass-effect border-b-0 rounded-none backdrop-blur-xl"
                data-oid="d282xdw"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" data-oid="72vnwfw">
                    <div className="flex justify-between items-center h-20" data-oid="jbk2riy">
                        <div className="flex items-center space-x-4" data-oid="va8y33w">
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center glow-primary hover-lift"
                                style={{ background: 'var(--gradient-primary)' }}
                                data-oid="eofcbpk"
                            >
                                <span className="text-white font-bold text-lg" data-oid="pdu5ysb">
                                    🚀
                                </span>
                            </div>
                            <div data-oid="xugtdou">
                                <h1 className="text-2xl font-bold gradient-text" data-oid="8631cm7">
                                    Intern Dashboard
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

                        {/* Enhanced Header Right - Time and Profile */}
                        <div className="flex items-center space-x-8" data-oid="ehfe_na">
                            {/* Live Clock with Glow */}
                            <div
                                className="text-right glass-effect p-4 rounded-xl hover-lift"
                                data-oid="5q_liv1"
                            >
                                <div
                                    className="text-2xl font-bold gradient-text-secondary glow-pulse"
                                    data-oid="_s.ttsc"
                                >
                                    {formatTime(currentTime)}
                                </div>
                                <div
                                    className="text-xs"
                                    style={{ color: 'var(--text-secondary)' }}
                                    data-oid="ypkx.nc"
                                >
                                    ⏰ Current Time
                                </div>
                            </div>

                            {/* Enhanced Profile */}
                            <div
                                className="flex items-center space-x-4 glass-effect p-3 rounded-xl hover-lift"
                                data-oid="fkpu-sw"
                            >
                                <div className="text-right" data-oid="bnqp.j5">
                                    <div
                                        className="text-sm font-semibold"
                                        style={{ color: 'var(--text-primary)' }}
                                        data-oid="3.byoo5"
                                    >
                                        {internProfile.name}
                                    </div>
                                    <div
                                        className="text-xs"
                                        style={{ color: 'var(--accent-warning)' }}
                                        data-oid="zzxeixf"
                                    >
                                        {internProfile.role}
                                    </div>
                                </div>
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center glow-primary status-indicator status-active"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="ghor44c"
                                >
                                    <span
                                        className="text-white font-bold text-lg"
                                        data-oid="rbtqxl1"
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 🚀 Enhanced Main Content with Better Spacing */}
            <main
                className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 relative z-10"
                data-oid="26fh1kx"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" data-oid="62oi3.d">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-12" data-oid="ifpi4l2">
                        {/* 🎨 Enhanced Profile Card with Modern Design */}
                        <div
                            className="glass-effect rounded-3xl p-10 hover-lift glow-primary"
                            data-oid="au_s-jw"
                        >
                            <div className="flex items-start space-x-8" data-oid="nz.v3xv">
                                <div
                                    className="w-24 h-24 rounded-3xl flex items-center justify-center glow-primary float-animation"
                                    style={{ background: 'var(--gradient-primary)' }}
                                    data-oid="e.r4sap"
                                >
                                    <span
                                        className="text-white font-bold text-3xl"
                                        data-oid="4:5c73_"
                                    >
                                        {internProfile.avatar}
                                    </span>
                                </div>
                                <div className="flex-1" data-oid="jfxc1uu">
                                    <div
                                        className="flex items-center space-x-4 mb-3"
                                        data-oid="nadwif:"
                                    >
                                        <h2
                                            className="text-3xl font-bold gradient-text"
                                            data-oid="6h1vx:n"
                                        >
                                            {internProfile.name}
                                        </h2>
                                        <span
                                            className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusInfo(currentStatus).color} text-white glow-secondary`}
                                            data-oid="lg86k29"
                                        >
                                            {getStatusInfo(currentStatus).icon}{' '}
                                            {getStatusInfo(currentStatus).label}
                                        </span>
                                    </div>
                                    <p
                                        className="font-semibold text-xl mb-6 gradient-text-secondary"
                                        data-oid="3_a3xcb"
                                    >
                                        {internProfile.role}
                                    </p>
                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base"
                                        data-oid="3.2a28v"
                                    >
                                        <div className="space-y-4" data-oid="nmra8_o">
                                            <div
                                                className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                                data-oid="ip6a:_9"
                                            >
                                                <span className="text-2xl" data-oid="vdsmwi0">
                                                    📧
                                                </span>
                                                <div data-oid="40ggs.a">
                                                    <div
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid=".4slmox"
                                                    >
                                                        Email
                                                    </div>
                                                    <div
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="o6n..n_"
                                                    >
                                                        {internProfile.email}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                                data-oid="g8dxk5b"
                                            >
                                                <span className="text-2xl" data-oid="wad8bwj">
                                                    🎓
                                                </span>
                                                <div data-oid="qs0ch6i">
                                                    <div
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="h-cwn7:"
                                                    >
                                                        College
                                                    </div>
                                                    <div
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="71vou3v"
                                                    >
                                                        {internProfile.college}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                                data-oid="yd49:e7"
                                            >
                                                <span className="text-2xl" data-oid="r-bj:g8">
                                                    📚
                                                </span>
                                                <div data-oid="we_satp">
                                                    <div
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="7qse.tn"
                                                    >
                                                        Year
                                                    </div>
                                                    <div
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="dn.eb2n"
                                                    >
                                                        {internProfile.year}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4" data-oid="iy66k67">
                                            <div
                                                className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                                data-oid="::17gon"
                                            >
                                                <span className="text-2xl" data-oid="tt-4dcz">
                                                    🏢
                                                </span>
                                                <div data-oid="-8481cl">
                                                    <div
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="qy:aiol"
                                                    >
                                                        Department
                                                    </div>
                                                    <div
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="hztmys8"
                                                    >
                                                        {internProfile.department}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                                data-oid="y:j6777"
                                            >
                                                <span className="text-2xl" data-oid="7y22ubq">
                                                    👤
                                                </span>
                                                <div data-oid="ghz.dby">
                                                    <div
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="r7qwwpb"
                                                    >
                                                        Manager
                                                    </div>
                                                    <div
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="rm2rxo9"
                                                    >
                                                        {internProfile.manager}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="flex items-center space-x-3 p-3 rounded-xl glass-effect"
                                                data-oid="5s:u1w9"
                                            >
                                                <span className="text-2xl" data-oid="zk3q2gp">
                                                    📅
                                                </span>
                                                <div data-oid="h6n6odk">
                                                    <div
                                                        className="text-xs"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                        data-oid="hs4kxwe"
                                                    >
                                                        Start Date
                                                    </div>
                                                    <div
                                                        className="font-medium"
                                                        style={{ color: 'var(--text-primary)' }}
                                                        data-oid="3jr1j8y"
                                                    >
                                                        {internProfile.startDate}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ⏰ Enhanced Time Tracking Card */}
                        <div
                            className="glass-effect rounded-3xl p-8 hover-lift glow-secondary"
                            data-oid=":g0hmx."
                        >
                            <div
                                className="flex items-center justify-between mb-8"
                                data-oid="5vjnx09"
                            >
                                <h3 className="text-2xl font-bold gradient-text" data-oid="26m3g2q">
                                    ⏰ Time Tracking
                                </h3>
                                <button
                                    onClick={() => setIsEditingTime(!isEditingTime)}
                                    className="btn-secondary hover-lift"
                                    data-oid="lvro3qx"
                                >
                                    {isEditingTime ? '💾 Save' : '✏️ Edit Times'}
                                </button>
                            </div>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                data-oid="48tbk-8"
                            >
                                <div
                                    className="glass-effect p-6 rounded-2xl hover-lift glow-secondary"
                                    data-oid="g2h.emu"
                                >
                                    <div
                                        className="flex items-center space-x-3 mb-4"
                                        data-oid="6_fyase"
                                    >
                                        <span className="text-3xl" data-oid="_j:8l9z">
                                            🌅
                                        </span>
                                        <span
                                            className="font-semibold text-lg"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="c_slc7q"
                                        >
                                            Check In
                                        </span>
                                    </div>
                                    {isEditingTime ? (
                                        <input
                                            type="time"
                                            value={inTime.replace(/\s(AM|PM)/, '')}
                                            onChange={(e) => setInTime(e.target.value)}
                                            className="w-full p-4 rounded-xl border-0 focus:ring-2 focus:ring-green-500 glass-effect"
                                            style={{
                                                background: 'var(--bg-secondary)',
                                                color: 'var(--text-primary)',
                                            }}
                                            data-oid="kl:xgqh"
                                        />
                                    ) : (
                                        <div
                                            className="text-3xl font-bold gradient-text-secondary"
                                            data-oid="hx64.8o"
                                        >
                                            {inTime}
                                        </div>
                                    )}
                                </div>

                                <div
                                    className="glass-effect p-6 rounded-2xl hover-lift glow-danger"
                                    data-oid="bkyvt5e"
                                >
                                    <div
                                        className="flex items-center space-x-3 mb-4"
                                        data-oid="o8av_fq"
                                    >
                                        <span className="text-3xl" data-oid="n6_r1k.">
                                            🌇
                                        </span>
                                        <span
                                            className="font-semibold text-lg"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="-veb7g2"
                                        >
                                            Check Out
                                        </span>
                                    </div>
                                    {isEditingTime ? (
                                        <input
                                            type="time"
                                            value={outTime.replace(/\s(AM|PM)/, '')}
                                            onChange={(e) => setOutTime(e.target.value)}
                                            className="w-full p-4 rounded-xl border-0 focus:ring-2 focus:ring-red-500 glass-effect"
                                            style={{
                                                background: 'var(--bg-secondary)',
                                                color: 'var(--text-primary)',
                                            }}
                                            data-oid="2bkz3qr"
                                        />
                                    ) : (
                                        <div
                                            className="text-3xl font-bold"
                                            style={{ color: 'var(--accent-danger)' }}
                                            data-oid="d7ojiw:"
                                        >
                                            {outTime}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div
                                className="mt-8 glass-effect p-6 rounded-2xl hover-lift glow-warning"
                                data-oid=":n2:60l"
                            >
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="7zqorf2"
                                >
                                    <div className="flex items-center space-x-3" data-oid="ao65410">
                                        <span className="text-2xl" data-oid="hfci3.5">
                                            ⏱️
                                        </span>
                                        <span
                                            className="font-semibold text-lg"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="xc4a5oj"
                                        >
                                            Total Work Hours Today
                                        </span>
                                    </div>
                                    <span
                                        className="text-3xl font-bold gradient-text-secondary"
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

                    {/* 📊 Enhanced Right Column - Performance Sidebar */}
                    <div className="space-y-8" data-oid="xk2g52j">
                        {/* 🚀 Enhanced Performance Metrics */}
                        <div
                            className="glass-effect p-6 rounded-2xl hover-lift glow-primary"
                            data-oid="mlfx-:j"
                        >
                            <h3 className="text-xl font-bold mb-6 gradient-text" data-oid="1ao0yu.">
                                📊 Performance Metrics
                            </h3>
                            <div className="space-y-4" data-oid="dlfs0af">
                                <div
                                    className="glass-effect p-4 rounded-xl hover-lift"
                                    data-oid="tp8panj"
                                >
                                    <div
                                        className="flex items-center space-x-3 mb-2"
                                        data-oid="xti183:"
                                    >
                                        <span className="text-2xl" data-oid="15::8fx">
                                            ✅
                                        </span>
                                        <span
                                            className="font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="ayk7s3o"
                                        >
                                            Tasks Completed
                                        </span>
                                    </div>
                                    <span
                                        className="text-2xl font-bold gradient-text-secondary"
                                        data-oid="_j7kf-r"
                                    >
                                        {performanceStats.tasksCompleted}
                                    </span>
                                </div>
                                <div
                                    className="glass-effect p-4 rounded-xl hover-lift"
                                    data-oid="hbmfy1."
                                >
                                    <div
                                        className="flex items-center space-x-3 mb-2"
                                        data-oid="n66kc8p"
                                    >
                                        <span className="text-2xl" data-oid="lw7__ts">
                                            📈
                                        </span>
                                        <span
                                            className="font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid="a:15::q"
                                        >
                                            Productivity Score
                                        </span>
                                    </div>
                                    <span
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--accent-secondary)' }}
                                        data-oid="6s_--it"
                                    >
                                        {performanceStats.productivityScore}%
                                    </span>
                                </div>
                                <div
                                    className="glass-effect p-4 rounded-xl hover-lift"
                                    data-oid=".lrx2xq"
                                >
                                    <div
                                        className="flex items-center space-x-3 mb-2"
                                        data-oid="hxdqtjf"
                                    >
                                        <span className="text-2xl" data-oid="1.dcwh7">
                                            💻
                                        </span>
                                        <span
                                            className="font-medium"
                                            style={{ color: 'var(--text-secondary)' }}
                                            data-oid=":vh84z0"
                                        >
                                            Code Commits
                                        </span>
                                    </div>
                                    <span
                                        className="text-2xl font-bold"
                                        style={{ color: 'var(--accent-primary)' }}
                                        data-oid="mzzy8i7"
                                    >
                                        {performanceStats.codeCommits}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 📢 Enhanced Announcements */}
                        <div
                            className="glass-effect p-6 rounded-2xl hover-lift glow-warning"
                            data-oid="jbtonu7"
                        >
                            <h3 className="text-xl font-bold mb-6 gradient-text" data-oid=".lkt0o0">
                                📢 Recent Announcements
                            </h3>
                            <div className="space-y-4" data-oid="i4wt9lq">
                                {announcements.slice(0, 3).map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="glass-effect p-4 rounded-xl hover-lift cursor-pointer transition-all duration-300"
                                        onClick={() => handleAnnouncementClick(announcement)}
                                        data-oid="6bv_ona"
                                    >
                                        <div
                                            className="flex items-start space-x-3"
                                            data-oid="dubrqdf"
                                        >
                                            <span className="text-xl" data-oid="9r3x5_.">
                                                {announcement.priority === 'high'
                                                    ? '🔴'
                                                    : announcement.priority === 'medium'
                                                      ? '🟡'
                                                      : '🟢'}
                                            </span>
                                            <div className="flex-1" data-oid="58-4yc3">
                                                <h4
                                                    className="font-semibold mb-2"
                                                    style={{ color: 'var(--text-primary)' }}
                                                    data-oid="bc_x_y5"
                                                >
                                                    {announcement.title}
                                                </h4>
                                                <p
                                                    className="text-sm mb-2"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                    data-oid="3r:va8f"
                                                >
                                                    {announcement.message.substring(0, 60)}...
                                                </p>
                                                <p
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-muted)' }}
                                                    data-oid=".vbuhtw"
                                                >
                                                    {announcement.time}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 👥 Enhanced Team Members */}
                        <div
                            className="glass-effect p-6 rounded-2xl hover-lift glow-secondary"
                            data-oid="0tlubts"
                        >
                            <h3 className="text-xl font-bold mb-6 gradient-text" data-oid="4_--qh3">
                                👥 Team Members
                            </h3>
                            <div className="space-y-4" data-oid="t_0:fz5">
                                {teamMembers.slice(0, 4).map((member, index) => (
                                    <div
                                        key={index}
                                        className="glass-effect p-4 rounded-xl hover-lift flex items-center space-x-4"
                                        data-oid="-opr611"
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold status-indicator status-${member.status} glow-primary`}
                                            style={{ background: 'var(--gradient-secondary)' }}
                                            data-oid="v8hzzq2"
                                        >
                                            {member.avatar}
                                        </div>
                                        <div className="flex-1" data-oid="p8_39xx">
                                            <div
                                                className="font-semibold"
                                                style={{ color: 'var(--text-primary)' }}
                                                data-oid="vrlzxhy"
                                            >
                                                {member.name}
                                            </div>
                                            <div
                                                className="text-sm"
                                                style={{ color: 'var(--text-secondary)' }}
                                                data-oid="xf5225k"
                                            >
                                                {member.role}
                                            </div>
                                            <div
                                                className="text-xs"
                                                style={{ color: 'var(--accent-warning)' }}
                                                data-oid="q8_30qw"
                                            >
                                                {getStatusInfo(member.status).icon}{' '}
                                                {getStatusInfo(member.status).label}
                                            </div>
                                        </div>
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
