import { useState } from 'react';

import { Nanum_Myeongjo } from '@next/font/google';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';

const krFont = Nanum_Myeongjo({
  weight: ['700'],
  preload: false,
});

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <>
      <header aria-label="logo">book it out</header>
      <footer className="min-h-screen bg-blue-300">
        <BottomNavigation
          className="fixed bottom-0 w-full"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </footer>
    </>
  );
}
