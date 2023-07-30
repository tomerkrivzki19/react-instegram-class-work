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

///לסיים את כל מה שהיה בכיתה לפי זה------------- <!-- Done -->

new homework:

H.W 25/06:

1. React context API is being used mostly to store/share data between components, and avoid the props providing every time
   See example from class: https://www.w3schools.com/react/react_usecontext.asp
   Use the React Context API in your instagram app to store the posts data
   1.1) Create another instagram page, that presents the TOP 3 posts according to their date (latest posts - add dates for each post if needed), use the useContext to retrieve the data from the context
2. Use useRef hook in order to interact with a dom element - create an event listener on a button in the new page you create, the button is "Create a post"
   on clicking the button - perform redirect to the first page.
3. In our previous HWs we defined callback funcs that return function according to an input.
   Use React useCallBack hook for this same case to use the same callback and not re-render this - only if the provided value changed.
4. Read about JS promises here -
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
_params == פרמטרים
myPromise.then(
function(value) { /_ code if successful _/ },
function(error) { /_ code if some error \*/ }
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

new Homework : 11.07
DD---

1. Implement your own ideas for 3 different async functions and 2 different promises (one of the promises should be Promise.resolve())

show an example of calling Promise.all, Promise.race and Promise.any about those promises and explain the results of your code. 2) regarding H.W 02/07/2023 - upgrade your server to TS, and make sure your instagram is working with this server.

/sync function - לחכות עד שהפונקציה תיגמר
/promise - בקשה ואם לא תראה לי שגיעה

FUNCTIONS:

//קריאות של שרת
//פרומיס לשמות של יוסרים
//פקטמיס לתמונות ששלחנו

//HomeWork component --------the asnwer---->

H.W 12/07:

1. Read about all http main status codes, provide an explanation for the following family codes: 2xx, 3xx, 4xx, 5xx.
2. Create 3 different views for (1) 4xx case, (2) 5xx case, (3) Your special view - presenting some image, text, and button that onclick - present another thing.
3. Present an example of connecting your express server using mongoose library and mongodb database.

answers:
<!-- ------------------------------ -->

1XX — Informational -- מביא לנו מידע על סטטוסים שונים כלומר המידע בהעברה

<!-- ------------------------------ -->
2XX — Success --מביא לנו מידע שהפעולה המסויימת הצליחה

<!-- ------------------------------ -->
3XX — Redirection --מעביר לנו  שצריך להעביר את המידע מחדש


4XX — Client Error --שגיעת צד לקוח

5XX — Server Error ----שגיעת צד שרת




H.W 19/07:
1) Complete the in mongo interaction with get user (in /login route) & update user (in /update-user/:id route) - similarly to what we did in Session class
2) Add a new schema for instagram post
3) Create an ability in the html to create a post - that fills a form (post name, description, username, date, image - you should find out in the internet how to upload image to express server) - you should implement a new /upload-post route in the server that saves the post in the mongo db, and saves the image. the new post should be added to the previous list.
4) Create a simple login page to your instagram app - contains - logo at the top, fields: username, password;




H.W 23/07:
- Read about sql vs no-sql databases:
* Give a list of 10 databases - and split them to categories (who is sql and who is no-sql)
* Explain what is special about each database
* Explain at least 4 advantages for each sql/nosql database.

answers:
sql data bases in based on tabales with row and colums , while no sql are more flexibale and are based by data models .
sql db are based on sql language , and the no sql dont based on sql Language and more flexabale.
list of 10 data bases:
1. MySQL ·  <!-- sql -->
2. Oracle ·   <!-- , NoSQL and MySQL -->?
3. PostgreSQL ·   <!-- sql -->
4. Microsoft SQL Server ·  <!-- sql -->
5. MongoDB ·  <!-- no-sql -->
6. Redis · <!-- no-sql -->
7. Elasticsearch ·<!-- sql -->
8. Cassandra · <!-- no-sql -->
9. MariaDB ·    <!-- sql -->    
10. IBM Db2            <!-- sql -->

<!-- sql -->
<!-- no-sql -->
<!-- , NoSQL and MySQL -->

* eatch data base have it own unic system , and the develpoer need to choose which system is most helpful for him self.
first if it an sql or no-sql language , and then which data base is more flexabale and more easy to work . 
and the another thing that the develpoer need to learn is that acording to his project , what type of system she can use .
(id she have a lot of data that she need to store , if it small project or big project and so on..)



