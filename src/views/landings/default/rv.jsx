'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { rvGallery, contactUS } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { rv } from './data/blog-detail';

/***************************  PAGE - ABOUT  ***************************/

export default function RV() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: rv
          },
          { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: rvGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
