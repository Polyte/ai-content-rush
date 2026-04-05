'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Zap, 
  Clock, 
  CheckCircle, 
  Copy, 
  RefreshCw,
  Type,
  Volume2,
  Globe,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const contentTypes = [
  { id: 'blog', label: 'Blog Post', icon: Type, color: 'bg-blue-500' },
  { id: 'social', label: 'Social Media', icon: TrendingUp, color: 'bg-purple-500' },
  { id: 'email', label: 'Email', icon: Volume2, color: 'bg-green-500' },
  { id: 'ad', label: 'Ad Copy', icon: Globe, color: 'bg-red-500' },
]

const tones = [
  { id: 'professional', label: 'Professional', emoji: '👔' },
  { id: 'friendly', label: 'Friendly', emoji: '😊' },
  { id: 'persuasive', label: 'Persuasive', emoji: '💪' },
  { id: 'urgent', label: 'Urgent', emoji: '⚡' },
]

const exampleTopics = [
  'How AI is transforming content marketing',
  'Sustainable business practices for 2024',
  'Remote work productivity tips',
  'Building a personal brand on social media',
  'The future of e-commerce trends',
]

const demoContent = {
  blog: `# How AI is Transforming Content Marketing

## The New Era of Content Creation

Artificial Intelligence is revolutionizing how businesses approach content marketing. With AI-powered tools, marketers can now:

- **Generate high-quality content** in minutes instead of hours
- **Personalize content** for different audience segments
- **Optimize for SEO** with intelligent keyword analysis
- **Analyze performance** and adjust strategies in real-time

## Key Benefits of AI Content Generation

1. **Increased Efficiency**: Reduce content creation time by 80%
2. **Improved Quality**: AI helps maintain consistent tone and style
3. **Better ROI**: Higher engagement rates with targeted content
4. **Scalability**: Create more content without increasing team size

## Getting Started with AI Content

To leverage AI in your content strategy:
1. Identify your content gaps
2. Choose the right AI tools
3. Train the AI with your brand voice
4. Review and refine AI-generated content
5. Measure results and optimize

The future of content marketing is here, and it's powered by AI.`,
  
  social: `🚀 AI is changing the game for content creators!

Here's how:

✨ Generate engaging posts in seconds
🎯 Target the right audience with precision
📈 Boost engagement with data-driven insights
💡 Get creative ideas when you're stuck

Pro tip: Use AI to:
• Create multiple post variations
• Schedule content for optimal times
• Analyze what resonates with your audience

Ready to level up your social media game? Try AI-powered content creation today!

#AIContent #SocialMediaMarketing #ContentCreation #DigitalMarketing`,
  
  email: `Subject: Transform Your Content Strategy with AI

Hi [Name],

I wanted to share something exciting with you - AI-powered content creation is changing how businesses approach marketing.

Here's what you can achieve:

✅ Generate blog posts in minutes, not hours
✅ Create personalized email campaigns
✅ Optimize content for better SEO rankings
✅ Scale your content production effortlessly

Our platform makes it easy to:
• Create high-quality content with AI assistance
• Maintain your brand voice across all channels
• Track performance and optimize in real-time

Would you be interested in a quick demo to see how AI can transform your content strategy?

Best regards,
[Your Name]

P.S. Early adopters are seeing 3x more engagement with AI-optimized content.`,
  
  ad: `🚀 **Attention Content Creators!**

Tired of spending hours writing?

**AI Content Pro** generates:
• Blog posts in 60 seconds
• Social media content instantly
• Email campaigns that convert
• Ad copy that sells

✨ **Special Offer**: Get 50% off your first month!

👉 [Click here to try free]

✅ No credit card required
✅ 30-day money-back guarantee
✅ 24/7 customer support

**Limited spots available!** Join 2,500+ happy creators who save 10+ hours weekly.

#AIContent #ContentCreation #MarketingTools #Productivity`
}

export default function DemoSection() {
  const [selectedType, setSelectedType] = useState('blog')
  const [selectedTone, setSelectedTone] = useState('professional')
  const [topic, setTopic] = useState('How AI is transforming content marketing')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState(demoContent.blog)
  const [copied, setCopied] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [readability, setReadability] = useState(0)
  const [aiScore, setAiScore] = useState(0)

  useEffect(() => {
    setGeneratedContent(demoContent[selectedType as keyof typeof demoContent])
    calculateMetrics()
  }, [selectedType])

  const calculateMetrics = () => {
    const content = demoContent[selectedType as keyof typeof demoContent]
    const words = content.split(/\s+/).length
    setWordCount(words)
    setReadability(Math.min(100, Math.floor(Math.random() * 30) + 70))
    setAiScore(Math.min(100, Math.floor(Math.random() * 20) + 80))
  }

  const handleGenerate = () => {
    setIsGenerating(true)
    
    // Simulate AI generation
    setTimeout(() => {
      const content = demoContent[selectedType as keyof typeof demoContent]
      setGeneratedContent(content)
      calculateMetrics()
      setIsGenerating(false)
    }, 1500)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleTopicClick = (newTopic: string) => {
    setTopic(newTopic)
  }

  const handleRefresh = () => {
    handleGenerate()
  }

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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
              Live AI Demo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              See the{' '}
              <span className="gradient-text">Magic in Action</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Try our AI content generator for free. No signup required!
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Controls */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Content Type Selection */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  What would you like to create?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {contentTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={cn(
                          'flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300',
                          selectedType === type.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                        )}
                      >
                        <div className={cn('w-12 h-12 rounded-full flex items-center justify-center mb-2', type.color)}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {type.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Topic Input */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Enter your topic
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="e.g., 'How AI is transforming content marketing'"
                  />
                  <div className="absolute right-3 top-3">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Try one of these topics:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exampleTopics.map((example) => (
                      <button
                        key={example}
                        onClick={() => handleTopicClick(example)}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tone Selection */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Select tone
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tones.map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => setSelectedTone(tone.id)}
                      className={cn(
                        'flex items-center px-4 py-2 rounded-full border-2 transition-all duration-300',
                        selectedTone === tone.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary/50'
                      )}
                    >
                      <span className="mr-2">{tone.emoji}</span>
                      {tone.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                size="xl"
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="h-5 w-5 mr-2" />
                    Generate Amazing Content
                  </>
                )}
              </Button>
            </motion.div>

            {/* Right Panel - Output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">
                    AI Generated Content
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Live
                    </span>
                  </div>
                </div>

                {/* Content Output */}
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <div className="h-96 overflow-y-auto">
                    <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">
                      {generatedContent}
                    </pre>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button
                    onClick={handleCopy}
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Content
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleRefresh}
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Regenerate
                  </Button>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">
                    {wordCount}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Words
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-1">
                    {readability}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Readability
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">
                    {aiScore}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    AI Score
                  </div>
                </div>
              </div>

              {/* Features Highlight */}
              <div className="bg-gradient-primary rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">
                  ✨ Premium Features
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                    Unlimited content generation
                  </li>
                  <li className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                    50+ content templates
                  </li>
                  <li className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                    Team collaboration tools
                  </li>
                  <li className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                    Priority support
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}