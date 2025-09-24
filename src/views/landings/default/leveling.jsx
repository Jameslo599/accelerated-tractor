'use client';

// @project
import LazySection from '@/components/LazySection';

// @data
import { clearingGallery, contactUS, drivewayGallery, driveways, levelGallery } from './data';
import ContactUs6 from '@/components/contact-us/ContactUs6';
import { clearing, leveling } from './data/blog-detail';

/***************************  PAGE - ABOUT  ***************************/

export default function Leveling() {
  return (
    <>
      <LazySection
        sections={[
          {
            importFunc: () => import('@/blocks/blog-detail').then((module) => ({ default: module.BlogDetails })),
            props: leveling
          },
          { importFunc: () => import('@/blocks/gallery').then((module) => ({ default: module.Gallery1 })), props: levelGallery }
        ]}
        offset="200px"
      />
      <ContactUs6 {...contactUS} />
    </>
  );
}
