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
  driveways: path([MARKET_PATH, 'driveways']),
  grading: path([MARKET_PATH, 'grading']),
  clearing: path([MARKET_PATH, 'clearing']),
  mowing: path([MARKET_PATH, 'mowing']),
  buildingPads: path([MARKET_PATH, 'building-pads']),
  arenas: path([MARKET_PATH, 'arenas']),
  excavation: path([MARKET_PATH, 'excavation']),
  demolition: path([MARKET_PATH, 'demolition']),
  leveling: path([MARKET_PATH, 'leveling']),
  materialRemoval: path([MARKET_PATH, 'material-removal']),
  fenceLineClearing: path([MARKET_PATH, 'fence-line-clearing']),
  privacyPolicyPage: '/privacy-policy',
  termsConditionPage: '/terms-condition'
};

export const PRIVIEW_PATH = {
  comingSoon: path([BLOCK_PATH, 'coming-soon']),
  error404: path([BLOCK_PATH, 'error404']),
  error500: path([BLOCK_PATH, 'error500']),
  underMaintenance: path([BLOCK_PATH, 'under-maintenance'])
};
