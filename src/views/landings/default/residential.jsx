'use client';

// @project
import { Feature7 } from '@/blocks/feature';
import LazySection from '@/components/LazySection';
import SectionHero from '@/components/SectionHero';

// @data
import { contactUS, hero10, gallery4, blogDetail } from './data';
import { Hero10 } from '@/blocks/hero';
import ContactUs6 from '@/components/contact-us/ContactUs6';

/***************************  PAGE - ABOUT  ***************************/

export default function Residential() {
  return (
    <>
      {/* <Hero10 {...hero10} /> */}

      <LazySection
        sections={[
          // { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: gallery4 },
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: blogDetail
          }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
