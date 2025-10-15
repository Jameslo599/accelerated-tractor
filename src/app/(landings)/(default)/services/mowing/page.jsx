import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Mowing = dynamic(() => import('@/views/landings/default/mowing'));

/***************************  METADATA - CONTACT  ***************************/

export const metadata = { ...SEO_CONTENT.mowing };

/***************************  PAGE - CONTACT  ***************************/

export default function MowingPage() {
  return <Mowing />;
}
