"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  User,
  Mail,
  Lock,
  Shield,
  Bell,
  Key,
  Smartphone
} from "lucide-react"

export default function ProfilePage() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <div className="relative">
                    <Input placeholder="John" />
                    <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <div className="relative">
                    <Input placeholder="Doe" />
                    <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <div className="relative">
                  <Input type="email" placeholder="john@example.com" />
                  <Mail className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <Button className="w-full">Save Changes</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Security Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Current Password</label>
                <div className="relative">
                  <Input type="password" placeholder="••••••••" />
                  <Lock className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">New Password</label>
                  <div className="relative">
                    <Input type="password" placeholder="••••••••" />
                    <Key className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Confirm Password</label>
                  <div className="relative">
                    <Input type="password" placeholder="••••••••" />
                    <Key className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <Button className="w-full">Update Password</Button>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Security Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="font-medium">2FA</span>
                </div>
                <span className="text-sm text-red-500">Disabled</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Notifications</span>
                </div>
                <span className="text-sm text-green-500">Enabled</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Phone Number</span>
                </div>
                <span className="text-sm text-red-500">Not Verified</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Connected Wallets</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <span className="font-medium">0xbe...6a5d</span>
                <Button variant="outline" size="sm">Disconnect</Button>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              Connect New Wallet
            </Button>
          </Card>
        </div>
      </div>
    </>
  )
}