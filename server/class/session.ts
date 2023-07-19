
class SessionXXX {
    username : string;
    sessionId :null | number;//null
    expirationTime: number;//how long in hours the session should be valid

   constructor(   username : string, sessionId :null | number,expirationTime: number){
    this.username = username;
    this.sessionId = sessionId;
    this.expirationTime = expirationTime;

    }
    //static private bublic
    public getUserName(){
      return  this.username;
    }
    public  setUserName(username:string){
        this.username = username
       }
    public getSessionId(){
        return this.sessionId;

    }
    public setSessionId(sessionId:null | number){
         this.sessionId = sessionId;

    }
    public getExpirationTime(){
     return this.expirationTime
    }
    public serExpirationTime(expirationTime:number){
     this.expirationTime = expirationTime
    }

    public isVailed(){//the function should calculate if the session expired

        //  Basically, we want to check what the time and date is right now, 
        // and then check each stored event to see if any of their deadlines match the current time and date. 
        // If they do, we want to let the user know with some kind of notification.

        //    2. compare --check if the date time is not expired. --ן
    //    1.send the data to the data base-monoggose                v

    const now = new Date();
        
    //***  - The SessionXXX class - should create in the constructor an session object if not exist

    }
}

