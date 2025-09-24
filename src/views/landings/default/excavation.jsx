'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { clearingGallery, contactUS, drivewayGallery, driveways, excavationGallery } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { clearing, excavation } from './data/blog-detail';

/***************************  PAGE - ABOUT  ***************************/

export default function Excavation() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: excavation
          },
          { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: excavationGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
