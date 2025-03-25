"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InstitutionRegistrationPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [deployedAddress, setDeployedAddress] = useState("")
  const [formData, setFormData] = useState({
    institutionName: "",
    institutionId: "",
    adminAddress: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Mock deployment - in a real app, this would interact with the blockchain
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setDeployedAddress("0x" + Math.random().toString(16).slice(2, 42))
    } catch (error) {
      console.error("Registration error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Institution Registration</CardTitle>
            <CardDescription>Register your institution to deploy a new certification system</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="institutionName">Institution Name</Label>
                <Input
                  id="institutionName"
                  name="institutionName"
                  placeholder="e.g., University of Blockchain"
                  value={formData.institutionName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="institutionId">Institution ID</Label>
                <Input
                  id="institutionId"
                  name="institutionId"
                  type="number"
                  placeholder="e.g., 12345"
                  value={formData.institutionId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="adminAddress">Admin Address (Ethereum)</Label>
                <Input
                  id="adminAddress"
                  name="adminAddress"
                  placeholder="e.g., 0x123..."
                  value={formData.adminAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              {deployedAddress && (
                <div className="rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    <span className="font-medium">Contract deployed successfully!</span>
                  </div>
                  <div className="mt-2 break-all text-sm">
                    <span className="font-semibold">Contract Address: </span>
                    {deployedAddress}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register Institution"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

