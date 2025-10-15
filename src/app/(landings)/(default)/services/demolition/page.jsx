import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Demolition = dynamic(() => import('@/views/landings/default/demolition'));

/***************************  METADATA - CONTACT  ***************************/

export const metadata = { ...SEO_CONTENT.demolition };

/***************************  PAGE - CONTACT  ***************************/

export default function DemolitionPage() {
  return <Demolition />;
}
