import { Model } from "mongoose";

export interface Sessions{
    UserName:String,
    expireTime:String,
    id:number
}

const SessionModel:Model<Sessions> = require('../models/SessionModel');



export class Session{
private expireDate:Date;
private userName:string;
public id:number;

    constructor(userName:string,SessionID?:number,Hours?:number){
        this.userName = userName;
        if(SessionID){
            this.id = SessionID;
            this.getExistingSession();
        }
        else
        {
        this.expireDate = new Date();
        this.expireDate.setHours(this.expireDate.getHours()+Hours);
        this.id = (Math.floor(Math.random()*1000));
        this.createSessionMongo(this.expireDate,userName);
        }

    }
   
    
    public getexpireDate() : number {
        return this.expireDate?.getTime();
    }
    
    public getUserName():string{
        return this.userName;
    }
    public getSessionId():number{
        return this.id;
    }

    public setSessionId(id:number){
        this.id=id;
    }
    public setUserName(UserName:string){
        this.userName=this.userName;
    }
    private async createSessionMongo(Hours:Date,userName:string){
        try {
            const SessionDB = new SessionModel({
                UserName:userName,
                expireTime:Hours.getTime(),
                id:this.id
            })
            await SessionDB.save().then((value)=>{
                console.log(value)
                
            })
        } catch (error) {
            console.log(error);
        }
    }
    private async getExistingSession(){
        const SessionDB = await SessionModel.findOne({id:this.id});
        this.expireDate = new Date();
        this.expireDate.setTime(Number.parseInt((SessionDB.expireTime as string)));
    }
}