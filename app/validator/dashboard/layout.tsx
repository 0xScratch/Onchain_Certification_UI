"use client";

import React from 'react';
import Link from 'next/link';
import { 
  CheckSquare,
  Home
} from 'lucide-react';

// Mapping of icon names to actual icon components
const iconMap = {
  CheckSquare: CheckSquare,
  Home: Home
};

const defaultNavItems = [
  {
    title: "Dashboard",
    href: "/validator/dashboard",
    icon: "Home",
  },
  {
    title: "Validate Exam",
    href: "/validator/dashboard/validate",
    icon: "CheckSquare",
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