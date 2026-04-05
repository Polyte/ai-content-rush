'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Globe, 
  Clock, 
  Sparkles,
  FileText,
  MessageSquare,
  Mail,
  TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'Powered by GPT-4, Claude, and custom AI models for the highest quality content generation.',
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate high-quality content in seconds, not hours. Perfect for tight deadlines.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and GDPR compliance.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools for teams to work together seamlessly.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Track performance, engagement, and ROI with detailed analytics dashboard.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Globe,
    title: 'Multi-language',
    description: 'Generate content in 50+ languages with native-level quality.',
    color: 'from-red-500 to-pink-500',
  },
]

const contentTypes = [
  {
    icon: FileText,
    title: 'Blog Posts',
    description: 'Long-form articles, guides, and thought leadership content.',
    examples: ['How-to guides', 'Industry analysis', 'Product reviews'],
  },
  {
    icon: MessageSquare,
    title: 'Social Media',
    description: 'Engaging posts for all major platforms with optimal formatting.',
    examples: ['Twitter threads', 'LinkedIn posts', 'Instagram captions'],
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'High-converting email sequences and newsletters.',
    examples: ['Welcome sequences', 'Newsletters', 'Promotional emails'],
  },
  {
    icon: TrendingUp,
    title: 'Ad Copy',
    description: 'Compelling ad copy that drives clicks and conversions.',
    examples: ['Facebook ads', 'Google ads', 'Display ads'],
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
              Powerful Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need for{' '}
              <span className="gradient-text">Amazing Content</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From blog posts to social media, our AI platform handles all your content needs with precision and speed.
            </p>
          </motion.div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-3d">
                  <div className="mb-6">
                    <div className={cn(
                      'inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r',
                      feature.color
                    )}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold">
                    <span>Learn more</span>
                    <div className="ml-2 transform group-hover:translate-x-2 transition-transform">
                      →
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Content Types */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-6">
              Generate{' '}
              <span className="gradient-text">Any Type of Content</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI understands context and tone to deliver perfect content for every use case.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {type.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {type.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example) => (
                          <span
                            key={example}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-border rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Languages
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                100+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Content Templates
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                99.9%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Uptime
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Support
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}