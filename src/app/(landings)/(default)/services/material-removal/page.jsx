import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Material = dynamic(() => import('@/views/landings/default/material'));

/***************************  METADATA - CONTACT  ***************************/

// export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function MaterialPage() {
  return <Material />;
}
