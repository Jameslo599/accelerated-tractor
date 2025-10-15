// @project
import branding from '@/branding.json';
import { PAGE_PATH, SECTION_PATH } from '@/path';

/***************************  SEO METADATA - MAIN LAYOUT  ***************************/

const title = `${branding.brandName} ${branding.title}`;
const description = `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`;

const ogCommonMetadata = {
  locale: 'en_US',
  type: 'website',
  siteName: `${branding.brandName}`,
  images: '/assets/images/metadata/og.webp' // recommended dimensions of 1200x630
};

export const mainMetadata = {
  title: {
    template: `%s | ${title}`,
    default: title // a default is required when creating a template
  },
  description,
  applicationName: title,
  keywords: [
    'site preparation Little Elm',
    `${branding.brandName}`,
    'land clearing Little Elm',
    'excavation contractors Little Elm',
    'grading services Little Elm',
    'property maintenance Little Elm'
  ],
  creator: `${branding.company.name}`,
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title,
    description,
    url: '/',
    ...ogCommonMetadata
  }
};

/***************************  SEO METADATA - SECTIONS  ***************************/

const sectionCommonMeta = {
  title: 'Services',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const commercialPageCommonMeta = {
  title: 'Commercial Services',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const residentialPageCommonMeta = {
  title: 'Residential Services',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const drivewaysCommonMeta = {
  title: 'Driveways',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const gradingCommonMeta = {
  title: 'Grading',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const rvPadsCommonMeta = {
  title: 'RV Pads',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const mowingCommonMeta = {
  title: 'Mowing',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const buildingPadsCommonMeta = {
  title: 'Building Pads',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const arenasCommonMeta = {
  title: 'Arenas',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const excavationCommonMeta = {
  title: 'Excavation',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const demolitionCommonMeta = {
  title: 'Demolition',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const levelingCommonMeta = {
  title: 'Leveling',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const materialRemovalCommonMeta = {
  title: 'Material Removal',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const towerPadDriveCommonMeta = {
  title: 'Tower Pad Drive',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const drainageCommonMeta = {
  title: 'Drainage',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};
const termsConditionPageCommonMeta = {
  title: 'Terms and Conditions',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};

const comingSoonPageCommonMeta = {
  title: 'Coming soon',
  description:
    'Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.'
};

const privacyPolicyCommonMeta = {
  title: 'Privacy Policy',
  description: `${branding.brandName} privacy policy page outlines our commitment to data protection, detailing how user information is collected, stored, and managed to ensure transparency and build trust with your audience.`
};

const contactUsCommonMeta = {
  title: 'Contact Us',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};

const error404PageCommonMeta = { title: 'Error 404', description: 'Error 404' };
const error500PageCommonMeta = { title: 'Error 500', description: 'Error 500' };

const underMaintenanceCommonMeta = {
  title: 'Under Maintenance',
  description: `Professional site preparation and maintenance services near you for residential, commercial, and industrial projects in Little Elm, TX. From land clearing and grading to erosion control and routine upkeep, we deliver reliable, efficient, and cost-effective solutions to keep your property construction-ready and well-maintained.`
};

export const SEO_CONTENT = {
  section: { ...sectionCommonMeta, openGraph: { ...sectionCommonMeta, ...ogCommonMetadata, url: SECTION_PATH } },
  commercial: {
    ...commercialPageCommonMeta,
    openGraph: { ...commercialPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.commercialPage }
  },
  residential: {
    ...residentialPageCommonMeta,
    openGraph: { ...residentialPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.residentialPage }
  },
  driveways: {
    ...drivewaysCommonMeta,
    openGraph: { ...drivewaysCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.driveways }
  },
  grading: {
    ...gradingCommonMeta,
    openGraph: { ...gradingCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.grading }
  },
  rv: {
    ...rvPadsCommonMeta,
    openGraph: { ...rvPadsCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.clearing }
  },
  mowing: {
    ...mowingCommonMeta,
    openGraph: { ...mowingCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.mowing }
  },
  buildingPads: {
    ...buildingPadsCommonMeta,
    openGraph: { ...buildingPadsCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.buildingPads }
  },
  arenas: {
    ...arenasCommonMeta,
    openGraph: { ...arenasCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.arenas }
  },
  excavation: {
    ...excavationCommonMeta,
    openGraph: { ...excavationCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.excavation }
  },
  demolition: {
    ...demolitionCommonMeta,
    openGraph: { ...demolitionCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.demolition }
  },
  leveling: {
    ...levelingCommonMeta,
    openGraph: { ...levelingCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.leveling }
  },
  materialRemoval: {
    ...materialRemovalCommonMeta,
    openGraph: { ...materialRemovalCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.materialRemoval }
  },
  towerPad: {
    ...towerPadDriveCommonMeta,
    openGraph: { ...towerPadDriveCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.fenceLineClearing }
  },
  drainage: {
    ...drainageCommonMeta,
    openGraph: { ...drainageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.drainage }
  },
  termsCondition: {
    ...termsConditionPageCommonMeta,
    openGraph: { ...termsConditionPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.termsConditionPage }
  },

  comingSoonPage: {
    ...comingSoonPageCommonMeta,
    openGraph: { ...comingSoonPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.comingSoon }
  },
  privacyPolicy: {
    ...privacyPolicyCommonMeta,
    openGraph: { ...privacyPolicyCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.privacyPolicyPage }
  },
  contactUs: { ...contactUsCommonMeta, openGraph: { ...contactUsCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.contactPage } },
  error404Page: { ...error404PageCommonMeta, openGraph: { ...error404PageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.error404 } },
  error500Page: { ...error500PageCommonMeta, openGraph: { ...error500PageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.error500 } },
  underMaintenance: {
    ...underMaintenanceCommonMeta,
    openGraph: { ...underMaintenanceCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.underMaintenance }
  }
};
