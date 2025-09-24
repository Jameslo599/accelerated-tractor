import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Driveways = dynamic(() => import('@/views/landings/default/driveways'));

/***************************  METADATA - CONTACT  ***************************/

// export const metadata = { ...SEO_CONTENT.contactUs };

/***************************  PAGE - CONTACT  ***************************/

export default function DrivewaysPage() {
  return <Driveways />;
}
