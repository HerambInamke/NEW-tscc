import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const data = {
  facebookLink: 'https://facebook.com/tscc',
  instaLink: 'https://instagram.com/tscc',
  twitterLink: 'https://twitter.com/tscc',
  githubLink: 'https://github.com/tscc',
  linkedinLink: 'https://linkedin.com/company/tscc',
  youtubeLink: 'https://youtube.com/tscc',
  services: {
    webdev: '/web-development',
    webdesign: '/web-design',
    marketing: '/marketing',
    googleads: '/google-ads',
  },
  about: {
    history: '/about',
    team: '/members',
    handbook: '/handbook',
    careers: '/careers',
  },
  help: {
    faqs: '/faqs',
    support: '/contact',
    livechat: '/contact',
  },
  contact: {
    email: 'technosmartcampusclub@gmail.com',
    phone: '93254 46359',
    address: 'MIT, Pune, Maharashtra, India',
  },
  company: {
    name: 'TSCC',
    description:
      'Techno Smart Campus Club - Fostering innovative thinking and sustainable technological solutions for global environmental challenges.',
    logo: '/TSCC-Logo.png',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: Youtube, label: 'YouTube', href: data.youtubeLink },
];

const aboutLinks = [
  { text: 'About Us', href: data.about.history },
  { text: 'Our Team', href: data.about.team },
  { text: 'Club Handbook', href: data.about.handbook },
  { text: 'Join Us', href: data.about.careers },
];

const serviceLinks = [
  { text: 'Green Tech Projects', href: '/projects' },
  { text: 'Workshops', href: '/events' },
  { text: 'Research', href: '/research' },
  { text: 'Community', href: '/community' },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Support', href: data.help.support },
  { text: 'Contact Us', href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email, isEmail: true },
  { icon: Phone, text: data.contact.phone, isPhone: true },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-forest/5 dark:bg-forest/10 mt-16 w-full place-self-end rounded-t-xl border-t border-forest/20">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-forest flex justify-center gap-2 sm:justify-start">
              <img
                src={data.company.logo || '/placeholder.svg'}
                alt="TSCC Logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-2xl font-semibold font-serif-heading">
                {data.company.name}
              </span>
            </div>

            <p className="text-technical-gray mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left font-sans-body">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest hover:text-olive transition-colors duration-300"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium font-serif-heading text-forest">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-technical-gray hover:text-forest transition-colors duration-300 font-sans-body"
                      to={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium font-serif-heading text-forest">Our Activities</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-technical-gray hover:text-forest transition-colors duration-300 font-sans-body"
                      to={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium font-serif-heading text-forest">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <Link
                      to={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-technical-gray hover:text-forest transition-colors duration-300'
                      }`}
                    >
                      <span className="text-technical-gray hover:text-forest transition-colors duration-300 font-sans-body">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-forest absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-forest relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium font-serif-heading text-forest">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
              {contactInfo.map(({ icon: Icon, text, isAddress, isPhone, isEmail }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start hover:text-forest transition-colors duration-300"
                    href={
                      isAddress
                        ? '#'
                        : isPhone
                        ? `tel:${String(text).replace(/\s+/g, '')}`
                        : isEmail
                        ? `mailto:${text}`
                        : '#'
                    }
                    >
                      <Icon className="text-forest size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="text-technical-gray -mt-0.5 flex-1 not-italic transition font-sans-body">
                          {text}
                        </address>
                      ) : (
                        <span className="text-technical-gray flex-1 transition font-sans-body">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-forest/20 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-technical-gray font-sans-body">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-technical-gray mt-4 text-sm transition sm:order-first sm:mt-0 font-sans-body">
              &copy; 2025 {data.company.name} - Techno Smart Campus Club
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
