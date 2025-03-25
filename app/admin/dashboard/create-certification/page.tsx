"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export default function CreateCertificationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isPermanent, setIsPermanent] = useState(false)
  const [certificateName, setCertificateName] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Mock API call - in real app this would interact with blockchain
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Convert date to UNIX timestamp if not permanent
      const validityPeriod = isPermanent ? 0 : date ? Math.floor(date.getTime() / 1000) : 0

      console.log({
        certificateName,
        validityPeriod,
        isPermanent,
      })

      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)

      // Reset form
      setCertificateName("")
      setDate(undefined)
      setIsPermanent(false)
    } catch (error) {
      console.error("Error creating certification:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Create Certification</h2>
        <p className="text-muted-foreground">Create a new certification for your students.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Certification Details</CardTitle>
          <CardDescription>Enter the details for the new certification.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="certificateName">Certificate Name</Label>
              <Input
                id="certificateName"
                placeholder="e.g., Blockchain Developer Certification"
                value={certificateName}
                onChange={(e) => setCertificateName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isPermanent"
                  checked={isPermanent}
                  onCheckedChange={(checked) => {
                    if (checked === true) {
                      setIsPermanent(true)
                      setDate(undefined)
                    } else {
                      setIsPermanent(false)
                    }
                  }}
                />
                <Label htmlFor="isPermanent">Permanent Validity (No Expiry)</Label>
              </div>
            </div>

            {!isPermanent && (
              <div className="space-y-2">
                <Label htmlFor="validityPeriod">Validity Period (Expiry Date)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="validityPeriod"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      disabled={isPermanent}
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
                {!isPermanent && !date && (
                  <p className="text-xs text-muted-foreground">
                    Please select an expiry date or check permanent validity
                  </p>
                )}
              </div>
            )}

            {success && (
              <div className="rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  <span className="font-medium">Certification created successfully!</span>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || (!isPermanent && !date) || !certificateName}
            >
              {isLoading ? "Creating..." : "Create Certification"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

