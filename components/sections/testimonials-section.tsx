'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Star, 
  Quote, 
  TrendingUp, 
  Clock,
  Users,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Content Marketing Manager',
    company: 'TechCorp',
    avatar: 'SJ',
    content: 'AI Content Pro has transformed our content strategy. We went from struggling to produce 2 blog posts per week to publishing 10+ high-quality articles. The time savings are incredible!',
    rating: 5,
    stats: {
      timeSaved: '15 hours/week',
      engagement: '+45%',
      roi: '3.2x',
    },
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'StartupXYZ',
    avatar: 'MC',
    content: 'As a startup with limited resources, AI Content Pro has been a game-changer. We maintain a consistent content calendar without hiring additional writers. The quality is exceptional!',
    rating: 5,
    stats: {
      timeSaved: '20 hours/week',
      engagement: '+62%',
      roi: '4.1x',
    },
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Social Media Director',
    company: 'DigitalAgency',
    avatar: 'ER',
    content: 'Our social media engagement has skyrocketed since using AI Content Pro. The platform understands our brand voice perfectly and generates content that resonates with our audience.',
    rating: 5,
    stats: {
      timeSaved: '12 hours/week',
      engagement: '+78%',
      roi: '2.8x',
    },
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'SEO Specialist',
    company: 'EcommercePro',
    avatar: 'DK',
    content: 'The SEO optimization features are outstanding. Our organic traffic increased by 300% in just 3 months. AI Content Pro generates content that both users and search engines love.',
    rating: 5,
    stats: {
      timeSaved: '18 hours/week',
      engagement: '+92%',
      roi: '5.3x',
    },
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Marketing Director',
    company: 'MediaCo',
    avatar: 'LW',
    content: 'The team collaboration features have streamlined our workflow. Multiple team members can work on content simultaneously, and the approval process is seamless.',
    rating: 5,
    stats: {
      timeSaved: '25 hours/week',
      engagement: '+55%',
      roi: '3.7x',
    },
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Content Strategist',
    company: 'GrowthLab',
    avatar: 'JW',
    content: 'The analytics dashboard provides incredible insights. We can now make data-driven decisions about our content strategy, resulting in better performance across all channels.',
    rating: 5,
    stats: {
      timeSaved: '14 hours/week',
      engagement: '+68%',
      roi: '4.5x',
    },
    color: 'from-indigo-500 to-blue-500',
  },
]

const stats = [
  {
    icon: Users,
    value: '2,500+',
    label: 'Happy Customers',
    description: 'From startups to enterprises',
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Satisfaction Rate',
    description: 'Based on customer reviews',
  },
  {
    icon: Clock,
    value: '50,000+',
    label: 'Hours Saved',
    description: 'Collectively by our users',
  },
  {
    icon: Zap,
    value: '10M+',
    label: 'Content Pieces',
    description: 'Generated and counting',
  },
]

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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
              Customer Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Loved by{' '}
              <span className="gradient-text">Amazing Teams</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how teams of all sizes use AI Content Pro to transform their content strategy.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-3d">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-gray-300 dark:text-gray-600" />
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-8 italic">
                  "{testimonial.content}"
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {testimonial.stats.timeSaved}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Time Saved
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      {testimonial.stats.engagement}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Engagement
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      {testimonial.stats.roi}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      ROI
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className={cn(
                    'flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold',
                    'bg-gradient-to-r',
                    testimonial.color
                  )}>
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'h-4 w-4',
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-border rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary text-white text-2xl font-bold mb-4">
                  SJ
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Sarah Johnson
                </h3>
                <div className="text-gray-600 dark:text-gray-400 mb-4">
                  Content Marketing Manager • TechCorp
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-gray-700 dark:text-gray-300 font-semibold">
                    5.0
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <Quote className="h-8 w-8 text-gray-400 dark:text-gray-600 mb-4" />
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-6 italic">
                "AI Content Pro has completely transformed how we approach content creation. 
                What used to take our team days now takes hours. The quality is consistently 
                excellent, and our audience engagement has never been higher."
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    15 hours/week
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Time Saved
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    +45%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Engagement
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    3.2x ROI
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Return on Investment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-6">
            Ready to join{' '}
            <span className="gradient-text">2,500+ happy teams</span>?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Start creating amazing content today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg bg-gradient-primary hover:opacity-90">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Free 14-day trial • No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  )
}