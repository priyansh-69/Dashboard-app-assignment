// 📊 DUMMY DATA FOR INTERN DASHBOARD
// This file contains all the mock data used in the dashboard for demonstration purposes

export interface InternProfile {
    name: string;
    role: string;
    email: string;
    college: string;
    year: string;
    avatar: string;
    department: string;
    manager: string;
    startDate: string;
    employeeId: string;
    location: string;
    phone: string;
}

export interface TeamMember {
    name: string;
    role: string;
    avatar: string;
    status: 'active' | 'busy' | 'away' | 'out-of-office';
    email: string;
    department: string;
}

export interface ProjectInfo {
    name: string;
    description: string;
    status: string;
    progress: number;
    techStack: string[];
    deadline: string;
    priority: 'High' | 'Medium' | 'Low';
    projectManager: string;
    teamSize: number;
    completedTasks: number;
    totalTasks: number;
    nextMilestone: string;
    milestoneDate: string;
}

export interface Announcement {
    id: number;
    title: string;
    message: string;
    time: string;
    priority: 'high' | 'medium' | 'low';
    type: 'meeting' | 'update' | 'review' | 'training' | 'general';
    author: string;
}

// 👤 INTERN PROFILE DATA (Demo)
export const internProfile: InternProfile = {
    name: 'Priyansh',
    role: 'Frontend Intern',
    email: 'priyansh.kandwal@company.com',
    college: 'Delhi Technological University',
    year: 'Final Year (4th Year)',
    avatar: 'PK',
    department: 'Engineering',
    manager: 'Sarah Chen',
    startDate: 'June 1, 2024',
    employeeId: 'ENG-2024-001',
    location: 'Delhi, India',
    phone: '+91 98765 43210',
};

// 🚀 ASSIGNED PROJECT INFO (Demo)
export const projectInfo: ProjectInfo = {
    name: 'Priyansh-Dashboard-App',
    description:
        'Building a modern, responsive intern dashboard application with real-time time tracking, task management, and performance analytics using Next.js and TypeScript.',
    status: 'In Progress',
    progress: 85,
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Recharts'],
    deadline: 'July 30, 2024',
    priority: 'High',
    projectManager: 'Sarah Chen',
    teamSize: 4,
    completedTasks: 28,
    totalTasks: 33,
    nextMilestone: 'Production Deployment',
    milestoneDate: 'July 25, 2024',
};

// 👥 TEAM MEMBERS LIST (Demo)
export const teamMembers: TeamMember[] = [
    {
        name: 'Sarah Chen',
        role: 'Senior Developer',
        avatar: 'SC',
        status: 'active',
        email: 'sarah.chen@company.com',
        department: 'Engineering',
    },
    {
        name: 'Mike Rodriguez',
        role: 'UI/UX Designer',
        avatar: 'MR',
        status: 'busy',
        email: 'mike.rodriguez@company.com',
        department: 'Design',
    },
    {
        name: 'Emily Davis',
        role: 'Product Manager',
        avatar: 'ED',
        status: 'active',
        email: 'emily.davis@company.com',
        department: 'Product',
    },
    {
        name: 'James Wilson',
        role: 'DevOps Engineer',
        avatar: 'JW',
        status: 'out-of-office',
        email: 'james.wilson@company.com',
        department: 'Infrastructure',
    },
    {
        name: 'Lisa Park',
        role: 'QA Engineer',
        avatar: 'LP',
        status: 'active',
        email: 'lisa.park@company.com',
        department: 'Quality Assurance',
    },
];

// 📢 ANNOUNCEMENTS SECTION (Demo)
export const announcements: Announcement[] = [
    {
        id: 1,
        title: 'Daily Stand-up Meeting',
        message:
            'Team stand-up meeting at 10:00 AM in Conference Room B. Please come prepared with your updates and any blockers you might be facing.',
        time: '9:30 AM',
        priority: 'high',
        type: 'meeting',
        author: 'Sarah Chen',
    },
    {
        id: 2,
        title: 'Project Deadline Extended',
        message:
            'Priyansh-Dashboard-App deadline has been extended to July 30th due to additional feature requests from stakeholders.',
        time: 'Yesterday',
        priority: 'medium',
        type: 'update',
        author: 'Emily Davis',
    },
    {
        id: 3,
        title: 'Code Review Session',
        message:
            'Weekly code review session has been moved to Thursday 2:00 PM. Please have your PRs ready for review.',
        time: '2 days ago',
        priority: 'medium',
        type: 'review',
        author: 'James Wilson',
    },
    {
        id: 4,
        title: 'Security Training Mandatory',
        message:
            'All team members must complete the cybersecurity training module by end of this week. Link will be shared via email.',
        time: '3 days ago',
        priority: 'high',
        type: 'training',
        author: 'IT Security Team',
    },
    {
        id: 5,
        title: 'New Office Hours',
        message:
            'Starting next week, office hours will be 9:00 AM to 6:00 PM. Remote work policy remains flexible.',
        time: '1 week ago',
        priority: 'low',
        type: 'general',
        author: 'HR Department',
    },
];

// 📊 PERFORMANCE STATS (Demo)
export const performanceStats = {
    tasksCompleted: 24,
    productivityScore: 87,
    codeCommits: 42,
    hoursWorked: 168,
    projectsContributed: 3,
    meetingsAttended: 12,
};

// 🎯 STATUS OPTIONS
export const statusOptions = [
    { value: 'active', label: 'Available', color: 'bg-green-500', icon: '🟢' },
    { value: 'busy', label: 'Busy', color: 'bg-red-500', icon: '🔴' },
    { value: 'away', label: 'Away', color: 'bg-yellow-500', icon: '🟡' },
    { value: 'out-of-office', label: 'Out of Office', color: 'bg-gray-500', icon: '⚫' },
];

// 🔧 HELPER FUNCTIONS
export const getStatusInfo = (status: string) => {
    return statusOptions.find((option) => option.value === status) || statusOptions[0];
};

export const getPriorityColor = (priority: string) => {
    switch (priority) {
        case 'high':
            return 'priority-high';
        case 'medium':
            return 'priority-medium';
        case 'low':
            return 'priority-low';
        default:
            return 'priority-medium';
    }
};

export const getPriorityBadgeColor = (priority: string) => {
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

// 📅 DATE/TIME HELPERS
export const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
};

export const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
};

// 🎨 DEMO DATA INDICATOR
export const isDemoData = true;
export const demoDataNotice = 'This dashboard uses dummy data for demonstration purposes only.';
