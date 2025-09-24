import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Pads = dynamic(() => import('@/views/landings/default/pads'));

/***************************  METADATA - CONTACT  ***************************/

// export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function PadsPage() {
  return <Pads />;
}
