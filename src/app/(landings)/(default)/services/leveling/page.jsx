import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Leveling = dynamic(() => import('@/views/landings/default/leveling'));

/***************************  METADATA - CONTACT  ***************************/

// export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function LevelingPage() {
  return <Leveling />;
}
