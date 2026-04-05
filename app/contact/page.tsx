'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Building
} from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@aicontentpro.com',
    description: 'General inquiries and support',
    action: 'mailto:hello@aicontentpro.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+27 11 123 4567',
    description: 'Mon-Fri, 9am-5pm SAST',
    action: 'tel:+27111234567',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: 'Johannesburg, South Africa',
    description: 'Headquarters location',
    action: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Support Hours',
    details: '24/7 Available',
    description: 'Email support with 2-hour response',
    action: null,
  },
]

const departments = [
  {
    name: 'Sales',
    email: 'sales@aicontentpro.com',
    description: 'Pricing, demos, and enterprise plans',
  },
  {
    name: 'Support',
    email: 'support@aicontentpro.com',
    description: 'Technical help and troubleshooting',
  },
  {
    name: 'Partnerships',
    email: 'partners@aicontentpro.com',
    description: 'Business development and integrations',
  },
  {
    name: 'Press',
    email: 'press@aicontentpro.com',
    description: 'Media inquiries and announcements',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    department: 'support',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        department: 'support',
      })
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get in Touch
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Let&apos;s Create{' '}
                  <span className="gradient-text">Together</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Have questions? Need support? Want to partner with us? We&apos;re here to help.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {method.title}
                    </h3>
                    {method.action ? (
                      <a
                        href={method.action}
                        className="text-primary font-semibold text-lg mb-2 block hover:underline"
                      >
                        {method.details}
                      </a>
                    ) : (
                      <div className="text-primary font-semibold text-lg mb-2">
                        {method.details}
                      </div>
                    )}
                    <p className="text-gray-600 dark:text-gray-400">
                      {method.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-8">
                  <MessageSquare className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send us a Message
                  </h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <User className="inline h-4 w-4 mr-1" />
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <Mail className="inline h-4 w-4 mr-1" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <Building className="inline h-4 w-4 mr-1" />
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Department *
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        >
                          <option value="support">Support</option>
                          <option value="sales">Sales</option>
                          <option value="partnerships">Partnerships</option>
                          <option value="press">Press</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Departments & FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Contact Departments
                  </h3>
                  <div className="space-y-6">
                    {departments.map((dept) => (
                      <div key={dept.name} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                          {dept.name}
                        </h4>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-primary font-medium mb-2 block hover:underline"
                        >
                          {dept.email}
                        </a>
                        <p className="text-gray-600 dark:text-gray-400">
                          {dept.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Frequently Asked
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        What&apos;s your response time?
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We respond to all inquiries within 24 hours. Priority support customers get responses within 2 hours.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Do you offer custom enterprise solutions?
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Yes! Contact our sales team for custom AI model training, white-label solutions, and enterprise integrations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Can I schedule a demo?
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Absolutely! Book a personalized demo with our sales team to see the platform in action.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="gradient-border rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Need Immediate Help?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Check our documentation and help center for instant answers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/docs"
                      className="px-6 py-3 bg-white text-primary rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                    >
                      View Documentation
                    </a>
                    <a
                      href="/help"
                      className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-center hover:bg-white/10 transition-colors"
                    >
                      Help Center
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visit Our <span className="gradient-text">Office</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Located in the heart of Johannesburg&apos;s tech district.
              </p>
            </div>

            <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Interactive map would be displayed here
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                  Johannesburg, South Africa
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}