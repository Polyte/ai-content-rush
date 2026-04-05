'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  FileText,
  Zap,
  Users,
  TrendingUp,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Home,
  CreditCard,
  HelpCircle,
  LogOut,
  Sparkles,
  Calendar,
  Target,
  DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', icon: Home, href: '#', current: true },
  { name: 'Content', icon: FileText, href: '#', current: false },
  { name: 'Analytics', icon: BarChart3, href: '#', current: false },
  { name: 'Team', icon: Users, href: '#', current: false },
  { name: 'Billing', icon: CreditCard, href: '#', current: false },
  { name: 'Settings', icon: Settings, href: '#', current: false },
]

const stats = [
  { name: 'Content Generated', value: '1,248', change: '+12%', icon: FileText, color: 'text-blue-500' },
  { name: 'Time Saved', value: '42h', change: '+8%', icon: Zap, color: 'text-green-500' },
  { name: 'Team Members', value: '5', change: '+1', icon: Users, color: 'text-purple-500' },
  { name: 'Monthly Revenue', value: 'R2,499', change: '+15%', icon: DollarSign, color: 'text-yellow-500' },
]

const recentActivity = [
  { id: 1, action: 'Generated blog post', time: '10 minutes ago', user: 'You' },
  { id: 2, action: 'Team member joined', time: '1 hour ago', user: 'Sarah Chen' },
  { id: 3, action: 'Upgraded to Pro plan', time: '2 hours ago', user: 'You' },
  { id: 4, action: 'Generated social media content', time: '3 hours ago', user: 'Alex Johnson' },
  { id: 5, action: 'Exported content to PDF', time: '5 hours ago', user: 'You' },
]

const quickActions = [
  { title: 'Generate Blog Post', icon: FileText, color: 'bg-blue-500' },
  { title: 'Create Social Media', icon: TrendingUp, color: 'bg-purple-500' },
  { title: 'Write Email Campaign', icon: Bell, color: 'bg-green-500' },
  { title: 'Analyze Performance', icon: BarChart3, color: 'bg-yellow-500' },
]

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: 'AJ',
    plan: 'Pro',
    usage: '65%',
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar */}
      <div className={cn(
        'fixed inset-0 z-50 lg:hidden',
        sidebarOpen ? 'block' : 'hidden'
      )}>
        <div className="fixed inset-0 bg-gray-600/75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-xl">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI Content Pro
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-5 px-2 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    item.current
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  )}
                >
                  <Icon className="mr-4 h-6 w-6" />
                  {item.name}
                </a>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 pt-5">
          <div className="flex items-center flex-shrink-0 px-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Content Pro
            </span>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                      item.current
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    )}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </a>
                )
              })}
            </nav>
            
            {/* User profile */}
            <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center">
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800 dark:text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {user.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 lg:hidden" aria-hidden="true" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="relative flex flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                className="block w-full rounded-md border-0 py-2 pl-10 pr-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                placeholder="Search..."
              />
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Help</span>
                <HelpCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Welcome header */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Welcome back, {user.name}!
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Here&apos;s what&apos;s happening with your AI Content Pro account today.
                </p>
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow"
                  >
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Icon className={`h-8 w-8 ${stat.color}`} />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              {stat.name}
                            </dt>
                            <dd className="flex items-baseline">
                              <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {stat.value}
                              </div>
                              <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600 dark:text-green-400">
                                {stat.change}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                  <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Quick Actions
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {quickActions.map((action, index) => {
                        const Icon = action.icon
                        return (
                          <button
                            key={action.title}
                            className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                          >
                            <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {action.title}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Recent Activity
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="flow-root">
                      <ul className="-mb-8">
                        {recentActivity.map((activity, activityIdx) => (
                          <li key={activity.id}>
                            <div className="relative pb-8">
                              {activityIdx !== recentActivity.length - 1 ? (
                                <span
                                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                                  aria-hidden="true"
                                />
                              ) : null}
                              <div className="relative flex space-x-3">
                                <div>
                                  <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-white dark:ring-gray-800">
                                    <Sparkles className="h-5 w-5 text-primary" />
                                  </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                  <div>
                                    <p className="text-sm text-gray-900 dark:text-white">
                                      {activity.action}{' '}
                                      <span className="font-medium text-gray-500 dark:text-gray-400">
                                        by {activity.user}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="whitespace-nowrap text-right text-sm text-gray-500 dark:text-gray-400">
                                    <time dateTime={activity.time}>{activity.time}</time>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Plan usage */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                  <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Your Plan
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {user.plan} Plan
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Active until May 5, 2026
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        Active
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Monthly usage</span>
                        <span className="font-medium text-gray-900 dark:text-white">{user.usage} used</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full"
                          style={{ width: user.usage }}
                        />
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      Upgrade Plan
                    </Button>
                  </div>
                </div>

                {/* Upcoming features */}
                <div className="bg-gradient-primary rounded-lg shadow p-6 text-white">
                  <h3 className="text-lg font-medium mb-4">
                    🚀 Coming Soon
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Advanced AI models
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Content scheduling
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Team analytics
                    </li>
                    <li className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Advanced reporting
                    </li>
                  </ul>
