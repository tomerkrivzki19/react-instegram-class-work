
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

    public isVailed(){
        //  we have 12 hours;
        // const cuurentDate = Date.now() 
        // const user = 
        // if(this.expirationTime !== 12 ){
        //    console.log(console.error("err"));
        // }else{
        // return this.expirationTime;
        // }
    }
}

