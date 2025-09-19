import branding from '@/branding.json';

export const testimonial = {
  heading: 'Our Clients Love Us',
  caption: `Trusted by thousands of people in Texas, hear how ${branding.brandName} brought their projects to life.`,
  testimonials: [
    {
      ratings: 5,
      review:
        'Excellent industry knowledge. Wonderful customer service by Jason and his staff. Highly recommended for big projects. Will always be using them.',
      profile: { avatar: '/assets/images/mui-reviews/matt-s.png', name: 'Matt S.', role: '' }
    },
    {
      ratings: 5,
      review: `Called in as a small business looking for white label work. Jason took the time to offer me some advice and options. Appreciated that a lot!`,
      profile: { avatar: '', name: 'Dmitri H.', role: '' }
    },
    {
      ratings: 5,
      review: `Quality. Handled our building pad and not only did they hit every deadline, they delivered EARLY. We received renderings, perfect mockups for photos, and we continue to use Accelerated Tractor Services for all local goods. Strongly recommend.`,
      profile: { avatar: '', name: 'Robert P.', role: '' }
    },
    {
      ratings: 5,
      review: `We handle very large venues and working with Jason was one of the best experiences we've ever had. Jason walked us through every step and design idea. Prices are the best we've seen and we searched a lot as we are just medium size company. Highly recommend.`,
      profile: { avatar: '', name: 'Mark A.', role: '' }
    },
    {
      ratings: 5,
      review: `The customer service and kindness of this company has made me a future customer. I sent an email and they responded in less than 15 minutes. The promptness was refreshing, plus they wanted to know more about my needs. Jason asked all of the right questions and I couldn't believe how helpful he was! This is the kind of business that I want to do business with. I look forward to working with them in the future.`,
      profile: { avatar: '', name: 'Elijah A.', role: '' }
    },
    {
      ratings: 5,
      review: `I have been a Customer for over 10 years and my experience is always excellent. Great people who understand the business.`,
      profile: { avatar: '', name: 'John K.', role: '' }
    }
  ]
};
