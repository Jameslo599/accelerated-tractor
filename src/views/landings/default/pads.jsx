'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { clearingGallery, contactUS, drivewayGallery, driveways, padGallery } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { clearing, pads } from './data/blog-detail';

/***************************  PAGE - ABOUT  ***************************/

export default function Pads() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: pads
          },
          { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: padGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
