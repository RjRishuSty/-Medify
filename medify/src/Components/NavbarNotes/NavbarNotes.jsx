import React from 'react'
import Styles from './NavbarNotes.module.css';
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material';
const NavbarNotes = () => {
  return (
    <Box component="div" className={Styles.brandNotes}>
        <Typography className={Styles.note}> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</Typography>
    </Box>
  )
}

export default NavbarNotes
