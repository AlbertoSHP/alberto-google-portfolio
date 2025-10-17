import { Avatar, IconButton, Stack } from '@mui/material';
import { useState } from 'react'
import GoogleImage from '../Search/GoogleImage';
import GoogleSearchBar from '../Search/GoogleSearchBar';
import RainbowEffectAvatarLayout from '../../shared/components/RainbowEffectAvatarLayout';
import GooglePortfolioPopover from '../../shared/GooglePortfolioPopover';
import ShortcutContent from './Shortcut/ShortcutContent';
import ProfileContent from './ProfileModal/ProfileContent';
import { useAppNavigate } from '../../hooks/useAppNavigate';
import { useScroll } from '../../hooks/useScroll';
import './GoogleNavBar.scss';

const StandardGoogleNavBar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openShortcutPopover, setOpenShortcut] = useState<boolean>(false);
  const [openProfilePopover, setOpenProfile] = useState<boolean>(false);
  const { isCVPage } = useAppNavigate();
  const { isNavbarLimitReached } = useScroll();
  
  return (
    <Stack
      className='standard-google-navbar'
      alignItems={ "center"}
      justifyContent={isCVPage ? "space-between" : "flex-end"}
      direction={"row"}
      sx={{
        padding: 1,
        ...(
          isNavbarLimitReached && isCVPage && {
            position: 'fixed',
            top: 0,
            margin: "0 !important",
            width: '100%',
            left: 0,
            backgroundColor: '#fff',
            boxShadow: '0px 2px 8px 1px rgba(31, 31, 31, 0.08)',
            zIndex: 1000,
            background: '#cedfed'
          }
        )
      }}
    >
      {
        isCVPage &&
          <Stack className='logo-search-container' direction={'row'} alignItems={'center'}>
            <GoogleImage />
            <GoogleSearchBar />
          </Stack>
      }
      <Stack direction={'row'} spacing={2} alignItems={'center'}>
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

export default StandardGoogleNavBar
