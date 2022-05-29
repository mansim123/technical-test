import React, {useState,useEffect} from "react";
import "./homeStyles.scss";
import { Container, Grid, TextField } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [myData, setMyData] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const dataArray = [];

  const getData = async () => {
    try {
      const res = await fetch(
        "https://randomuser.me/api?results=100&nat=us,dk,fr,gb,br"
      );
      const data = await res.json();

      data.results.forEach((item) => {
        const formattedYear = item.registered.date.slice(0, 4);
        if (formattedYear >= 2000 && formattedYear <= 2010) {
          dataArray.push(item);
        }
      });
      setMyData(dataArray);

    } catch (err) {
      console.log(err);
    }
  };

  //console.log(myData);

  const inputFilteredName = myData.filter((item) => {
    const fullName = `${item.name.first} ${item.name.last}`;
    const fullNameBackwards = `${item.name.last} ${item.name.first}`;
    return (
      fullName.toLowerCase().includes(value.toLowerCase()) ||
      fullNameBackwards.toLowerCase().includes(value.toLowerCase())
    );
  });

  const displayProfiles = inputFilteredName.map(function (item, i) {
    const formattedDate = `${item.registered.date.slice(8, 10)}-${item.registered.date.slice(5, 7)}-${item.registered.date.slice(0, 4)}`;
    const fullName = `${item.name.first} ${item.name.last}`;
    const animationTimer = i / 25;
    return (
      <Grid style={{animation: `${1}s ease ${animationTimer}s normal forwards 1 fadein`}} className="cardContainer" key={i} item xs={12} sm={12} md={4} >
        <ul className="list">
          <li>
             <Grid container spacing={0} direction="row" justifyContent="top" alignItems="center">
              <Grid item xs={3} sm={3} md={3} >
                <img src={item.picture.medium} title={fullName} alt={fullName} />
               </Grid>
              <Grid item xs={9} sm={9} md={9} >
                <p>{fullName}</p>
                <p>Registered: {formattedDate}</p>
               </Grid>
            </Grid>
          </li>
        </ul>
      </Grid>
    );
  });

  return (
    <main>
       <Container style={{ textAlign: "center" }} maxWidth={false} justify="top">
        <header className="filterCont">
           <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={6} >
              <p>Filter users by name:</p>
             </Grid>
            <Grid item xs={12} sm={6} md={6} >
               <TextField
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
             </Grid>
          </Grid>
        </header>
       </Container>
      <Container style={{ textAlign: "center" }} className="contentContainer" maxWidth={false} sx={{ maxWidth: "1440px;" }} justify="top">
         <Grid container className="cardContainer" spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
          {inputFilteredName?.length ? displayProfiles : <ul className="list removePadding" style={isLoading ? {} : {animation: `1s ease 0.25s normal forwards 1 fadein`}}>
            <li>
               <Grid container className="errorBox" spacing={0} direction="row" justifyContent="top" alignItems="center">
                <Grid item xs={12} sm={12} md={12} >
                  <FontAwesomeIcon className="faTriangle" icon={faTriangleExclamation}></FontAwesomeIcon>
                 </Grid>
                <Grid item xs={12} sm={12} md={12} className="errorCopy">
                  <p>No results found, please search again</p>
                 </Grid>
              </Grid>
            </li>
          </ul>}
        </Grid>
      </Container>
    </main>
  );
}
