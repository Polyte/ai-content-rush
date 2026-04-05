import Link from 'next/link'
import { 
  Sparkles, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'API', href: '/api' },
    { name: 'Status', href: '/status' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Security', href: '/security' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/aicontentpro', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/aicontentpro', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/aicontentpro', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com/aicontentpro', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/aicontentpro', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com/aicontentpro', label: 'YouTube' },
]

const contactInfo = [
  { icon: Mail, text: 'hello@aicontentpro.com' },
  { icon: Phone, text: '+27 11 123 4567' },
  { icon: MapPin, text: 'Johannesburg, South Africa' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    AI Content Pro
                  </span>
                  <span className="text-sm text-gray-400">
                    Generate Amazing Content
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The world&apos;s most advanced AI content platform. Generate blog posts, 
                social media, emails, ads, and more with human-like quality in seconds.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon
                  return (
                    <div key={contact.text} className="flex items-center space-x-3">
                      <Icon className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-400">{contact.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} AI Content Pro. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Secure Payment</div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-5 bg-gray-800 rounded"></div>
                <div className="w-8 h-5 bg-gray-800 rounded"></div>
                <div className="w-8 h-5 bg-gray-800 rounded"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">GDPR Compliant</div>
              <div className="w-8 h-8 bg-gray-800 rounded-full mx-auto"></div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">SSL Secured</div>
              <div className="w-8 h-8 bg-gray-800 rounded-full mx-auto"></div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for updates and tips
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}