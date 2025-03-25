"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function StudentRegistrationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [studentName, setStudentName] = useState("")
  const [studentId, setStudentId] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Mock API call - in real app this would interact with blockchain
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock student ID generation
      const generatedId = "0x" + Math.random().toString(16).slice(2, 42)
      setStudentId(generatedId)

      console.log({
        studentName,
        studentId: generatedId,
      })

      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        setStudentId("")
      }, 10000)

      // Reset form
      setStudentName("")
    } catch (error) {
      console.error("Error registering student:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Student Registration</h2>
        <p className="text-muted-foreground">Register as a student to enroll in exams and earn certifications.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registration Details</CardTitle>
          <CardDescription>Enter your details to register as a student.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="studentName">Full Name</Label>
              <Input
                id="studentName"
                placeholder="e.g., John Doe"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </div>

            {success && (
              <div className="rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  <span className="font-medium">Registration successful!</span>
                </div>
                {studentId && (
                  <div className="mt-2 break-all text-sm">
                    <span className="font-semibold">Your Student ID: </span>
                    {studentId}
                  </div>
                )}
                <p className="mt-2 text-xs">Please save your Student ID for future reference!</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading || !studentName}>
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

