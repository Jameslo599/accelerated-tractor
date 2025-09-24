'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { contactUS, drivewayGallery, driveways } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';

/***************************  PAGE - ABOUT  ***************************/

export default function Driveways() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: driveways
          },
          { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: drivewayGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
