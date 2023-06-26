// import { type } from 'os'
import React, { Context, createContext, useState } from 'react'
import { USER_DATA } from '../App'
import ContextConsumer from './ContextConsumer'

interface userdata {
    id:number,
    title:string,
    text:string,
    authorName:string | number,
    image:any,
  }
  export const MyContext = createContext<userdata[] | undefined>(undefined);


function ContextProvider() {

    const[data,setData]= useState( USER_DATA)
    // console.log(data);
    
// the mission
// Use the React Context API in your instagram app to store the posts data

   
  return (
    <div>
 
          <MyContext.Provider value={data}>
        <ContextConsumer />
       </MyContext.Provider>

    </div>
  )
}

export default ContextProvider;