// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Frequently Asked Questions',
  caption: `Answers to common questions about ${branding.brandName}.`,
  defaultExpanded: 'Fees & Charges',
  faqList: [
    {
      question: `When should I mow my property?`,
      answer: `Between March and December, we generally recommend you have your property anywhere between 2 to 4 weeks to keep it well maintained.`,
      category: 'MOWING'
    },
    {
      question: `Does my grass need to be dry?`,
      answer: `No, your grass can be wet when it’s time to cut it.`,
      category: 'MOWING'
    },
    {
      question: `What happens to the cut grass?`,
      answer: `Often times the cut grass is simply left where it’s cut to biodegrade and break down naturally. Depending on the grass being cut, it could also be used for hay.`,
      category: 'MOWING'
    },
    {
      question: `
    What type of grass seed is used in Hydroseeding?`,
      answer:
        'Hydromulching is a versatile process that can utilize many types of grasses in the process. Grass types are usually chosen in relation to the amount of sun said grass can expect to receive.',
      category: 'HYDROMULCHING'
    },
    {
      question: `Should I have my soil tested before the process?`,
      answer: 'It’s not exactly required, but it’s generally advised to have your soil tested to establish the requirements of your grass.',
      category: 'HYDROMULCHING'
    },
    {
      question: `Should I stay off hydroseeded soil?`,
      answer:
        'Walking across the soil generally won’t affect it too much but it’s not advised. Driving over it or walking across it frequently is very detrimental to its long-term quality.',
      category: 'HYDROMULCHING'
    },
    {
      question: `What kind gravel should I use?`,
      answer:
        'Gravel size differs depending on what you need. Driveways use larger gravel than simple footpaths. We’ll evaluate what you need when we come out to figure out what you need.',
      category: 'GRAVEL'
    },
    {
      question: `What is gravel made of?`,
      answer: 'Gravel is a mix of several different kinds of rocks, with the most common being sandstone, limestone, and basalt.',
      category: 'GRAVEL'
    },
    {
      question: `How often should my gravel be maintained.`,
      answer: 'It’s generally advised to lay more gravel every 2 to 3 years.',
      category: 'GRAVEL'
    },
    {
      question: `Do You Do the Mulching yourself?`,
      answer:
        'Yes. We take the leftovers from the land clearing and use them to make an all-natural mulch for your land, and then spread it out accordingly.',
      category: 'MULCHING'
    },
    {
      question: `Do I need to maintain my mulch?`,
      answer:
        'That depends on what you intend to do. If your intentions are simply to allow growth in your area, then really all you need to do is let nature take its course. If you’re intending to grow specific plants, then you’ll want to pay attention to prevent things like weeds from taking root.',
      category: 'MULCHING'
    },
    {
      question: `What goes into the mulch?`,
      answer: 'Really anything organic for the most part. If we cut it down, it’s probably going to be in the mulch.',
      category: 'MULCHING'
    },
    {
      question: `What is the difference between your mulch and store-bought mulch?`,
      answer:
        'Store-bought mulch is coated, colored, or dyed which is beautiful to look at but impedes the natural decomposition process. The mulch that we create decomposes, leaving you a nutrient rich soil.',
      category: 'MULCHING'
    },
    {
      question: `How do you perform Demo work?`,
      answer: 'The go-to tools of the trade are sledgehammers and jackhammers. Other tools are utilized when the need demands it.',
      category: 'DEMOLITION'
    },
    {
      question: `Do provide complete demolitions?`,
      answer:
        'That depends on the structure. Smaller buildings like sheds we can handle, but the outright demolition of something like a house is outside of the scope of our expertise.',
      category: 'DEMOLITION'
    },
    {
      question: `What happens to the leftover material?`,
      answer: 'The materials collected afterward will be either recycled or thrown away by us unless you specify you want otherwise.',
      category: 'DEMOLITION'
    }
  ],
  getInTouch: {
    link: { children: 'GET IN TOUCH', href: '/contact', target: '_blank', rel: 'noopener noreferrer' }
  },
  categories: ['MOWING', 'HYDROMULCHING', 'GRAVEL', 'MULCHING', 'DEMOLITION'],
  activeCategory: 'MOWING'
};
