"use client"

import { useState } from "react"
import { Award, Download, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MyCertificatesPage() {
  // Mock certificate data - in a real app, this would be fetched from the blockchain
  const certificates = [
    {
      id: "CERT-BF-2023-001",
      name: "Blockchain Fundamentals",
      issueDate: "2023-01-15",
      expiryDate: "2025-01-15",
      institution: "Blockchain Academy",
      tokenId: "1234",
    },
    {
      id: "CERT-SCD-2023-002",
      name: "Smart Contract Development",
      issueDate: "2023-02-10",
      expiryDate: "2025-02-10",
      institution: "Blockchain Academy",
      tokenId: "1235",
    },
    {
      id: "CERT-DF-2023-003",
      name: "Decentralized Finance",
      issueDate: "2023-03-05",
      expiryDate: "2025-03-05",
      institution: "Blockchain Academy",
      tokenId: "1236",
    },
  ]

  const [selectedCert, setSelectedCert] = useState(certificates[0])

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Certificates</h2>
        <p className="text-muted-foreground">View and download your earned certificates.</p>
      </div>

      <Tabs defaultValue="gallery" className="space-y-4">
        <TabsList>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="cursor-pointer transition-all hover:shadow-md"
                onClick={() => setSelectedCert(cert)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>ID: {cert.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
                    <div className="flex h-full items-center justify-center bg-secondary/20">
                      <Award className="h-16 w-16 text-primary/40" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-between">
                  <div className="text-xs text-muted-foreground">Issued: {cert.issueDate}</div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>All Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div key={cert.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                    <div>
                      <h3 className="font-medium">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">ID: {cert.id}</p>
                      <p className="text-sm text-muted-foreground">
                        Issued: {cert.issueDate} | Expires: {cert.expiryDate}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Certificate Details</CardTitle>
          <CardDescription>View the details of your selected certificate.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">{selectedCert.name}</h3>
                <p className="text-sm text-muted-foreground">Certificate ID: {selectedCert.id}</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Issuing Institution:</span>
                  <span className="text-sm">{selectedCert.institution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Issue Date:</span>
                  <span className="text-sm">{selectedCert.issueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Expiry Date:</span>
                  <span className="text-sm">{selectedCert.expiryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Token ID:</span>
                  <span className="text-sm">{selectedCert.tokenId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <span className="text-sm text-green-600 dark:text-green-400">Active</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-lg border bg-white p-6 dark:bg-gray-900">
              <div className="flex flex-col items-center justify-center text-center">
                <Award className="h-24 w-24 text-primary/60" />
                <h3 className="mt-4 text-xl font-semibold">{selectedCert.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Issued to: John Doe</p>
                <p className="text-xs text-muted-foreground">Verify at: cert.blockchain-academy.com/verify</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

