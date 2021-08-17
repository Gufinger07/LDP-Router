import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import StorageIcon from '@material-ui/icons/Storage';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    backgroundColor: "AliceBlue",
    height: "3.75rem",
    width: "125rem",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="jQuery" icon={<ImportantDevicesIcon />} />
      <BottomNavigationAction label="React" icon={<ImportantDevicesIcon />} />
      <BottomNavigationAction label="Angular" icon={<ImportantDevicesIcon />} />
      <BottomNavigationAction label="Node-JS" icon={<StorageIcon />} />
      <BottomNavigationAction label="Spring" icon={<StorageIcon />} />
      <BottomNavigationAction label="Laravel" icon={<StorageIcon />} />
      
    </BottomNavigation>
  );
}