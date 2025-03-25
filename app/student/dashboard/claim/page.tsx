"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ClaimCertificationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [certId, setCertId] = useState("")

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

      console.log({ certId })

      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)

      // Reset form
      setCertId("")
    } catch (error) {
      console.error("Error claiming certification:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Claim Certification</h2>
        <p className="text-muted-foreground">Claim a certification after passing the required exams.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Certification Claim</CardTitle>
          <CardDescription>Select a certification to claim.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="certId">Certification</Label>
              <Select value={certId} onValueChange={setCertId} required>
                <SelectTrigger id="certId">
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

            {success && (
              <div className="rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  <span className="font-medium">Certification claimed successfully!</span>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading || !certId}>
              {isLoading ? "Claiming..." : "Claim Certification"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

