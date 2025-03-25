"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ValidateExamPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [studentId, setStudentId] = useState("")
  const [examId, setExamId] = useState("")
  const [passed, setPassed] = useState<string | undefined>(undefined)

  // Mock exam data - in a real app, this would be fetched from the blockchain
  const exams = [
    { id: "1", name: "Blockchain Fundamentals Exam", cert: "Blockchain Fundamentals" },
    { id: "2", name: "Smart Contract Development Exam", cert: "Smart Contract Development" },
    { id: "3", name: "DeFi Principles Exam", cert: "Decentralized Finance" },
    { id: "4", name: "Security Principles Exam", cert: "Smart Contract Security" },
    { id: "5", name: "Advanced Development Exam", cert: "Advanced Blockchain Development" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Mock API call - in real app this would interact with blockchain
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log({
        studentId,
        examId,
        passed: passed === "yes",
      })

      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)

      // Reset form
      setStudentId("")
      setExamId("")
      setPassed(undefined)
    } catch (error) {
      console.error("Error validating exam:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Validate Exam</h2>
        <p className="text-muted-foreground">Validate a student's exam result.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Exam Validation</CardTitle>
          <CardDescription>Provide the student's ID, exam ID, and validation result.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID (bytes)</Label>
              <Input
                id="studentId"
                placeholder="e.g., 0x1234..."
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="examId">Exam</Label>
              <Select value={examId} onValueChange={setExamId} required>
                <SelectTrigger id="examId">
                  <SelectValue placeholder="Select an exam" />
                </SelectTrigger>
                <SelectContent>
                  {exams.map((exam) => (
                    <SelectItem key={exam.id} value={exam.id}>
                      {exam.name} (ID: {exam.id})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="passed">Exam Result</Label>
              <RadioGroup value={passed} onValueChange={setPassed}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="passed-yes" />
                  <Label htmlFor="passed-yes">Passed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="passed-no" />
                  <Label htmlFor="passed-no">Failed</Label>
                </div>
              </RadioGroup>
            </div>

            {success && (
              <div className="rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  <span className="font-medium">Exam validated successfully!</span>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading || !studentId || !examId || !passed}>
              {isLoading ? "Validating..." : "Validate Exam"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

