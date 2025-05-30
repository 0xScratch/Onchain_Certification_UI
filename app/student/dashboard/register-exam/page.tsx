"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterExamPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [examId, setExamId] = useState("")

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

      console.log({ examId })

      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)

      // Reset form
      setExamId("")
    } catch (error) {
      console.error("Error registering for exam:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Register for Exam</h2>
        <p className="text-muted-foreground">Enroll in an exam to earn a certification.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Exam Registration</CardTitle>
          <CardDescription>Select an exam to register for.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
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

            {success && (
              <div className="rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  <span className="font-medium">Exam registration successful!</span>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading || !examId}>
              {isLoading ? "Registering..." : "Register for Exam"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

