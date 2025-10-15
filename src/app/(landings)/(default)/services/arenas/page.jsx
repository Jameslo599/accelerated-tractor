import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Arenas = dynamic(() => import('@/views/landings/default/arenas'));

/***************************  METADATA - CONTACT  ***************************/

export const metadata = { ...SEO_CONTENT.arenas };

/***************************  PAGE - CONTACT  ***************************/

export default function ArenasPage() {
  return <Arenas />;
}
