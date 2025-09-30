'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { contactUS, drainageGallery } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { drainage } from './data/blog-detail';

/***************************  PAGE - ABOUT  ***************************/

export default function Drainage() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: drainage
          },
          { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: drainageGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
