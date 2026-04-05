'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Check, 
  Zap, 
  Users, 
  Globe, 
  Shield,
  TrendingUp,
  BarChart3,
  Clock,
  FileText,
  MessageSquare,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Free',
    price: 'R0',
    period: 'forever',
    description: 'Perfect for trying out AI content generation',
    features: [
      '5 content generations per month',
      'Basic content types',
      'Standard AI models',
      'Community support',
      'Export as text',
    ],
    limitations: [
      'No team collaboration',
      'Limited templates',
      'Basic analytics',
    ],
    cta: 'Get Started Free',
    popular: false,
    color: 'from-gray-400 to-gray-600',
  },
  {
    name: 'Basic',
    price: 'R99',
    period: 'per month',
    description: 'For individuals and small businesses',
    features: [
      '50 content generations per month',
      'All content types',
      'Advanced AI models',
      'Priority support',
      'Export multiple formats',
      'Basic analytics dashboard',
      'Email notifications',
    ],
    limitations: [
      '1 team member',
      'Standard templates',
    ],
    cta: 'Start Basic Plan',
    popular: true,
    color: 'from-blue-500 to-purple-500',
  },
  {
    name: 'Pro',
    price: 'R299',
    period: 'per month',
    description: 'For professionals and growing teams',
    features: [
      'Unlimited content generations',
      'All content types + custom',
      'Premium AI models (GPT-4, Claude)',
      '24/7 priority support',
      'Advanced export options',
      'Advanced analytics',
      'Team collaboration (3 members)',
      'Custom templates',
      'API access',
      'White-label options',
    ],
    limitations: [],
    cta: 'Go Pro',
    popular: false,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Business',
    price: 'R499',
    period: 'per month',
    description: 'For enterprises and agencies',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Custom AI model training',
      'Dedicated account manager',
      'Enterprise analytics',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment',
      'Custom development',
      'Training & onboarding',
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-orange-500 to-red-500',
  },
]

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate content in seconds',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Enterprise-grade security',
  },
  {
    icon: Globe,
    title: '50+ Languages',
    description: 'Native quality in any language',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track performance & ROI',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Always here to help',
  },
]

const contentTypes = [
  { icon: FileText, label: 'Blog Posts' },
  { icon: MessageSquare, label: 'Social Media' },
  { icon: Mail, label: 'Email Marketing' },
  { icon: TrendingUp, label: 'Ad Copy' },
]

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [selectedPlan, setSelectedPlan] = useState('Basic')

  const annualDiscount = 20 // 20% discount for annual billing

  const calculateAnnualPrice = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace('R', ''))
    const annualPrice = price * 12 * (1 - annualDiscount / 100)
    return `R${Math.round(annualPrice)}`
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Simple, Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Choose Your{' '}
              <span className="gradient-text">Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Start for free, upgrade as you grow. No hidden fees, cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-medium transition-all',
                  billingPeriod === 'monthly'
                    ? 'bg-white dark:bg-gray-900 shadow'
                    : 'text-gray-600 dark:text-gray-400'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-medium transition-all',
                  billingPeriod === 'annual'
                    ? 'bg-white dark:bg-gray-900 shadow'
                    : 'text-gray-600 dark:text-gray-400'
                )}
              >
                Annual
                <span className="ml-2 px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                  Save {annualDiscount}%
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                'relative rounded-2xl p-8 transition-all duration-300 hover-3d',
                plan.popular
                  ? 'border-2 border-primary shadow-2xl'
                  : 'border border-gray-200 dark:border-gray-700 shadow-lg'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-primary text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {billingPeriod === 'annual' ? calculateAnnualPrice(plan.price) : plan.price}
                    </span>
                    {plan.price !== 'R0' && (
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        /{billingPeriod === 'annual' ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {billingPeriod === 'annual' && plan.price !== 'R0' && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Billed annually
                    </div>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  What&apos;s included:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.limitations.length > 0 && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Limitations:
                  </h4>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5">•</div>
                        <span className="text-gray-500 dark:text-gray-400">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button
                onClick={() => setSelectedPlan(plan.name)}
                className={cn(
                  'w-full',
                  plan.popular
                    ? 'bg-gradient-primary hover:opacity-90'
                    : 'bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700'
                )}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-6">
              Compare{' '}
              <span className="gradient-text">All Features</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how our plans stack up against each other
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-l-lg">
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={cn(
                        'text-center p-4',
                        plan.popular
                          ? 'bg-primary/10'
                          : 'bg-gray-50 dark:bg-gray-800'
                      )}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">
                    Content Generations
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name}
                      className={cn(
                        'text-center p-4 border-b border-gray-200 dark:border-gray-700',
                        plan.popular && 'bg-primary/5'
                      )}
                    >
                      {plan.features[0]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">
                    AI Models
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name}
                      className={cn(
                        'text-center p-4 border-b border-gray-200 dark:border-gray-700',
                        plan.popular && 'bg-primary/5'
                      )}
                    >
                      {plan.features[2]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">
                    Team Members
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name}
                      className={cn(
                        'text-center p-4 border-b border-gray-200 dark:border-gray-700',
                        plan.popular && 'bg-primary/5'
                      )}
                    >
                      {plan.name === 'Free' ? '1' : plan.name === 'Basic' ? '1' : plan.name === 'Pro' ? '3' : 'Unlimited'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">
                    Support
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name}
                      className={cn(
                        'text-center p-4 border-b border-gray-200 dark:border-gray-700',
                        plan.popular && 'bg-primary/5'
                      )}
                    >
                      {plan.features[3]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4">
                    API Access
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name}
                      className={cn(
                        'text-center p-4',
                        plan.popular && 'bg-primary/5'
                      )}
                    >
                      {plan.features.includes('API access') ? '✓' : '✗'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* All Plans Include */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-border rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">
              All Plans Include
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to create amazing content
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}