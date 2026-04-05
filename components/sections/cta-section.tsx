'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate content in seconds, not hours',
  },
  {
    icon: Shield,
    title: 'Risk Free',
    description: '30-day money-back guarantee',
  },
  {
    icon: Users,
    title: 'Team Ready',
    description: 'Collaborate with your entire team',
  },
  {
    icon: Clock,
    title: 'Time Saving',
    description: 'Save 10+ hours per week',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: '95% customer satisfaction rate',
  },
  {
    icon: CheckCircle,
    title: 'Easy Setup',
    description: 'Get started in under 5 minutes',
  },
]

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="gradient-border rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Ready to Transform Your Content?
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Start Creating{' '}
                  <span className="gradient-text">Amazing Content</span>{' '}
                  Today
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                  Join 2,500+ teams who save hours every week and create better content with AI.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Column - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                  Why Choose AI Content Pro?
                </h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Right Column - CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Get Started Free
                  </h3>
                  <p className="text-gray-300 mb-6">
                    No credit card required. Start creating amazing content today.
                  </p>
                  
                  <div className="mb-8">
                    <div className="text-5xl font-bold text-white mb-2">
                      R0
                      <span className="text-xl text-gray-400">/month</span>
                    </div>
                    <div className="text-gray-400">
                      Free forever plan • Upgrade anytime
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>5 free content generations</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>Basic content types</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>

                  <Link href="/signup" className="block mb-4">
                    <Button size="xl" className="w-full bg-gradient-primary hover:opacity-90">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <p className="text-sm text-gray-400">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Trusted by teams at leading companies
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {['TechCorp', 'StartupXYZ', 'MediaCo', 'DigitalAgency', 'EcommercePro', 'GrowthLab'].map((company) => (
                  <div
                    key={company}
                    className="text-lg font-semibold text-gray-700 dark:text-gray-300"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}