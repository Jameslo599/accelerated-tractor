import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const RV = dynamic(() => import('@/views/landings/default/rv'));

/***************************  METADATA - CONTACT  ***************************/

// export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function RVPage() {
  return <RV />;
}
