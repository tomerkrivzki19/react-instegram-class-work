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
 4.6) Are there any static methods the Promise class expose?



 1) Create the SessionXXX class, the class should:
- recieve: a username, sessionId (transfer null if you want to create a new session), expiration time [number] (how long in hours the session should be valid)
- contains a public method isValid() - the function should calculate if the session expired
- getUsername(), getSessionId() public method (generally getters & setters)
- The SessionXXX class - should create in the constructor an session object if not exist
2) Create two schemas & models for Session & User in mongodb
3) Complete the server code we did in class, in partifular:
- All the calls for mongo - get user, update user, create session, get session
- The SessionXXX class usage.
- all the validations we did
- error handling
- generic structure of 404 & 500 views / responses


H.W 19/07:
1) Complete the in mongo interaction with get user (in /login route) & update user (in /update-user/:id route) - similarly to what we did in Session class
2) Add a new schema for instagram post
3) Create an ability in the html to create a post - that fills a form (post name, description, username, date, image - you should find out in the internet how to upload image to express server) - you should implement a new /upload-post route in the server that saves the post in the mongo db, and saves the image. the new post should be added to the previous list.
4) Create a simple login page to your instagram app - contains - logo at the top, fields: username, password (edited) 





