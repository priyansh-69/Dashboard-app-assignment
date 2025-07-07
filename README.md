# 🚀 Priyansh Dashboard App

<div align="center">
  <img src="app/favicon.ico" alt="Dashboard Logo" width="64" height="64" />
  <br/>
  <b>A Modern Intern Dashboard Application</b>  
  <br/>
  Built with Next.js, TypeScript, and TailwindCSS  
</div>

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Styling](#-styling)
- [Data Management](#-data-management)
- [Responsive Design](#-responsive-design)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Priyansh Dashboard App** is a modern intern management dashboard built with performance, design, and usability in mind. It offers an intuitive interface for tracking tasks, managing project progress, collaborating with teams, and monitoring personal productivity — all in one seamless experience.

---

## 🌟 Key Highlights

- **Modern UI/UX**: Glassmorphism, animated orbs, hover & glow effects
- **Full & Minimal View Modes**: Switch depending on user context
- **Task Management**: Kanban board with priority and filtering
- **Time Tracking**: Real-time timers, break tracking, and summaries
- **Team Collaboration**: Team member list with live status & announcements
- **Fully Responsive**: Optimized for all screen sizes and devices

---

## ✨ Features

### 🏠 Dashboard Overview
- Live Clock & Date
- Intern Profile Card (Name, Email, College, Year, Role)
- Performance Metrics: Tasks, Commits, Work Hours
- Animated Gradient Backgrounds

### 📋 Task Management
- Drag-and-drop Kanban Board
- Modal-based Task Creation
- Priority + Status Filters
- Detailed Task Metadata

### ⏱️ Time Tracking
- Real-time Start/Stop Timers
- Break + Overtime Tracking
- Daily Summaries
- Time Entries History

### 👥 Team Collaboration
- Team Member Directory with Status Indicators
- Announcement System with Priority Levels
- Project Overview & Manager Info

### 🎨 User Experience
- View Mode Toggle: Full vs Minimal
- Glass Morphism, Gradient UI, and Accessibility
- Keyboard Navigation and Reduced Motion Support

---

## 🛠️ Tech Stack

### Frontend Frameworks
- **Next.js 14** – App Router support
- **React 18** – Hooks-based UI logic
- **TypeScript 5** – Type safety

### Styling & UI
- **TailwindCSS 3.4**
- **Tailwind Animate**
- **Lucide Icons**
- **Radix UI Primitives**

### Utilities
- **Recharts** – Data visualizations
- **React Hot Toast** – Notifications
- **clsx & tailwind-merge** – Class handling
- **Class Variance Authority (CVA)** – Variant styling

### Dev Tools
- ESLint + Prettier
- PostCSS
- Git-based workflow

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js 18+
- npm / yarn / pnpm / bun

### 🔧 Installation
```bash
git clone <your-repo-url>
cd dashboard
npm install
npm run dev
```

### 🔗 Open in Browser

```
http://localhost:3000
```

### ⚙️ Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
dashboard/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── favicon.ico
│   └── globals.css
├── components/
│   ├── TaskManager.tsx
│   ├── TimeTracker.tsx
│   ├── ViewToggle.tsx
│   └── MinimalView.tsx
├── lib/
│   ├── dummyData.ts
│   └── utils.ts
├── public/
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
```

---

## 🧩 Components

### 🔹 `page.tsx`

Main dashboard layout. Includes profile, project info, tasks, and time tracking.

### 🔹 `MinimalView.tsx`

Lightweight dashboard variant for focused productivity.

### 🔹 `TaskManager.tsx`

Interactive Kanban board with CRUD functionality and filtering.

### 🔹 `TimeTracker.tsx`

Start/stop timers, break handling, overtime summary.

### 🔹 `ViewToggle.tsx`

Switches between full and minimal dashboard views.

---

## 🎨 Styling

* Glass Morphism with backdrop blur
* Status-based color coding
* Responsive typography with `clamp()`
* Hover-lift and glow animations
* Gradient overlays for depth
* Mobile-first utility classes with Tailwind

---

## 📊 Data Management

* TypeScript interfaces
* Dummy data models in `dummyData.ts`
* Centralized state using React Hooks (`useState`, `useEffect`)
* Placeholder data for:

  * Intern Profile
  * Team Members
  * Tasks
  * Announcements
  * Project Info

---

## 📱 Responsive Design

| Breakpoint | Devices           |
| ---------- | ----------------- |
| sm         | Mobile (portrait) |
| md         | Tablets           |
| lg         | Laptops           |
| xl         | Desktops          |
| 2xl        | Wide screens      |

Adaptive 3-column grid and mobile stacking layouts.

---

## ⚡ Performance

* Lazy loaded components
* Tailwind purge for unused CSS
* Optimized asset delivery
* Next.js App Router hydration
* Minimal runtime JS for smooth UX

---

## 🤝 Contributing

```bash
git checkout -b feature/new-feature
npm run lint && npm run format
git commit -m "Add: New Feature"
git push origin feature/new-feature
```

Follow:

* Clean commit messages
* Consistent naming conventions
* Add JSDoc for complex components
* Ensure accessibility compliance (WCAG)

---

## 📄 License

MIT License. See `LICENSE` file for full terms.

---

## 👨‍💻 Author

**Priyansh Kandwal**
Frontend Developer & Designer
Built with ❤️ using cutting-edge web tech.

---
