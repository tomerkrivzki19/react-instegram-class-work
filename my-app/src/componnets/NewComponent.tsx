import React, { useMemo, useState } from 'react'

/*
2) Build another component for the project, add 3 props from outside to the component and define a type for those props

2.1) Read about setInterval - https://www.w3schools.com/jsref/met_win_setinterval.asp
Inside the component - use the interval for updating once in a minute the state (using useState) called "greenLight" to true - this flag is a boolean "green light" that should be turned-off (false) after 1 second
2.2) Create a function that calculates the remaining seconds for the day (until 00:00 today), use the hook useMemo to calculate this only when the flag "greenLight" is true!
2.3) Present the remaining seconds for the day in the return() from the component.
*/  
const [greenLight, setGreenLight] = useState(false)

//- this flag is a boolean "green light" that should be turned-off (false) after 1 second:
interface CallSetInterval {
   greenLightL :boolean;
}

function  CallSetInterval:CallSetInterval()=> {

    setInterval(function () {
        if(greenLight == false){
            setGreenLight(true)
        }
    }, 60000);//every 1 min
     
    setInterval(function () {
        if(greenLight == true){
            setGreenLight(false)
        }
    }, 1000 )//evry 1 sec
   

    // setInterval(function () {element.innerHTML += "Hello"}, 1000);
}
function calculatesTheRemainingTimeOfTheDay(){
    const calculateRemainingSeconds = () => {
        const currentDate = new Date();
        const endOfDay = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          23,
          59,
          59
          
        );
        console.log(currentDate);
        
        return Math.floor((endOfDay - currentDate) / 1000);
      };
    
      const remainingSeconds = useMemo(() => {
        if (greenLight == true) {
          return calculateRemainingSeconds();
        }
        return 0;
      }, [greenLight])
}


function NewComponent() {
  return (
    <div>NewComponent</div>
  )
}

export default NewComponent