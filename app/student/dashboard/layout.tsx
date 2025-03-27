"use client";

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  FileText,
  GraduationCap,
  Home,
  User,
  Settings
} from 'lucide-react';

// Mapping of icon names to actual icon components
const iconMap = {
  BookOpen: BookOpen,
  FileText: FileText,
  GraduationCap: GraduationCap,
  Home: Home,
  User: User,
  Settings: Settings
};

const studentNavItems = [
  {
    title: "Homepage",
    href: "/",
    icon: "Home",
  },
  {
    title: "Dashboard",
    href: "/student/dashboard",
    icon: "Settings",
  },
  {
    title: "Register",
    href: "/student/dashboard/register",
    icon: "User",
  },
  {
    title: "Register for Exam",
    href: "/student/dashboard/register-exam",
    icon: "FileText",
  },
  {
    title: "Claim Certificate",
    href: "/student/dashboard/claim",
    icon: "GraduationCap",
  },
  {
    title: "My Certificates",
    href: "/student/dashboard/certificates",
    icon: "BookOpen",
  },
]

export default function AdminDashboardLayout({
  children,
  navItems = studentNavItems
}: {
  children: React.ReactNode,
  navItems?: NavItem[]
}) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="sidebar">
        <nav>
          {navItems.map((item) => {
            // Dynamically get the icon component
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center p-2 hover:bg-gray-200 rounded dark:hover:bg-gray-800 transition-colors duration -200"
              >
                {IconComponent && <IconComponent className="mr-2" />}
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}

// Define the NavItem interface
interface NavItem {
  title: string;
  href: string;
  icon: string;
}