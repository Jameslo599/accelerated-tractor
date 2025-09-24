'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { contactUS, drivewayGallery, driveways, mowingGallery } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { mowing } from './data/blog-detail';

/***************************  PAGE - ABOUT  ***************************/

export default function Mowing() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: mowing
          },
          { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: mowingGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
