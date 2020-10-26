import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover({ weather }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        style={{ backgroundColor: "" }}
      >
        More Information
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          <div>
            Wind: {weather.wind.deg}m/h, {weather.wind.deg}°
          </div>
          <div>
            Max: {Math.round(1.8 * (weather.main.temp_max - 273.15) + 32)}°F /{" "}
            {""}
            {Math.round(weather.main.temp_max - 273.15)}°C
          </div>
          <div>
            Min: {Math.round(1.8 * (weather.main.temp_min - 273.15) + 32)}°F /{" "}
            {""}
            {Math.round(weather.main.temp_min - 273.15)}°C
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
