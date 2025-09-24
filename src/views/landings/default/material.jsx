'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { clearingGallery, contactUS, drivewayGallery, driveways, removalGallery } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { clearing, material } from './data/blog-detail';

/***************************  PAGE - ABOUT  ***************************/

export default function Material() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: material
          },
          { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: removalGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
