// @project
import branding from '@/branding.json';

export const contactUS = {
  heading: 'We’d love to hear from you',
  caption:
    'Your vision could spark the next innovation. Whether it’s a problem you want to solve or a project you believe in—let’s make it happen.',
  list: [
    {
      icon: 'tabler-phone',
      title: 'Contact Office',
      content: 'Speak to a professional',
      link: { children: 'CONTACT SUPPORT', href: branding.company.socialLink.support, target: '_blank', rel: 'noopener noreferrer' }
    },
    {
      icon: 'tabler-help-circle',
      title: 'Have a Question?',
      content: 'See our frequently asked questions',
      link: { children: 'GET ANSWERS', href: '/faq' }
    },
    {
      icon: 'tabler-folder-check',
      title: 'Press & Media',
      content: 'Connect with us on social media',
      link: { children: 'CONNECT WITH US', href: branding.company.socialLink.facebook, target: '_blank', rel: 'noopener noreferrer' }
    }
  ],
  contactDetails: {
    address: '1020 Coral Cove, Oak Point, Texas 75068',
    email: 'jason@adicompanies.com',
    phone: '(214)-532-5700',
    time: [
      {
        Sunday: 'Closed',
        Monday: '7AM - 7PM',
        Tuesday: '7AM - 7PM',
        Wednesday: '7AM - 7PM',
        Thursday: '7AM - 7PM',
        Friday: '7AM - 7PM',
        Saturday: '7AM - 7PM'
      }
    ]
  }
};
