import { Avatar, Box, IconButton, Stack } from '@mui/material';
import React, { useState } from 'react'
import { useAppNavigate } from '../../../hooks/useAppNavigate';
import GoogleImage from '../../Search/GoogleImage';
import GoogleSearchBar from '../../Search/GoogleSearchBar';
import RainbowEffectAvatarLayout from '../../../shared/components/RainbowEffectAvatarLayout';
import GooglePortfolioPopover from '../../../shared/GooglePortfolioPopover';
import ShortcutContent from '../Shortcut/ShortcutContent';
import ProfileContent from '../ProfileModal/ProfileContent';

const MobileGoogleNavBar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openShortcutPopover, setOpenShortcut] = useState<boolean>(false);
  const [openProfilePopover, setOpenProfile] = useState<boolean>(false);
  const { isCVPage } = useAppNavigate();
  return (
    <Stack
      className='mobile-google-navbar'
      alignItems={ "center"}
      justifyContent={"flex-end"}
      direction={"column"}
      sx={{
        position: 'relative',
        padding: 1,
      }}
    >
        {isCVPage && <Box sx={{ position: 'absolute', left: 8, top: 8 }}>
          <GoogleImage />
        </Box>}
      <Stack direction={'row'} spacing={2} alignItems={'center'} sx={{ width: '100%', justifyContent: 'flex-end' }}>
        <IconButton
          onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                  setOpenShortcut(true);
          }}
        >
          <span className="material-icons">apps</span>
        </IconButton>
          <IconButton
            onClick={(event) => {
              setProfileAnchorEl(event.currentTarget as HTMLButtonElement);
                      setOpenProfile(true);
            }}
            sx={{ padding: 0 }}
            >
            <RainbowEffectAvatarLayout>
                <Avatar
                src='/images/default/AvatarImageSmaller.png'
                sx={{
                    cursor: 'pointer'
                }}
                />
            </RainbowEffectAvatarLayout>
          </IconButton>
      </Stack>
      {
        isCVPage &&
          <Stack sx={{ width: '100%' }} className='logo-search-container' direction={'row'} alignItems={'center'}>
            <GoogleSearchBar />
          </Stack>
      }
      <GooglePortfolioPopover
        id={openShortcutPopover ? 'shortcut-popover' : undefined}
        open={openShortcutPopover}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null)
          setOpenShortcut(false)
        }}
        styleVersion='shortcut'
      >
        <ShortcutContent closePopover={() => setOpenShortcut(false)}/>
      </GooglePortfolioPopover>
      <GooglePortfolioPopover
        id={openProfilePopover ? 'profile-popover' : undefined}
        open={openProfilePopover}
        anchorEl={profileAnchorEl}
        onClose={() => {
          setProfileAnchorEl(null)
          setOpenProfile(false)
        }}
        styleVersion='profile'
      >
        <ProfileContent />
      </GooglePortfolioPopover>
    </Stack>
  )
}

export default MobileGoogleNavBar
