"use client";

import React from 'react';
import Link from 'next/link';
import { 
  BookCheck, 
  FilePlus, 
  Settings, 
  Zap 
} from 'lucide-react';

// Mapping of icon names to actual icon components
const iconMap = {
  BookCheck: BookCheck,
  FilePlus: FilePlus,
  Settings: Settings,
  Zap: Zap
};

const defaultNavItems = [
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
      <div className="w-64 bg-gray-100 min-h-screen p-4">
        <nav>
          {navItems.map((item) => {
            // Dynamically get the icon component
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className="flex items-center p-2 hover:bg-gray-200 rounded"
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