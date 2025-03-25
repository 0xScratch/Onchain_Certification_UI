import { Award, BookOpen, CheckSquare, PenTool } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StudentDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Student Dashboard</h2>
        <p className="text-muted-foreground">Manage your certifications and exams.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Certificates</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exams Taken</CardTitle>
            <PenTool className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exams Passed</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Certificates</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>My Certificates</CardTitle>
            <CardDescription>Your earned certificates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Blockchain Fundamentals", date: "2023-01-15", id: "CERT-BF-2023-001" },
                { name: "Smart Contract Development", date: "2023-02-10", id: "CERT-SCD-2023-002" },
                { name: "Decentralized Finance", date: "2023-03-05", id: "CERT-DF-2023-003" },
              ].map((cert, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">ID: {cert.id}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{cert.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Exams</CardTitle>
            <CardDescription>Your recent exam results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Advanced Blockchain Development Exam", date: "2023-03-18", passed: true },
                { name: "Smart Contract Security Exam", date: "2023-03-10", passed: true },
                { name: "DeFi Advanced Principles Exam", date: "2023-02-28", passed: false },
              ].map((exam, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{exam.name}</p>
                    <p className="text-xs text-muted-foreground">{exam.date}</p>
                  </div>
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                      exam.passed
                        ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400"
                        : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400"
                    }`}
                  >
                    {exam.passed ? "Passed" : "Failed"}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

