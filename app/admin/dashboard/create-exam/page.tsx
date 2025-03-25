"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function CreateExamPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [certificationId, setCertificationId] = useState("")

  // Mock certification data - in a real app, this would be fetched from the blockchain
  const certifications = [
    { id: "1", name: "Blockchain Fundamentals" },
    { id: "2", name: "Smart Contract Development" },
    { id: "3", name: "Decentralized Finance" },
    { id: "4", name: "Smart Contract Security" },
    { id: "5", name: "Advanced Blockchain Development" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Mock API call - in real app this would interact with blockchain
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Convert date to UNIX timestamp
      const examValidityPeriod = date ? Math.floor(date.getTime() / 1000) : 0

      console.log({
        certificationId,
        examValidityPeriod,
      })

      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)

      // Reset form
      setCertificationId("")
      setDate(undefined)
    } catch (error) {
      console.error("Error creating exam:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Create Exam</h2>
        <p className="text-muted-foreground">Create a new exam for an existing certification.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Exam Details</CardTitle>
          <CardDescription>Enter the details for the new exam.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="certificationId">Certification</Label>
              <Select value={certificationId} onValueChange={setCertificationId} required>
                <SelectTrigger id="certificationId">
                  <SelectValue placeholder="Select a certification" />
                </SelectTrigger>
                <SelectContent>
                  {certifications.map((cert) => (
                    <SelectItem key={cert.id} value={cert.id}>
                      {cert.name} (ID: {cert.id})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="validityPeriod">Exam Validity Period (Expiry Date)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="validityPeriod"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? date.toLocaleDateString() : "Select expiry date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
              {!date && <p className="text-xs text-muted-foreground">Exam must have an expiry date</p>}
            </div>

            {success && (
              <div className="rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  <span className="font-medium">Exam created successfully!</span>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading || !date || !certificationId}>
              {isLoading ? "Creating..." : "Create Exam"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

