"use client"

import type React from "react"

import { useState } from "react"
import { Award, CheckCircle2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function VerificationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [verifyType, setVerifyType] = useState("certificate")
  const [verifyId, setVerifyId] = useState("")
  const [verified, setVerified] = useState(false)
  const [certificateData, setCertificateData] = useState<{
    id: string
    name: string
    student: string
    institution: string
    issueDate: string
    expiryDate: string
    tokenId: string
    status: "active" | "expired" | "revoked"
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Mock API call - in real app this would interact with blockchain
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock certificate data
      setCertificateData({
        id: "CERT-BF-2023-001",
        name: "Blockchain Fundamentals",
        student: "John Doe",
        institution: "Blockchain Academy",
        issueDate: "2023-01-15",
        expiryDate: "2025-01-15",
        tokenId: "1234",
        status: "active",
      })

      setVerified(true)
    } catch (error) {
      console.error("Error verifying certificate:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Certificate Verification</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Verify the authenticity of a certificate or check a student's credentials on the blockchain.
          </p>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Verify Certificate</CardTitle>
            <CardDescription>
              Enter a certificate ID or student ID to verify its authenticity on the blockchain.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <RadioGroup value={verifyType} onValueChange={setVerifyType} className="grid grid-cols-2 gap-4">
                <Label
                  htmlFor="certificate"
                  className={`flex cursor-pointer items-center justify-center rounded-md border-2 p-4 text-center ${
                    verifyType === "certificate" ? "border-primary" : "border-muted"
                  }`}
                >
                  <RadioGroupItem value="certificate" id="certificate" className="sr-only" />
                  <div>
                    <Award className="mx-auto h-6 w-6" />
                    <div className="mt-2 font-medium">Certificate ID</div>
                  </div>
                </Label>
                <Label
                  htmlFor="student"
                  className={`flex cursor-pointer items-center justify-center rounded-md border-2 p-4 text-center ${
                    verifyType === "student" ? "border-primary" : "border-muted"
                  }`}
                >
                  <RadioGroupItem value="student" id="student" className="sr-only" />
                  <div>
                    <Search className="mx-auto h-6 w-6" />
                    <div className="mt-2 font-medium">Student ID</div>
                  </div>
                </Label>
              </RadioGroup>

              <div className="space-y-2">
                <Label htmlFor="verifyId">{verifyType === "certificate" ? "Certificate ID" : "Student ID"}</Label>
                <Input
                  id="verifyId"
                  placeholder={`Enter ${verifyType === "certificate" ? "certificate" : "student"} ID`}
                  value={verifyId}
                  onChange={(e) => setVerifyId(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading || !verifyId}>
                {isLoading ? "Verifying..." : "Verify"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {verified && certificateData && (
          <Card className="mt-8">
            <CardHeader>
              <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                <CardTitle>Verification Successful</CardTitle>
              </div>
              <CardDescription>The certificate has been verified on the blockchain.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">{certificateData.name}</h3>
                    <p className="text-sm text-muted-foreground">Certificate ID: {certificateData.id}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Student:</span>
                      <span className="text-sm">{certificateData.student}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Issuing Institution:</span>
                      <span className="text-sm">{certificateData.institution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Issue Date:</span>
                      <span className="text-sm">{certificateData.issueDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Expiry Date:</span>
                      <span className="text-sm">{certificateData.expiryDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Token ID:</span>
                      <span className="text-sm">{certificateData.tokenId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Status:</span>
                      <span
                        className={`text-sm ${
                          certificateData.status === "active"
                            ? "text-green-600 dark:text-green-400"
                            : certificateData.status === "expired"
                              ? "text-yellow-600 dark:text-yellow-400"
                              : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {certificateData.status.charAt(0).toUpperCase() + certificateData.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center rounded-lg border bg-white p-6 dark:bg-gray-900">
                  <div className="flex flex-col items-center justify-center text-center">
                    <Award className="h-24 w-24 text-primary/60" />
                    <h3 className="mt-4 text-xl font-semibold">{certificateData.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Issued to: {certificateData.student}</p>
                    <p className="text-xs text-muted-foreground">Verified on blockchain</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

