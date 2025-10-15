import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Residential = dynamic(() => import('@/views/landings/default/residential'));

/***************************  METADATA - CONTACT  ***************************/

export const metadata = { ...SEO_CONTENT.residential };

/***************************  PAGE - CONTACT  ***************************/

export default function ResidentialPage() {
  return <Residential />;
}
