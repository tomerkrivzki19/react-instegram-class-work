import { SessionModel } from "../models/SessionModel";
import { Mongoose } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export class Session {
  userName: string| null;
  sessionId?: string;
  expirationTime: number;
  mongoose: Mongoose;
  constructor(
    userName: string|null,
    expirationTime: number,
    mongoose: Mongoose,
    sessionId?: string
  ) {
    this.userName = userName;
    this.expirationTime = expirationTime;
    this.mongoose = mongoose;
    this.initSession(sessionId);
  }

  public async getSession() {
    return await SessionModel.findOne({ id: this.sessionId });
  }

  private async initSession(sessionId?: string): Promise<void> {
    if (!sessionId) {
      const myuuid = uuidv4();
      const session = new SessionModel({
        id: myuuid,
        userName: this.userName,
        createdDate: Date.now(),
      });
      session.createdDate;
      await session.save();
      this.sessionId = myuuid;
    } else {
      this.sessionId = sessionId;
    }
  }

  public isValid(session: SessionModel): boolean {
    const currentTime = Date.now();
    const liveSession = currentTime - session.createdDate;
    const liveSessionHours = liveSession / (60 * 60 * 1000);
    if (this.expirationTime > liveSessionHours) {
      console.log("valid");
      return true;
    } else {
      console.log("expirationTime");
      return false;
    }
  }

  getuserName() {
    return this.userName;
  }
  getsessionId() {
    return this.sessionId;
  }
  getexpirationTime() {
    return this.expirationTime;
  }
  setuserName(userName: string) {
    this.userName=userName;
  }
  setsessionId(sessionId: string) {
    this.sessionId = sessionId;
  }
  setexpirationTime(expirationTime: number) {
     this.expirationTime = expirationTime;
  }
}
