import React, { useMemo, useState, useEffect } from "react";

/*
2) Build another component for the project, add 3 props from outside to the component and define a type for those props

2.1) Read about setInterval - https://www.w3schools.com/jsref/met_win_setinterval.asp
Inside the component - use the interval for updating once in a minute the state (using useState) called "greenLight" to true - this flag is a boolean "green light" that should be turned-off (false) after 1 second
2.2) Create a function that calculates the remaining seconds for the day (until 00:00 today), use the hook useMemo to calculate this only when the flag "greenLight" is true!
2.3) Present the remaining seconds for the day in the return() from the component.
*/

type props = {
  name:string,
  interval:string,
  user:string
  }
//- this flag is a boolean "green light" that should be turned-off (false) after 1 second:
function NewComponent({name,interval,user}:props) {
  const [greenLight, setGreenLight] = useState(false);

  const calculation = useMemo(() => calculatesTheRemainingTimeOfTheDay(), [greenLight]);


  useEffect(() => {
    setInterval(function () {
      setGreenLight(true);
    setTimeout(() => {
      setGreenLight(false);
    }, 1000);
  }, 5000); //every 1 min
  }, [])
 
  

  
  function calculatesTheRemainingTimeOfTheDay() {
    const now:Date = new Date();
    const endOfDay:Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    return ( Math.floor((endOfDay.getTime() - now.getTime()) / 1000)); // Convert milliseconds to seconds
    };
    // const RemainingSeconds = useMemo(() => {
    //   if (greenLight == true) {
    //     return calculateRemainingSeconds();
    //   }
    //   return 0;
    // }, [greenLight]);

    
    
  return (<div><h1>{calculation}</h1></div>);
}

export default NewComponent;
