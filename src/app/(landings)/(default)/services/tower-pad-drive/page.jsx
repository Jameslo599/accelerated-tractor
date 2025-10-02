import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Tower = dynamic(() => import('@/views/landings/default/tower'));

/***************************  METADATA - CONTACT  ***************************/

// export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function TowerPage() {
  return <Tower />;
}
