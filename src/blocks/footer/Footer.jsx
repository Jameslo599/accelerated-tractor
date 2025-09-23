'use client';

// @next
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// @third-party
import { motion } from 'framer-motion';

// @project
import branding from '@/branding.json';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import Payment from '@/components/Payment';

import { CopyrightType } from '@/enum';
import { PAGE_PATH } from '@/path';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  FOOTER - 7 DATA  ***************************/

const linkProps = { rel: 'noopener noreferrer' };
const data = [
  {
    id: 'company',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Company',
    menu: [
      {
        label: 'Residential',
        link: { href: PAGE_PATH.residentialPage, ...linkProps }
      },
      {
        label: 'Commercial',
        link: { href: PAGE_PATH.commercialPage, ...linkProps }
      }
    ]
  },
  {
    id: 'support',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Support',
    menu: [
      {
        label: 'FAQS',
        link: { href: '/faq', ...linkProps }
      },
      {
        label: 'Support',
        link: { href: branding.company.socialLink.support, ...linkProps }
      },
      {
        label: 'Contact Us',
        link: { href: '/contact', ...linkProps }
      }
    ]
  },
  {
    id: 'resources',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Resources',
    menu: [
      {
        label: 'Privacy Policy',
        link: { href: '/privacy-policy', ...linkProps }
      },
      {
        label: 'Terms & Conditions',
        link: { href: '/terms-condition', ...linkProps }
      }
    ]
  }
];

const iconProps = { color: 'text.secondary' };

const usefulLinks = [
  {
    title: branding.brandName,
    href: null
  },
  {
    title: '(214)-532-5700',
    href: 'tel:+2145325700'
  },
  {
    title: 'jason@adicompanies.com',
    href: 'mail:jason@adicompanies.com'
  },
  {
    title: '1020 Coral Cove, Oak Point, Texas 75068',
    href: 'https://share.google/kGydARe0jsCgKqR7u'
  }
];
const payments = {
  cards: [
    { src: '/assets/svg/payments/visa.svg', alt: 'visa' },
    { src: '/assets/svg/payments/mastercard.svg', alt: 'mastercard' },
    { src: '/assets/svg/payments/discover-card.svg', alt: 'discover' },
    { src: '/assets/svg/payments/amex.svg', alt: 'american express' }
  ],
  preferred: [
    { src: '/assets/svg/payments/cash.svg', alt: 'cash' },
    { src: '/assets/svg/payments/check.svg', alt: 'check' },
    { src: '/assets/svg/payments/bitcoin.svg', alt: 'bitcoin' },
    { src: '/assets/svg/payments/zelle.svg', alt: 'zelle' },
    { src: '/assets/svg/payments/cashapp.svg', alt: 'cash app' },
    { src: '/assets/svg/payments/paypal.svg', alt: 'paypal' },
    { src: '/assets/svg/payments/venmo.svg', alt: 'venmo' }
  ]
};

/***************************  FOOTER - 7  ***************************/

export default function Footer() {
  const theme = useTheme();

  const logoFollowContent = (
    <Stack sx={{ alignItems: 'flex-start', gap: { xs: 1.5, sm: 3 } }}>
      <LogoSection />
      <Typography variant="body2" sx={{ maxWidth: { sm: 280 } }}>
        We earn our clients’ trust by delivering reliable service and lasting results. Get in touch today to learn how we can help you
        enhance and protect your property.
      </Typography>
    </Stack>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY, backgroundColor: `${theme.palette.grey[100]}`, borderRadius: '1rem' }}>
      <Stack id="footer-7" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 7" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <Grid container spacing={{ xs: 4, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                direction={{ sm: 'row', md: 'column' }}
                sx={{ gap: 3, justifyContent: 'space-between', height: 1, color: 'text.reverse' }}
              >
                {logoFollowContent}
                <Payment payments={payments} />
                <Stack>
                  {usefulLinks.map((item, index) => (
                    <Stack direction="row" sx={{ alignItems: 'center' }} key={index}>
                      {item.icon}
                      <Link
                        variant="body2"
                        color="text.reverse"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Useful Links"
                        sx={{ '&:hover': { textDecoration: 'underline' } }}
                      >
                        {item.title}
                      </Link>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Sitemap list={data} isMenuDesign />
            </Grid>
          </Grid>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <GraphicsCard sx={{ borderRadius: { xs: 6, sm: 8 }, backgroundColor: 'secondary.lighter' }}>
            <Stack
              direction={{ sm: 'row' }}
              sx={{
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'space-between' },
                gap: 1.5,
                py: { xs: 2, sm: 1.5 },
                px: { xs: 2, sm: 3 }
              }}
            >
              <Copyright type={CopyrightType.TYPE3} />
              <FollowUS heading={false} color="grey.100" />
            </Stack>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}
