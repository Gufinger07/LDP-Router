import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import StorageIcon from "@material-ui/icons/Storage";


const useStyles = makeStyles({
  root: {
    backgroundColor: "#f8c3ed",
    height: "3.75rem",
    width: "100%",
    display: "flex",
    justifyContent: "spaceAround"
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="jQuery"
          icon={<ImportantDevicesIcon />}
          href={"/jquery"}
        ></BottomNavigationAction>
        <BottomNavigationAction label="React" icon={<ImportantDevicesIcon />} href={"/react"}/>
        <BottomNavigationAction
          label="Angular"
          icon={<ImportantDevicesIcon />}
          href={"/angular"}
        />
        <BottomNavigationAction label="Node-JS" icon={<StorageIcon />} href={"/nodejs"}/>
        <BottomNavigationAction label="Spring" icon={<StorageIcon />} href={"/spring"}/>
        <BottomNavigationAction label="Laravel" icon={<StorageIcon />} href={"/laravel"}/>
      </BottomNavigation>
    </>
  );
}
