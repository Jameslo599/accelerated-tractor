import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Clearing = dynamic(() => import('@/views/landings/default/clearing'));

/***************************  METADATA - CONTACT  ***************************/

// export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function ClearingPage() {
  return <Clearing />;
}
