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

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

/***************************  MEGAMENU 4 - FOOTER  ***************************/

function footerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">Infinite possibilities</Typography>}
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5" sx={{ color: 'primary.overlay' }}>
            We can take your project from an idea to the marketplace.
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.reverse' }}>
          We can package anything and everything, while completely satisfying our clients, markets, people, and the planet.
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
            The Right Package Makes All the Difference
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.reverse' }}>
          Choosing the perfect packaging solution is essential not only for your product’s success but also for creating an exceptional
          experience for your customers. Discover how we empower you to achieve both.
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
        link: { href: PAGE_PATH.underMaintenance, ...linkProps }
      },
      { title: 'Grading', image: '/assets/images/graphics/default/grading.webp', link: { href: PAGE_PATH.underMaintenance, ...linkProps } },
      {
        title: 'Clearing',
        image: '/assets/images/graphics/default/clearing.webp',
        link: { href: PAGE_PATH.underMaintenance, ...linkProps }
      },
      {
        title: 'Mowing',
        image: '/assets/images/graphics/default/mowing.webp',
        link: { href: PAGE_PATH.underMaintenance, ...linkProps }
      },
      {
        title: 'Building Pads',
        image: '/assets/images/graphics/default/building-pads.webp',
        link: { href: PAGE_PATH.underMaintenance, ...linkProps }
      },
      {
        title: 'Arenas',
        image: '/assets/images/graphics/default/arena.webp',
        link: { href: PAGE_PATH.underMaintenance, ...linkProps }
      },
      {
        title: 'Excavation',
        image: '/assets/images/graphics/default/excavation.webp',
        link: { href: PAGE_PATH.underMaintenance, ...linkProps }
      },
      {
        title: 'Demolition',
        image: '/assets/images/graphics/default/demolition.webp',
        link: { href: PAGE_PATH.underMaintenance, ...linkProps }
      },
      {
        title: 'Leveling',
        image: '/assets/images/graphics/default/leveling.webp',
        link: { href: PAGE_PATH.underMaintenance, ...linkProps }
      },
      {
        title: 'Material Removal',
        image: '/assets/images/graphics/default/material-removal.webp',
        link: { href: PAGE_PATH.underMaintenance, ...linkProps }
      },
      {
        title: 'Fence Line Clearing',
        image: '/assets/images/graphics/default/fence-line-clearing.webp',
        link: { href: PAGE_PATH.underMaintenance, ...linkProps }
      }
    ],
    footerData: footerData()
  }
};

/***************************  NAVBAR - MEGAMENU PAGES  ***************************/

export const solutionsMegamenu = {
  id: 'pages',
  title: 'Industries',
  megaMenu: {
    type: MegaMenuType.MEGAMENU5,
    toggleBtn: { children: 'Industries' },
    popperWidth: 860,
    menuItems: [
      {
        title: 'Industries',
        itemsList: [
          { title: 'Residential', link: { href: PAGE_PATH.underMaintenance, ...linkProps } },
          { title: 'Commercial', link: { href: PAGE_PATH.underMaintenance, ...linkProps } }
        ]
      }
    ],
    bannerData: bannerData()
  }
};
