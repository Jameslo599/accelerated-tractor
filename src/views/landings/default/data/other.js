// @asssets
const imagePrefix = '/assets/images/presentation';

// @project
import branding from '@/branding.json';
import { SECTION_PATH } from '@/path';

export const other = {
  heading: `OUR SERVICES`,
  description:
    'Our expert site management contractors use state-of-the-art equipment to prepare your land for development, maintenance, or any project you have in mind. We deliver fast, efficient, and reliable results — giving you a clean slate to build your vision.',
  primaryBtn: { children: 'CALL US NOW', href: 'tel:+2145325700' },
  sections: [
    {
      animationDelay: 0.2,
      title: 'Driveways',
      image: { light: `${imagePrefix}/driveways2.webp`, dark: `${imagePrefix}/driveways2.webp` },
      link: `${SECTION_PATH}/driveways`
    },
    {
      animationDelay: 0.3,
      title: 'Grading',
      image: { light: `${imagePrefix}/grading2.webp`, dark: `${imagePrefix}/grading2.webp` },
      link: `${SECTION_PATH}/grading`
    },
    {
      animationDelay: 0.4,
      title: 'RV Pads',
      image: { light: `${imagePrefix}/rv3.webp`, dark: `${imagePrefix}/rv3.webp` },
      link: `${SECTION_PATH}/rv-pads`
    },
    {
      animationDelay: 0.2,
      title: 'Mowing',
      image: { light: `${imagePrefix}/mowing2.webp`, dark: `${imagePrefix}/mowing2.webp` },
      link: `${SECTION_PATH}/mowing`
    },
    {
      animationDelay: 0.3,
      title: 'Building Pads',
      image: { light: `${imagePrefix}/building-pads2.webp`, dark: `${imagePrefix}/building-pads2.webp` },
      link: `${SECTION_PATH}/building-pads`
    },
    {
      animationDelay: 0.4,
      title: 'Arenas',
      image: { light: `${imagePrefix}/arena.webp`, dark: `${imagePrefix}/arena.webp` },
      link: `${SECTION_PATH}/arenas`
    },
    {
      animationDelay: 0.4,
      title: 'Excavation',
      image: { light: `${imagePrefix}/excavation2.webp`, dark: `${imagePrefix}/excavation2.webp` },
      link: `${SECTION_PATH}/excavation`
    },
    {
      animationDelay: 0.4,
      title: 'Demolition',
      image: { light: `${imagePrefix}/demolition2.webp`, dark: `${imagePrefix}/demolition2.webp` },
      link: `${SECTION_PATH}/demolition`
    },
    {
      animationDelay: 0.4,
      title: 'Leveling',
      image: { light: `${imagePrefix}/leveling2.webp`, dark: `${imagePrefix}/leveling2.webp` },
      link: `${SECTION_PATH}/leveling`
    },
    {
      animationDelay: 0.4,
      title: 'Material Removal',
      image: { light: `${imagePrefix}/material-removal2.webp`, dark: `${imagePrefix}/material-removal2.webp` },
      link: `${SECTION_PATH}/material-removal`
    },
    {
      animationDelay: 0.4,
      title: 'Tower Pad & Drive',
      image: { light: `${imagePrefix}/t6.webp`, dark: `${imagePrefix}/t6.webp` },
      link: `${SECTION_PATH}/tower-pad-drive`
    },
    {
      animationDelay: 0.4,
      title: 'Drainage',
      image: { light: `${imagePrefix}/drainage.webp`, dark: `${imagePrefix}/drainage.webp` },
      link: `${SECTION_PATH}/drainage`
    }
  ]
};
