import { Award, CheckSquare, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ValidatorDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Validator Dashboard</h2>
        <p className="text-muted-foreground">Validate exams and certify students.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exams Validated</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students Certified</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68</div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Validations</CardTitle>
            <CardDescription>Recently validated exams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { student: "Alex Johnson", exam: "Blockchain Fundamentals Exam", date: "2023-03-15", passed: true },
                { student: "Sam Thompson", exam: "Smart Contract Development Exam", date: "2023-03-14", passed: true },
                { student: "Jamie Williams", exam: "DeFi Principles Exam", date: "2023-03-12", passed: false },
                { student: "Robin Garcia", exam: "Security Principles Exam", date: "2023-03-10", passed: true },
              ].map((validation, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{validation.student}</p>
                    <p className="text-xs text-muted-foreground">{validation.exam}</p>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`mr-2 inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                        validation.passed
                          ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400"
                          : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400"
                      }`}
                    >
                      {validation.passed ? "Passed" : "Failed"}
                    </span>
                    <span className="text-xs text-muted-foreground">{validation.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

