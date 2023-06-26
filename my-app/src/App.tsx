import { type } from 'os'
import React from 'react'
import InsteramPage from './componnets/InsteramPage'
import InstegramNav from './componnets/InstegramNav'
import NewComponent from './componnets/NewComponent'
import ContextConsumer from './componnets/ContextConsumer'
import ContextProvider from './componnets/ContextProvider'
 
export const USER_DATA:{id:number,title:string,text:string,authorName:string| number, image:any}[] = [
 { id:1,title:'Eilat Trip 2019',text:"random text",authorName:"yosi2001", image:'https://www.crazysexyfuntraveler.com/wp-content/uploads/2016/10/holidays-in-Eilat-Israel-Isrotel-Royal-Garden-Eilat-5.jpg'},
 { id:2, title:'Tolum Trip 2009',text:"random text",authorName:"Ronit555", image:'https://www.everysteph.com/wp-content/uploads/2021/10/Tulum-ruins-in-Mexico-1.jpg'},
 { id:3, title:'Yam Hamellah Trip',text:"random text",authorName:"Nisim15", image:'https://www.abrahamtours.com/wp-content/uploads/2019/06/DSC_0773.jpg'},
]


// type  Props = {
//   name:string;
//   lastName:string;
//   userId:number;
// }
// const userdata =[
//   {},
//   {},
//   {},

// ]

function App() {
  return (
    <div>
      <InstegramNav/>
       
     <div className="user-list" >
      {/* {USER_DATA.map(user)=>{
        return(

        //   <InsteramPage user={user} key={user.id}/>
        // )
        // }} */}
        {USER_DATA.map((user:any)=>{
           return(
            <InsteramPage user={user} key={user.id}/>
           )
        })}
       </div>

       <NewComponent
          // name ={name}
          // lastName={lastName}
          // userId={userId}
       />

       {/* context classmisson */}
       <ContextProvider/>
       <ContextConsumer/>
    </div>
  )
}

export default App