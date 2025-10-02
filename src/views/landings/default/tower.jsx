'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { towerGallery, contactUS } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { tower } from './data/blog-detail';

/***************************  PAGE - ABOUT  ***************************/

export default function Tower() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: tower
          },
          { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: towerGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
