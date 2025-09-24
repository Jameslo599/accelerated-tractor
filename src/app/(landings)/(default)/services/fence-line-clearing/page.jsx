import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Fence = dynamic(() => import('@/views/landings/default/fence'));

/***************************  METADATA - CONTACT  ***************************/

// export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function FencePage() {
  return <Fence />;
}
