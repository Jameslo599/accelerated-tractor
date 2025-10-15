import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Drainage = dynamic(() => import('@/views/landings/default/drainage'));

/***************************  METADATA - CONTACT  ***************************/

export const metadata = { ...SEO_CONTENT.drainage };

/***************************  PAGE - CONTACT  ***************************/

export default function DrainagePage() {
  return <Drainage />;
}
