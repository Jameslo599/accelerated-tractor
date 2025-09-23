'use client';
import PropTypes from 'prop-types';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ProfileGroup from '@/components/cards/profile-card/ProfileGroup1';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  HERO - 10  ***************************/

export default function Hero10({ chipTitle, headLine, captionLine, primaryBtn, secondaryBtn, image }) {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.1
        }}
      >
        <GraphicsCard sx={{ position: 'relative', backgroundColor: 'primary.light' }}>
          <Stack>
            <GraphicsImage
              {...{ image }}
              sx={{
                height: { xs: 400, sm: 533, md: 742 },
                backgroundSize: 'cover',
                position: 'relative'
              }}
            >
              <Box sx={{ width: 1, height: 1, background: alpha(theme.palette.grey[700], 0.5) }} />
            </GraphicsImage>
          </Stack>
          <Box
            sx={{
              mb: { sm: 4, md: 8 },
              mt: { xs: 2, sm: 0 },
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <Stack sx={{ gap: { xs: 1.5, md: 2 } }}>
              <Typography variant="h1" sx={{ color: theme.palette.grey[300], maxWidth: { sm: 370, md: 500 } }}>
                {headLine}
              </Typography>
            </Stack>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

Hero10.propTypes = {
  chipTitle: PropTypes.string,
  headLine: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  captionLine: PropTypes.string,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any,
  image: PropTypes.any,
  reviewData: PropTypes.object
};
