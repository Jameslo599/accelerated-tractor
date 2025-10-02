function path(urlChunks) {
  return urlChunks.join('/');
}

export const SECTION_PATH = '/services';
export const MARKET_PATH = '/industries';
export const ADMIN_PATH = '#';
export const BUY_NOW_URL = '/contact';
export const FREEBIES_URL = '#';
export const DOCS_URL = '#';
const BLOCK_PATH = '/blocks';

export const LANDING_PATH = {
  default: '/'
};

export const PAGE_PATH = {
  comingSoon: path([SECTION_PATH, 'coming-soon']),
  error404: path([SECTION_PATH, 'error404']),
  error500: path([SECTION_PATH, 'error500']),
  underMaintenance: path([MARKET_PATH, 'under-maintenance']),

  // pages path
  // aboutPage: '/about',
  // careerPage: '/career',
  contactPage: '/contact',
  faqPage: '/faq',
  commercialPage: path([MARKET_PATH, 'commercial']),
  residentialPage: path([MARKET_PATH, 'residential']),
  driveways: path([SECTION_PATH, 'driveways']),
  grading: path([SECTION_PATH, 'grading']),
  clearing: path([SECTION_PATH, 'rv-pads']),
  mowing: path([SECTION_PATH, 'mowing']),
  buildingPads: path([SECTION_PATH, 'building-pads']),
  arenas: path([SECTION_PATH, 'arenas']),
  excavation: path([SECTION_PATH, 'excavation']),
  demolition: path([SECTION_PATH, 'demolition']),
  leveling: path([SECTION_PATH, 'leveling']),
  materialRemoval: path([SECTION_PATH, 'material-removal']),
  fenceLineClearing: path([SECTION_PATH, 'tower-pad-drive']),
  drainage: path([SECTION_PATH, 'drainage']),
  privacyPolicyPage: '/privacy-policy',
  termsConditionPage: '/terms-condition'
};

export const PRIVIEW_PATH = {
  comingSoon: path([BLOCK_PATH, 'coming-soon']),
  error404: path([BLOCK_PATH, 'error404']),
  error500: path([BLOCK_PATH, 'error500']),
  underMaintenance: path([BLOCK_PATH, 'under-maintenance'])
};
