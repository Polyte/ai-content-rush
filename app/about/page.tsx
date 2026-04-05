import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Users, 
  Target, 
  Globe, 
  Heart,
  Award,
  Clock,
  TrendingUp
} from 'lucide-react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Democratize AI content creation for businesses of all sizes.',
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Heart,
    title: 'Our Passion',
    description: 'Helping creators and businesses tell better stories.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving customers in 50+ countries worldwide.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Commitment to quality in everything we build.',
    color: 'from-yellow-500 to-orange-500',
  },
]

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    bio: 'Former Google AI researcher with 10+ years in machine learning.',
    expertise: ['AI Research', 'Product Strategy', 'Team Leadership'],
  },
  {
    name: 'Maria Chen',
    role: 'CTO',
    bio: 'Ex-Meta engineer specializing in scalable AI systems.',
    expertise: ['System Architecture', 'ML Ops', 'Security'],
  },
  {
    name: 'David Okafor',
    role: 'Head of Product',
    bio: 'Product leader from Shopify with focus on user experience.',
    expertise: ['UX Design', 'Product Growth', 'Customer Success'],
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Marketing',
    bio: 'Marketing veteran with background in content strategy.',
    expertise: ['Content Marketing', 'Brand Strategy', 'Growth'],
  },
]

const milestones = [
  { year: '2024', event: 'Company Founded', description: 'Started with a vision to democratize AI content' },
  { year: '2025 Q1', event: 'Beta Launch', description: 'First 100 customers onboarded' },
  { year: '2025 Q3', event: 'Series A Funding', description: 'Raised $5M to scale platform' },
  { year: '2026 Q1', event: 'Global Expansion', description: 'Launched in 50+ countries' },
  { year: '2026 Q2', event: 'AI Content Pro Launch', description: 'Current platform with advanced features' },
]

export default function AboutPage() {
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
                  Our Story
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Building the Future of{' '}
                  <span className="gradient-text">Content Creation</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  We&apos;re on a mission to empower every business with AI-powered content tools.
                  What started as a simple idea has grown into a platform serving thousands of creators worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do at AI Content Pro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} mb-6`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our <span className="gradient-text">Leadership Team</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experienced professionals passionate about AI and content creation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary text-center font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From startup to serving thousands of customers worldwide.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}
                >
                  <div className="w-1/2 px-8">
                    <div className="bg-gradient-primary rounded-2xl p-6 text-white">
                      <div className="text-2xl font-bold mb-2">{milestone.year}</div>
                      <div className="text-lg font-semibold mb-2">{milestone.event}</div>
                      <p className="opacity-90">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="w-1/2 px-8">
                    {/* Empty for alignment */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10M+</div>
                <div className="text-gray-600 dark:text-gray-400">Content Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600 dark:text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gradient-border rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Be part of the revolution in AI-powered content creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup"
                  className="px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Free Trial
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}