'use client';

// @project
import { Hero17 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import {
  about3,
  benefit,
  clientele,
  contactUS,
  cta4,
  cta5,
  faq,
  feature20,
  feature21,
  feature18,
  gallery4,
  hero,
  integration,
  other,
  pricing,
  testimonial,
  team
} from './data';
import { Gallery4 } from '@/blocks/gallery';
import { Box } from '@mui/material';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { Team4, Team5 } from '@/blocks/team';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
  useDataThemeMode();

  return (
    <Box sx={{ position: 'relative' }}>
      <Hero17 {...hero} />
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/other').then((module) => ({ default: module.Other1 })), props: other },
          { importFunc: () => import('@/blocks/about').then((module) => ({ default: module.About3 })), props: about3 }
          // { importFunc: () => import('@/blocks/benefit').then((module) => ({ default: module.Benefit5 })), props: benefit }
        ]}
        offset="200px"
      />
      {/* <Feature20 {...feature20} /> */}
      {/* <Gallery4 {...gallery4} /> */}
      <Team4 {...team} />
      {/* <LazySection
        sections={[
          // { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature18 })), props: feature18 },
          // { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature21 })), props: feature21 },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta4 })), props: cta4 }
        ]}
        offset="200px"
      /> */}

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/testimonial').then((module) => ({ default: module.Testimonial10 })), props: testimonial }
          // { importFunc: () => import('@/blocks/clientele').then((module) => ({ default: module.Clientele3 })), props: clientele }
          // { importFunc: () => import('@/blocks/contact-us').then((module) => ({ default: module.ContactUs6 })), props: contactUS }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
      {/* <LazySection
        sections={
          [
            // { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta5 })), props: cta5 },
            // { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
          ]
        }
        offset="200px"
      /> */}
    </Box>
  );
}
