import { Popover } from '@mui/material';
import React from 'react'

interface GooglePortfolioPopoverProps {
  id: string | undefined;
  anchorEl: HTMLButtonElement | null;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  styleVersion: 'shortcut' | 'profile';
}

const GooglePortfolioPopover = ({ id, anchorEl, open, onClose, children, styleVersion }: GooglePortfolioPopoverProps) => {
  return (
    <Popover
      sx={{
        ".MuiPaper-root": {
          borderRadius: "28px",
          backgroundColor: '#e9eef6',
          ...(styleVersion === 'shortcut' && { padding: "8px" })
        }
      }}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      {children}
    </Popover>
  )
}

export default GooglePortfolioPopover
