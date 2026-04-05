'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Bell,
  Globe,
  Camera,
  Save,
  X,
  CheckCircle,
  CreditCard,
  FileText,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const userData = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  phone: '+27 11 123 4567',
  location: 'Johannesburg, South Africa',
  joinDate: 'January 15, 2024',
  avatar: 'AJ',
  bio: 'Content creator and digital marketer passionate about AI-powered content generation.',
}

const subscription = {
  plan: 'Pro',
  price: 'R299/month',
  status: 'Active',
  nextBilling: 'May 5, 2026',
  usage: {
    content: 65,
    storage: 42,
    team: 80,
  },
}

const notifications = [
  { id: 1, type: 'email', label: 'Product updates', enabled: true },
  { id: 2, type: 'email', label: 'Marketing emails', enabled: false },
  { id: 3, type: 'push', label: 'New features', enabled: true },
  { id: 4, type: 'push', label: 'Security alerts', enabled: true },
  { id: 5, type: 'email', label: 'Weekly reports', enabled: true },
]

const connectedAccounts = [
  { id: 1, name: 'Google', email: 'alex@gmail.com', connected: true },
  { id: 2, name: 'GitHub', email: 'alex@github.com', connected: true },
  { id: 3, name: 'Twitter', email: 'alex@twitter.com', connected: false },
]

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(userData)
  const [notificationsState, setNotificationsState] = useState(notifications)
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleNotificationToggle = (id: number) => {
    setNotificationsState(
      notificationsState.map(notif =>
        notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
      )
    )
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
    setIsSaved(true)
    setIsEditing(false)
    
    // Reset saved state after 3 seconds
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleCancel = () => {
    setFormData(userData)
    setIsEditing(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Profile Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account settings and preferences
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Profile info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Profile card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                    {formData.avatar}
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 w-10 h-10 bg-white dark:bg-gray-700 rounded-full border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600">
                      <Camera className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </button>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formData.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {formData.bio}
                  </p>
                  <div className="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    Member since {formData.joinDate}
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                {isEditing ? (
                  <>
                    <Button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      {isSaving ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                  >
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>

            {isSaved && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  <span className="text-green-800 dark:text-green-300">
                    Profile updated successfully!
                  </span>
                </div>
              </div>
            )}

            {/* Profile form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditing}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border transition-all duration-200',
                    isEditing
                      ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent'
                      : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border transition-all duration-200',
                    isEditing
                      ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent'
                      : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Phone className="inline h-4 w-4 mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border transition-all duration-200',
                    isEditing
                      ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent'
                      : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  disabled={!isEditing}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border transition-all duration-200',
                    isEditing
                      ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent'
                      : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
                  )}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bio
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  disabled={!isEditing}
                  rows={3}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border transition-all duration-200 resize-none',
                    isEditing
                      ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent'
                      : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
                  )}
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Bell className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Notification Preferences
              </h3>
            </div>

            <div className="space-y-4">
              {notificationsState.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
                >
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {notification.label}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {notification.type === 'email' ? 'Email notification' : 'Push notification'}
                    </div>
                  </div>
                  <button
                    onClick={() => handleNotificationToggle(notification.id)}
                    className={cn(
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
                      notification.enabled ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                    )}
                  >
                    <span
                      className={cn(
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                        notification.enabled ? 'translate-x-5' : 'translate-x-0'
                      )}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right column - Subscription & Security */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Subscription */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Subscription
              </h3>
            </div>

            <div className="mb-6">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {subscription.plan} Plan
              </div>
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                {subscription.price}
              </div>
              <div className="flex items-center">
                <div className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold">
                  {subscription.status}
                </div>
                <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">
                  Next billing: {subscription.nextBilling}
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Content Generations</span>
                  <span className="font-medium">{subscription.usage.content}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${subscription.usage.content}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Storage</span>
                  <span className="font-medium">{subscription.usage.storage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${subscription.usage.storage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Team Seats</span>
                  <span className="font-medium">{subscription.usage.team}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${subscription.usage.team}%` }}
                  />
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-primary hover:opacity-90 mb-3">
              Upgrade Plan
            </Button>
            <Button variant="outline" className="w-full">
              View Billing History
            </Button>
          </div>

          {/* Security */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Security
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Two-factor Authentication
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Add an extra layer of security
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Enable
                </Button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                <div>
                  <div className="