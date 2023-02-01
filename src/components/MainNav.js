import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { makeStyles } from '@mui/material';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TVIcon from '@mui/icons-material/Tv';
import "./MainNav.css"



export default function SimpleBottomNavigation() {
 
  const [value, setValue] = React.useState(0);

  return (

      <BottomNavigation
        showLabels
        class="bottom-nav"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction style={{ color: "black" }}  label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{ color: "black" }}  label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{ color: "black" }}  label="TV Series" icon={<TVIcon />} />
        <BottomNavigationAction style={{ color: "black" }}  label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    
  );
}