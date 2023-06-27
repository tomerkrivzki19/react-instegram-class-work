import React,{useContext} from 'react'
import { MyContext } from '../App';
import InsteramPage from './InsteramPage';
function Toppost() {
    const context = useContext(MyContext);
     context?.sort((a,b)=>b.date.getTime() - a.date.getTime());
     
  return (
    <div>
        {context?.map((item:any)=>{
            return <InsteramPage user={item} key={item.id}/>
            })}
    </div>
  )
}

export default Toppost