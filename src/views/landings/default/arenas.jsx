'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { clearingGallery, contactUS, drivewayGallery, driveways } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { arenas, clearing } from './data/blog-detail';

/***************************  PAGE - ABOUT  ***************************/

export default function Arenas() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: arenas
          }
          // { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: clearingGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
