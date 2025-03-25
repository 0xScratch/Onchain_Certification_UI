import Link from "next/link"
import { BookOpen, School, UserCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">On-Chain Certification System</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A secure and transparent platform for creating, validating, and verifying certifications using blockchain
          technology.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <School className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="text-center">Admin</CardTitle>
            <CardDescription className="text-center">
              Manage certifications, create exams, and update certification details.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Create new certifications</li>
              <li>Create and manage exams</li>
              <li>Update certification details</li>
              <li>Deactivate exams</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/admin/dashboard">Admin Dashboard</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <UserCheck className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="text-center">Validator</CardTitle>
            <CardDescription className="text-center">Validate exams and certify students.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Validate student exams</li>
              <li>Mark exams as passed or failed</li>
              <li>Provide digital signatures</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/validator/dashboard">Validator Dashboard</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <BookOpen className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="text-center">Student</CardTitle>
            <CardDescription className="text-center">
              Register, enroll in exams, and claim certifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Register as a student</li>
              <li>Enroll in exams</li>
              <li>Claim earned certifications</li>
              <li>View your certificates</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/student/dashboard">Student Dashboard</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Institution Registration</CardTitle>
            <CardDescription>Register your institution to start using the certification system</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/register">Register Institution</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Certificate Verification</CardTitle>
            <CardDescription>Verify the authenticity of a certificate</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/verify">Verify Certificate</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

