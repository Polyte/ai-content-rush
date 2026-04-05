'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  CheckCircle, 
  Shield, 
  Zap,
  Mail,
  Lock,
  User,
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react'
import Navbar from '../../components/layout/navbar'
import Footer from '../../components/layout/footer'
import Link from 'next/link'

const benefits = [
  {
    icon: Zap,
    title: 'Start Immediately',
    description: 'Get access instantly after signup',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Enterprise-grade security',
  },
  {
    icon: CheckCircle,
    title: 'No Credit Card',
    description: 'Free trial requires no payment',
  },
]

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    plan: 'free',
    acceptTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    // Validate terms accepted
    if (!formData.acceptTerms) {
      alert('Please accept the terms and conditions')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                  <div className="text-center mb-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Start Your Free Trial
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                      Create Your Account
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Join 2,500+ creators already using AI Content Pro
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Welcome to AI Content Pro! 🎉
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Your account has been created successfully. Check your email to verify your account.
                      </p>
                      <div className="space-y-4">
                        <Link
                          href="/dashboard"
                          className="block w-full py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                          Go to Dashboard
                        </Link>
                        <Link
                          href="/demo"
                          className="block w-full py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          Try Live Demo First
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {/* Name Field */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <User className="inline h-4 w-4 mr-1" />
                          Full Name *
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

                      {/* Email Field */}
                      <div className="mb-6">
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

                      {/* Password Field */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <Lock className="inline h-4 w-4 mr-1" />
                          Password *
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength={8}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 pr-12"
                            placeholder="At least 8 characters"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      {/* Confirm Password Field */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <Lock className="inline h-4 w-4 mr-1" />
                          Confirm Password *
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 pr-12"
                            placeholder="Confirm your password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                          >
                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      {/* Plan Selection */}
                      <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                          Select Your Plan
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { id: 'free', name: 'Free', price: 'R0', desc: '5 generations/month' },
                            { id: 'basic', name: 'Basic', price: 'R99', desc: '50 generations/month' },
                          ].map((plan) => (
                            <label
                              key={plan.id}
                              className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                                formData.plan === plan.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-gray-300 dark:border-gray-700 hover:border-primary/50'
                              }`}
                            >
                              <input
                                type="radio"
                                name="plan"
                                value={plan.id}
                                checked={formData.plan === plan.id}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-semibold text-gray-900 dark:text-white">
                                    {plan.name}
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {plan.desc}
                                  </div>
                                </div>
                                <div className="text-lg font-bold text-gray-900 dark:text-white">
                                  {plan.price}
                                  <span className="text-sm text-gray-600 dark:text-gray-400">/mo</span>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          You can upgrade or downgrade anytime
                        </p>
                      </div>

                      {/* Terms Checkbox */}
                      <div className="mb-8">
                        <label className="flex items-start">
                          <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            className="mt-1 mr-3"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            I agree to the{' '}
                            <a href="/terms" className="text-primary hover:underline">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="/privacy" className="text-primary hover:underline">
                              Privacy Policy
                            </a>
                            . I understand that I can cancel my subscription anytime.
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Creating Account...
                          </>
                        ) : (
                          <>
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                        Already have an account?{' '}
                        <Link href="/login" className="text-primary font-semibold hover:underline">
                          Sign in here
                        </Link>
                      </p>
                    </form>
                  )}
                </motion.div>

                {/* Right Column - Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Benefits */}
                  <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6">
                      Why Join AI Content Pro?
                    </h2>
                    <div className="space-y-6">
                      {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                          <div key={benefit.title} className="flex items-start">
                            <Icon className="h-6 w-6 mr-3 flex-shrink-0" />
                            <div>
                              <h3 className="font-semibold mb-1">{benefit.title}</h3>
                              <p className="text-white/90">{benefit.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold mr-4">
                        SJ
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          Sarah Johnson
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Content Marketing Manager
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      &ldquo;AI Content Pro has saved our team 15+ hours per week. The quality is consistently excellent and our engagement has never been higher.&rdquo;
                    </p>
                  </div>

                  {/* Features */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                      What You Get
                    </h3>
                    <ul className="space-y-3">
                      {[
                        '5 free content generations',
                        'Access to basic AI models',
                        'Export as text format',
                        'Community support',
                        'No credit card required',
                        'Cancel anytime',
                      ].map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Security Badge */}
                  <div className="border-2 border-green-200 dark:border-green-800 rounded-2xl p-6 bg-green-50 dark:bg-green-900/20">
                    <div className="flex items-center mb-4">
                      <Shield className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          Secure & Trusted
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Bank-level security
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Your data is encrypted end-to-end. We never store payment information and comply with GDPR regulations.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}