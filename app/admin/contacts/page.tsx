"use client"

import { useState, useEffect } from 'react'
import { collection, query, orderBy, limit, getDocs, doc, updateDoc, where, Timestamp } from 'firebase/firestore'
import { firestore } from '@/lib/firebase/firebase'
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from '@/components/ui/dialog'

interface ContactInquiry {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
  status: 'new' | 'responded' | 'closed'
  createdAt: Timestamp
}

export default function ContactManagement() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    responded: 0,
    closed: 0
  })

  // Fetch contact inquiries on component mount
  useEffect(() => {
    fetchInquiries()
  }, [])

  const fetchInquiries = async () => {
    try {
      setLoading(true)
      const contactsRef = collection(firestore, 'contacts')
      const q = query(
        contactsRef,
        orderBy('createdAt', 'desc'),
        limit(50)
      )

      const querySnapshot = await getDocs(q)
      const inquiryData: ContactInquiry[] = []
      
      querySnapshot.forEach((doc) => {
        inquiryData.push({
          id: doc.id,
          ...doc.data()
        } as ContactInquiry)
      })

      setInquiries(inquiryData)
      
      // Calculate stats
      const newStats = {
        total: inquiryData.length,
        new: inquiryData.filter(i => i.status === 'new').length,
        responded: inquiryData.filter(i => i.status === 'responded').length,
        closed: inquiryData.filter(i => i.status === 'closed').length
      }
      setStats(newStats)
    } catch (error) {
      console.error('Error fetching inquiries:', error)
    } finally {
      setLoading(false)
    }
  }

  const viewInquiry = (inquiry: ContactInquiry) => {
    setSelectedInquiry(inquiry)
    setIsDialogOpen(true)
  }

  const updateInquiryStatus = async (id: string, status: 'new' | 'responded' | 'closed') => {
    try {
      const inquiryRef = doc(firestore, 'contacts', id)
      await updateDoc(inquiryRef, {
        status
      })
      
      // Update local state
      setInquiries(prev => 
        prev.map(inquiry => 
          inquiry.id === id ? { ...inquiry, status } : inquiry
        )
      )
      
      // Update selected inquiry if open
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry({ ...selectedInquiry, status })
      }
      
      // Recalculate stats
      setStats(prev => {
        const newStats = { ...prev }
        
        // First decrement the old status count
        const oldStatus = inquiries.find(i => i.id === id)?.status
        if (oldStatus) {
          newStats[oldStatus] = Math.max(0, newStats[oldStatus] - 1)
        }
        
        // Then increment the new status count
        newStats[status]++
        
        return newStats
      })
    } catch (error) {
      console.error('Error updating inquiry status:', error)
    }
  }

  const formatDate = (timestamp: Timestamp) => {
    if (!timestamp) return 'Unknown'
    return new Date(timestamp.seconds * 1000).toLocaleString()
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-blue-500">New</Badge>
      case 'responded':
        return <Badge className="bg-green-500">Responded</Badge>
      case 'closed':
        return <Badge variant="outline">Closed</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Contact Form Inquiries</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">{stats.total}</CardTitle>
            <CardDescription>Total Inquiries</CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl text-blue-500">{stats.new}</CardTitle>
            <CardDescription>New Inquiries</CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl text-green-500">{stats.responded}</CardTitle>
            <CardDescription>Responded</CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">{stats.closed}</CardTitle>
            <CardDescription>Closed</CardDescription>
          </CardHeader>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Inquiry Management</CardTitle>
          <CardDescription>
            View and manage customer inquiries submitted through the contact form
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-20 text-center">Loading inquiries...</div>
          ) : inquiries.length === 0 ? (
            <div className="py-20 text-center">No inquiries found</div>
          ) : (
            <Table>
              <TableCaption>A list of your contact form inquiries</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries.map((inquiry) => (
                  <TableRow key={inquiry.id}>
                    <TableCell className="font-medium">
                      {formatDate(inquiry.createdAt)}
                    </TableCell>
                    <TableCell>{inquiry.name}</TableCell>
                    <TableCell>{inquiry.email}</TableCell>
                    <TableCell>{inquiry.service}</TableCell>
                    <TableCell>{getStatusBadge(inquiry.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => viewInquiry(inquiry)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
      
      {selectedInquiry && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Inquiry from {selectedInquiry.name}</DialogTitle>
              <DialogDescription>
                Submitted on {formatDate(selectedInquiry.createdAt)}
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4">
              <div className="grid grid-cols-4 gap-4 py-2">
                <div className="col-span-1 font-medium">Status:</div>
                <div className="col-span-3">{getStatusBadge(selectedInquiry.status)}</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 py-2">
                <div className="col-span-1 font-medium">Email:</div>
                <div className="col-span-3">{selectedInquiry.email}</div>
              </div>
              
              {selectedInquiry.phone && (
                <div className="grid grid-cols-4 gap-4 py-2">
                  <div className="col-span-1 font-medium">Phone:</div>
                  <div className="col-span-3">{selectedInquiry.phone}</div>
                </div>
              )}
              
              {selectedInquiry.company && (
                <div className="grid grid-cols-4 gap-4 py-2">
                  <div className="col-span-1 font-medium">Company:</div>
                  <div className="col-span-3">{selectedInquiry.company}</div>
                </div>
              )}
              
              <div className="grid grid-cols-4 gap-4 py-2">
                <div className="col-span-1 font-medium">Service:</div>
                <div className="col-span-3">{selectedInquiry.service}</div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 py-2">
                <div className="font-medium">Message:</div>
                <div className="p-3 border rounded-md bg-slate-50">
                  {selectedInquiry.message}
                </div>
              </div>
            </div>
            
            <DialogFooter className="flex flex-row gap-2 justify-between sm:justify-between">
              <div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => updateInquiryStatus(selectedInquiry.id, 'closed')}
                >
                  Mark as Closed
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Close
                </Button>
                {selectedInquiry.status === 'new' && (
                  <Button
                    onClick={() => updateInquiryStatus(selectedInquiry.id, 'responded')}
                  >
                    Mark as Responded
                  </Button>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
