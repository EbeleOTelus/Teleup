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
import { useNavigate } from 'react-router-dom';



export default function SimpleBottomNavigation() {
 
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
if (value === 0){
  navigate("/")
}
else if (value === 1){
  navigate("/movies")
}
else if (value === 2){
  navigate("/series")
}
else if (value === 3){
  navigate("/search")
}
  }, [value, navigate]) 

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