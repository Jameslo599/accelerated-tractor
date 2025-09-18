'use client';

import { useEffect, useState } from 'react';

// @third-party
import axios from 'axios';

// @project
import { Feature20 } from '@/blocks/feature';
import { Hero17 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import {
  about3,
  benefit,
  clientele,
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
  testimonial
} from './data';
import { Gallery4 } from '@/blocks/gallery';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
  useDataThemeMode();

  return (
    <>
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
      <Gallery4 {...gallery4} />
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
          // { importFunc: () => import('@/blocks/pricing').then((module) => ({ default: module.Pricing9 })), props: newPricing }
        ]}
        offset="200px"
      />

      {/* <LazySection
        sections={
          [
            // { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta5 })), props: cta5 },
            // { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
          ]
        }
        offset="200px"
      /> */}
    </>
  );
}
