<!-- 1.3) Present an example how to use useEffect to fetch for this object array from another server.


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
  -->

///לסיים את כל מה שהיה בכיתה לפי זה-------------  <!-- Done -->

new homework:

H.W 25/06:
1) React context API is being used mostly to store/share data between components, and avoid the props providing every time
See example from class: https://www.w3schools.com/react/react_usecontext.asp
Use the React Context API in your instagram app to store the posts data
1.1) Create another instagram page, that presents the TOP 3 posts according to their date (latest posts - add dates for each post if needed), use the useContext to retrieve the data from the context  
2) Use useRef hook in order to interact with a dom element - create an event listener on a button in the new page you create, the button is "Create a post"
on clicking the button - perform redirect to the first page.
3) In our previous HWs we defined callback funcs that return function according to an input.
    Use React useCallBack hook for this same case to use the same callback and not re-render this - only if the provided value changed.
4) Read about JS promises here - 
https://www.w3schools.com/js/js_promise.asp
more info - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 4.1) what can be all the Promise statuses?
 4.2) How do we declare and initialize a promise?
 4.3) what are the params the promise expect to recieve?
 4.4) After we declare the Promise - is the promise executed? or it is waiting for something?
 4.5) What are the methods the Promise class expose in a promise instance? are they public/protected/private methods?
 4.6) Are there any static methods the Promise class expose?


 answers:

4.1 =Pending
Fulfilled
Rejected


4.2 =
let myPromise = new Promise(function(myResolve, myReject))

4.3 =
*params == פרמטרים
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);

||

try and cath option.

4.4 =
after the program is reading the code for Promise == the promis will start runing intill it's compelted ||intil it will catch an error  

4.5 =
then(onFulfilled, onRejected): Attaches callbacks for the fulfillment and/or rejection of the promise.
catch(onRejected): Attaches a callback for only the rejection of the promise.
finally(onFinally): Attaches a callback that will be executed when the promise is settled, whether it's fulfilled or rejected.
resolve(value): Creates a new resolved promise with the given value.
reject(reason): Creates a new rejected promise with the given

--the answer is that the Promis will always run ass Public Method


4.6=
es, the Promise class in JavaScript also exposes several static methods that can be called directly on the Promise class itself, rather than on an instance of a promise. These static methods are commonly used for creating or working with promises.


Promise.resolve(value): Creates a resolved promise with the given value.
Promise.reject(reason): Creates a rejected promise with the given reason.
Promise.all(iterable): Returns a promise that resolves when all promises in the iterable argument have resolved, or rejects if any of the promises reject.
Promise.race(iterable): Returns a promise that resolves or rejects as soon as one of the promises in the iterable argument resolves or rejects, with the value or reason of that promise.
Promise.allSettled(iterable): Returns a promise that resolves after all promises in the iterable argument have settled (fulfilled or rejected), with an array of objects representing the outcome of each promise