// @project
import { PAGE_PATH } from '@/path';

const baseUrl = process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000';

const routes = [
  { url: ``, priority: 1 },
  { url: PAGE_PATH.privacyPolicyPage, priority: 0.7 },
  { url: PAGE_PATH.underMaintenance, priority: 0.7 },
  { url: PAGE_PATH.commercialPage, priority: 0.7 },
  { url: PAGE_PATH.residentialPage, priority: 0.7 },
  { url: PAGE_PATH.driveways, priority: 0.7 },
  { url: PAGE_PATH.grading, priority: 0.7 },
  { url: PAGE_PATH.clearing, priority: 0.7 },
  { url: PAGE_PATH.mowing, priority: 0.7 },
  { url: PAGE_PATH.buildingPads, priority: 0.7 },
  { url: PAGE_PATH.arenas, priority: 0.7 },
  { url: PAGE_PATH.excavation, priority: 0.7 },
  { url: PAGE_PATH.demolition, priority: 0.7 },
  { url: PAGE_PATH.leveling, priority: 0.7 },
  { url: PAGE_PATH.materialRemoval, priority: 0.7 },
  { url: PAGE_PATH.fenceLineClearing, priority: 0.7 },
  { url: PAGE_PATH.drainage, priority: 0.7 },
  { url: PAGE_PATH.termsConditionPage, priority: 0.7 },
  { url: PAGE_PATH.contactPage, priority: 0.5 },
  { url: PAGE_PATH.error404, priority: 0.5 },
  { url: PAGE_PATH.error500, priority: 0.5 },
  { url: PAGE_PATH.comingSoon, priority: 0.5 }
];

/***************************  SITEMAP  ***************************/

export default function sitemap() {
  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    priority: route.priority
  }));
}
