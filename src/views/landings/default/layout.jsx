'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';

// @project
import { Footer } from '@/blocks/footer';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';

// @data
import { navbar } from './data';

// @types

/***************************  LAYOUT - MAIN  ***************************/

export default function MainLayout({ children }) {
  return (
    <>
      {/* header section */}
      <Box>
        <Navbar10>
          <NavbarContent10 {...navbar} />
        </Navbar10>
      </Box>
      {/* app/(landing)/* */}
      {children}
      {/* footer section */}
      <Footer />
    </>
  );
}

MainLayout.propTypes = { children: PropTypes.any };
