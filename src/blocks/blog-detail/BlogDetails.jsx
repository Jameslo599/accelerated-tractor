import PropTypes from 'prop-types';
// @next
import NextLink from 'next/link';

// @mui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileCard2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

import { Avatar, Link } from '@mui/material';

/*************************** SECTIONS - BLOG DETAILS ***************************/

export default function BlogDetails({ date, heading, mainImage, title, description, subTitle, blogDetails, close }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <Stack sx={{ gap: { xs: 2, sm: 2.25, md: 2.5 } }}>
          <Typography variant="subtitle1" sx={{ color: 'grey.700' }}>
            {date}
          </Typography>
          <Typography variant="h2" sx={{ width: { xs: '100%', md: '85%' } }}>
            {heading}
          </Typography>
        </Stack>

        <GraphicsCard>
          <GraphicsImage image={mainImage} sx={{ height: { xs: 212, sm: 332, md: 600 } }} />
        </GraphicsCard>

        <Stack sx={{ gap: { xs: 2, sm: 3, md: 4 } }}>
          <Box>
            <Typography variant="h3">{title}</Typography>
            <Typography sx={{ color: 'text.secondary', mt: 2 }}>{description}</Typography>
          </Box>
          <Box>
            <Typography variant="h3" sx={{ mb: 2 }}>
              {subTitle}
            </Typography>

            {blogDetails.map((detail, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="h4" sx={{ mb: { xs: 1, sm: 1.5 } }}>
                  {index + 1}. {detail.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{detail.content}</Typography>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                  {detail.heading1}
                </Typography>

                {detail.dotList && (
                  <List>
                    {detail.dotList.map((item, index) => (
                      <ListItem key={index} alignItems="flex-start" sx={{ py: 0.2 }}>
                        <ListItemIcon sx={{ minWidth: 20 }}>
                          <Box sx={{ width: 6, height: 6, bgcolor: 'secondary.main', borderRadius: '50%' }} />
                        </ListItemIcon>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                          <strong>{item.title}</strong> {item.description}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                )}

                <Typography sx={{ color: 'text.secondary' }}>
                  {detail.heading2}
                  <strong>{detail.title1}</strong>
                </Typography>
              </Box>
            ))}
          </Box>
          <Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {close}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

BlogDetails.propTypes = {
  date: PropTypes.any,
  heading: PropTypes.any,
  image: PropTypes.any,
  socialIcons: PropTypes.any,
  mainImage: PropTypes.any,
  title: PropTypes.any,
  description: PropTypes.any,
  subTitle: PropTypes.any,
  blogDetails: PropTypes.any
};
