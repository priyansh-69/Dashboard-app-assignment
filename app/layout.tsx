import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Intern Dashboard - Modern Workspace',
    description: 'A sleek, modern intern dashboard with status tracking and time management',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark" data-oid="itsukd8">
            <body className="antialiased" data-oid="niw1i8f">
                {children}
            </body>
        </html>
    );
}
