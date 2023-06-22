1.3) Present an example how to use useEffect to fetch for this object array from another server.
(hint: use array.map to iterate and build the components)

???
2) Build another component for the project, add 3 props from outside to the component and define a type for those props

??


left to end :

  2.1) Read about setInterval - https://www.w3schools.com/jsref/met_win_setinterval.asp
  Inside the component - use the interval for updating once in a minute the state (using useState) called "greenLight" to true - this flag is a boolean "green light" that should be turned-off (false) after 1 second
  2.2) Create a function that calculates the remaining seconds for the day (until 00:00 today), use the hook useMemo to calculate this only when the flag "greenLight" is true!
  2.3) Present the remaining seconds for the day in the return() from the component.
3) Read about useContext, useRef, useCallback - explain in class their usage.