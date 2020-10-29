import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SimplePopover from "./SimplePopover";
import "./MediaCard.css";

const useStyles = makeStyles({
  rootSnow: {
    marginTop: "40px",
    borderRadius: "20px",
    paddingTop: "90px",
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    width: "400px",
    height: "575px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "url('https://www.si.edu/sites/default/files/newsdesk/press_releases/the_sun.jpg')",
  },

  rootSunny: {
    marginTop: "40px",
    borderRadius: "20px",
    paddingTop: "90px",
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    width: "400px",
    height: "575px",
    backgroundSize: "cover",
    backgroundImage:
      "url('http://blogs.studyinsweden.se/wp-content/uploads/2015/12/G1064208.jpg')",
  },

  yellow: {
    color: "yellow",
  },

  darkblue: {
    color: "darkblue",
  },
});

export default function MediaCard({
  query,
  weather,
  setQuery,
  toggle,
  setToggle,
}) {
  const classes = useStyles();

  const w = weather.main.temp > 300;

  return (
    <div>
      <Card className={w ? classes.rootSunny : classes.rootSnow}>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          <div
            className={w ? classes.yellow : classes.darkblue}
            style={{
              textAlign: "center",
              alignItems: "center",
              fontSize: "45px",
            }}
          >
            Weather
          </div>
          <div
            className={w ? classes.darkblue : classes.yellow}
            style={{
              textAlign: "center",
              alignItems: "center",
              fontSize: "50px",
            }}
          >
            CHECK
          </div>
        </div>
        <br></br>
        <CardActionArea>
          <CardContent>
            {/* INPUT CITY */}
            <input
              onChange={(event) =>
                setQuery({ ...query, city: event.target.value })
              }
              placeholder="city"
              style={{
                borderRadius: "10px",
                opacity: 0.7,
                height: "30px",
                width: "250px",
                textAlign: "center",
                alignItems: "center",
                textTransform: "uppercase",
                color: "blue",
                fontSize: "20px",
              }}
            ></input>
            <br></br>
            <br></br>

            {/* INPUT STATE */}
            <div
              className="stateCountry"
              style={{
                display: "flex",
                flexDirection: "row",
                width: "250px",
              }}
            >
              <input
                className="itemstate"
                onChange={(event) =>
                  setQuery({ ...query, state: event.target.value })
                }
                placeholder="state"
                style={{
                  borderRadius: "10px",
                  opacity: 0.7,
                  height: "30px",
                  width: "90px",
                  textAlign: "center",
                  alignItems: "center",
                  textTransform: "uppercase",
                  color: "blue",
                  fontSize: "20px",
                  marginLeft: "57px",
                  marginRight: "20px",
                }}
              ></input>
              <br></br>
              <br></br>

              {/* INPUT COUNTRY */}
              <input
                className="itemcountry"
                onChange={(event) =>
                  setQuery({ ...query, country: event.target.value })
                }
                placeholder="country"
                style={{
                  borderRadius: "10px",
                  opacity: 0.7,
                  height: "30px",
                  width: "136px",
                  textAlign: "center",
                  alignItems: "center",
                  textTransform: "uppercase",
                  color: "blue",
                  fontSize: "20px",
                }}
              ></input>
            </div>
            <br></br>
            <br></br>

            {/* SELECT LOCATION BUTTON */}
            <button
              onClick={() => setToggle(!toggle)}
              style={{
                borderWidth: 0.5,
                borderRadius: "5px",
                height: "35px",
                width: "180px",
              }}
            >
              SELECT LOCATION
            </button>
            <br></br>
            <br></br>

            {/* LOCATION DISPLAY */}
            <div>
              <Typography
                style={{
                  color: "white",
                }}
                variant="h4"
                color="textSecondary"
                component="h1"
              >
                {weather.name}, {""}
                {weather.sys.country}
              </Typography>
              <br></br>

              {/* TEMPERATURE DISPLAY */}
              <Typography style={{ color: "white" }} variant="h4" component="p">
                {Math.round(1.8 * (weather.main.temp - 273.15) + 32)}°F / {""}
                {Math.round(weather.main.temp - 273.15)}°C
                <br></br>
                {weather.main.humidity}% H
              </Typography>
            </div>
            <br></br>
            <br></br>

            {/* DESCRIPTION DISPLAY */}
            <Typography style={{ color: "white" }} variant="h5" component="p">
              {weather.weather[0].description.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <SimplePopover weather={weather} />
        </CardActions>
      </Card>
    </div>
  );
}
