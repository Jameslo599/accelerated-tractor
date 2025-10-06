import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Commercial = dynamic(() => import('@/views/landings/default/commercial'));

/***************************  METADATA - CONTACT  ***************************/

// export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function CommercialPage() {
  return <Commercial />;
}
