'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { clearingGallery, contactUS, demoGallery, drivewayGallery, driveways } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { clearing, demolition } from './data/blog-detail';

/***************************  PAGE - ABOUT  ***************************/

export default function Demolition() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: demolition
          },
          { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: demoGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
