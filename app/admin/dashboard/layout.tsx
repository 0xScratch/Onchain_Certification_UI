"use client";

import React from 'react';
import Link from 'next/link';
import {
  BookCheck,
  FilePlus,
  Home,
  Settings,
  Zap
} from 'lucide-react';

// Mapping of icon names to actual icon components
const iconMap = {
  BookCheck: BookCheck,
  FilePlus: FilePlus,
  Home: Home,
  Settings: Settings,
  Zap: Zap
};

const defaultNavItems = [
  {
    title: "Homepage",
    href: "/",
    icon: "Home",
  },
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: "Settings",
  },
  {
    title: "Create Certification",
    href: "/admin/dashboard/create-certification",
    icon: "BookCheck",
  },
  {
    title: "Create Exam",
    href: "/admin/dashboard/create-exam",
    icon: "FilePlus",
  },
  {
    title: "Update Certification",
    href: "/admin/dashboard/update-certification",
    icon: "Settings",
  },
  {
    title: "Deactivate Exam",
    href: "/admin/dashboard/deactivate-exam",
    icon: "Zap",
  },
]

export default function AdminDashboardLayout({
  children,
  navItems = defaultNavItems
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
                className="flex items-center p-2 hover:bg-gray-200 rounded dark:hover:bg-gray-800 transition-colors duration -200 dark:hover:bg-gray-800 transition-colors duration -200"
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