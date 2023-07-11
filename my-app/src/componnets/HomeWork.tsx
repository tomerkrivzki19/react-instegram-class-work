import axios from "axios";
import { error } from "console";
import { promises } from "dns";
import React from "react";

function HomeWork() {

  const A =async function () {
    const { data } = await axios.get("localHost:4000/getUserNames");
    return data;
    //   data == users Name's
  }

  const B =async function () {
    const { data } = await axios.get("localHost:4000/getBirthDay");
    return data;
    //   BirthDay == BirthDay Name's
  }

  const C =async function () {
    const { data } = await axios.get("localHost:4000/getWhenInlisted");
    return data;
    //   when inlisted return me an string the will displat the time the user is Inlisted
  }

  //reslove //reject
  //its refer's to B
  const promis = new Promise<any>((res, rej) => {
    const data:any | undefined = B();
    if(data){
        res(data)
    }
    rej( new Error("Promis rejected"))
  });

const seconedpromise = Promise.resolve(C) 
   //primose that give us in the end to function of C


//    console.log(seconedpromise);
   Promise.race([A(),B(),seconedpromise])
   Promise.all([A(),B(),C()]).then((val)=>{
    console.log(val);
   })
   

  return <div></div>;
}

export default HomeWork;    
