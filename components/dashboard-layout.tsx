"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "validator" | "student"
  navItems: {
    title: string
    href: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

export function DashboardLayout({ children, role, navItems }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const roleTitle = {
    admin: "Admin Dashboard",
    validator: "Validator Dashboard",
    student: "Student Dashboard",
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="border-r">
          <SidebarHeader className="flex items-center justify-between p-6">
            <Link href="/" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              <span className="text-lg font-bold">{roleTitle[role]}</span>
            </Link>
            <SidebarTrigger className="md:hidden" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <div className="flex w-full flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center border-b bg-background px-6">
            <Button className="md:hidden" onClick={() => setMobileOpen(true)}>
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="ml-4 flex-1 md:ml-0">
              <h1 className="text-lg font-semibold">{roleTitle[role]}</h1>
            </div>
          </header>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="left" className="w-64 p-0">
              <div className="flex h-16 items-center border-b px-6">
                <span className="text-lg font-bold">{roleTitle[role]}</span>
              </div>
              <div className="px-2 py-4">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      className="flex w-full justify-start data-[state=active]:bg-secondary"
                      asChild
                      onClick={() => setMobileOpen(false)}
                    >
                      <Link href={item.href}>
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.title}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

