import { type } from 'os'
import React , {createContext} from 'react'
import InsteramPage from './componnets/InsteramPage'
import InstegramNav from './componnets/InstegramNav'
import NewComponent from './componnets/NewComponent'
import Toppost from './componnets/Toppost'
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Posts from './componnets/Posts'
 
 const USER_DATA:{id:number,title:string,text:string,authorName:string| number, image:any,date:Date}[] = [
 { id:2, title:'Tolum Trip 2009',text:"random text",authorName:"Ronit555", image:'https://www.everysteph.com/wp-content/uploads/2021/10/Tulum-ruins-in-Mexico-1.jpg',date:new Date('2022-05-25')},
 { id:3, title:'Yam Hamellah Trip',text:"random text",authorName:"Nisim15", image:'https://www.abrahamtours.com/wp-content/uploads/2019/06/DSC_0773.jpg',date:new Date('2022-08-25')},
 { id:1,title:'Eilat Trip 2019',text:"random text",authorName:"yosi2001", image:'https://www.crazysexyfuntraveler.com/wp-content/uploads/2016/10/holidays-in-Eilat-Israel-Isrotel-Royal-Garden-Eilat-5.jpg',date:new Date('2020-03-25')}
]


interface userdata {
  id:number,
  title:string,
  text:string,
  authorName:string | number,
  image:any,
  date:Date
}
export const MyContext = createContext<userdata[] | undefined>(undefined);



function App() {
  return (
    <div>
       <MyContext.Provider value={USER_DATA}>
       <Router>
        {/* <NavBar/> */}
        <InstegramNav/>
        <Routes>
      
          <Route path="/" element={<Posts/>} />
          <Route path="/Top" element={<Toppost/>} />
        </Routes>
      </Router>
      </MyContext.Provider>
    
     <div className="user-list">
    
       </div>
       <div>
       

     
  
      

       
       </div>

     
    </div>
  )
}

export default App