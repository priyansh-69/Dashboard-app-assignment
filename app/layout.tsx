import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Priyansh Dashboard App - Modern Intern Workspace',
    description:
        'A comprehensive intern dashboard application with time tracking, task management, and performance analytics. Built by Priyansh Kandwal.',
    author: 'Priyansh Kandwal',
    keywords: 'dashboard, intern, time tracking, task management, productivity, analytics',
    viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark">
            <body className="antialiased">{children}</body>
        </html>
    );
}
