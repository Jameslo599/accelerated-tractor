import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Excavation = dynamic(() => import('@/views/landings/default/excavation'));

/***************************  METADATA - CONTACT  ***************************/

export const metadata = { ...SEO_CONTENT.excavation };

/***************************  PAGE - CONTACT  ***************************/

export default function ExcavationPage() {
  return <Excavation />;
}
