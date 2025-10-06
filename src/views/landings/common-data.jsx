// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';
import { MegaMenuType } from '@/enum';
import { ADMIN_PATH, DOCS_URL, PAGE_PATH, PRIVIEW_PATH } from '@/path';

const linkProps = { rel: 'noopener noreferrer' };

/***************************  MEGAMENU 4 - FOOTER  ***************************/

function footerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">Our Mission</Typography>}
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5" sx={{ color: 'primary.overlay' }}>
            Serving Our Communities
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.reverse' }}>
          Whether you live in Dallas, Fort Worth, or one of the surrounding areas that we cover, Accelerated Tractor Services will deliver
          the results you’re looking for!
        </Typography>
      </Stack>
    </Stack>
  );
}

/***************************  MEGAMENU 5 - BANNER  ***************************/

function bannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">Get it right the first time</Typography>}
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5" sx={{ color: 'primary.overlay' }}>
            Exceeding Your Expectations in Every Aspect
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.reverse' }}>
          We promise to always give our very best when it comes to each and every mowing project we work on. No matter what your property
          needs, you can trust Accelerated Tractor Services to get the job done right.
        </Typography>
      </Stack>
    </Stack>
  );
}

/***************************  NAVBAR - MEGAMENU PAGES  ***************************/

export const pagesMegamenu = {
  id: 'pages',
  title: 'Services',
  megaMenu: {
    type: MegaMenuType.MEGAMENU4,
    toggleBtn: { children: 'Services' },
    popperWidth: { xs: 860, lg: 1160, xl: 1496 },
    menuItems: [
      {
        title: 'Driveways',
        image: '/assets/images/graphics/default/driveways.webp',
        link: { href: PAGE_PATH.driveways, ...linkProps }
      },
      { title: 'Grading', image: '/assets/images/graphics/default/grading.webp', link: { href: PAGE_PATH.grading, ...linkProps } },
      {
        title: 'RV Pads',
        image: '/assets/images/graphics/default/rv-pad/rv3.webp',
        link: { href: PAGE_PATH.clearing, ...linkProps }
      },
      {
        title: 'Mowing',
        image: '/assets/images/graphics/default/mowing.webp',
        link: { href: PAGE_PATH.mowing, ...linkProps }
      },
      {
        title: 'Building Pads',
        image: '/assets/images/graphics/default/building-pads.webp',
        link: { href: PAGE_PATH.buildingPads, ...linkProps }
      },
      {
        title: 'Arenas',
        image: '/assets/images/graphics/default/arena.webp',
        link: { href: PAGE_PATH.arenas, ...linkProps }
      },
      {
        title: 'Excavation',
        image: '/assets/images/graphics/default/excavation.webp',
        link: { href: PAGE_PATH.excavation, ...linkProps }
      },
      {
        title: 'Demolition',
        image: '/assets/images/graphics/default/demolition.webp',
        link: { href: PAGE_PATH.demolition, ...linkProps }
      },
      {
        title: 'Leveling',
        image: '/assets/images/graphics/default/leveling.webp',
        link: { href: PAGE_PATH.leveling, ...linkProps }
      },
      {
        title: 'Material Removal',
        image: '/assets/images/graphics/default/material-removal.webp',
        link: { href: PAGE_PATH.materialRemoval, ...linkProps }
      },
      {
        title: 'Tower Pad & Drive',
        image: '/assets/images/graphics/default/tower-pad-drive/t6.webp',
        link: { href: PAGE_PATH.fenceLineClearing, ...linkProps }
      },
      {
        title: 'Drainage',
        image: '/assets/images/graphics/default/drainage/drainage.webp',
        link: { href: PAGE_PATH.drainage, ...linkProps }
      }
    ],
    footerData: footerData()
  }
};

/***************************  NAVBAR - MEGAMENU PAGES  ***************************/

export const solutionsMegamenu = {
  id: 'pages',
  title: 'Divisions',
  megaMenu: {
    type: MegaMenuType.MEGAMENU5,
    toggleBtn: { children: 'Divisions' },
    popperWidth: 860,
    menuItems: [
      {
        title: 'Divisions',
        itemsList: [
          { title: 'Residential', link: { href: PAGE_PATH.residentialPage, ...linkProps } },
          { title: 'Commercial', link: { href: PAGE_PATH.commercialPage, ...linkProps } }
        ]
      }
    ],
    bannerData: bannerData()
  }
};
