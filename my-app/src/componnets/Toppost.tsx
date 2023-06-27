import React,{MutableRefObject, useContext, useEffect, useRef} from 'react'
import { MyContext, userdata } from '../App';
import InsteramPage from './InsteramPage';
import { useNavigate } from 'react-router-dom';
function Toppost() {
    const context = useContext(MyContext);
     context?.sort((a,b)=>b.date.getTime() - a.date.getTime());
     const navigate = useNavigate();
     const reff:any =useRef()

     
useEffect(() => {
  reff.current.addEventListener('click',()=>{
   navigate('/');
  })
}, [])


    
  return (
    <div>
        {context?.map((item:any)=>{
            return <InsteramPage user={item} key={item.id}/>
            })}
            <button ref={reff}>Create post</button>
    </div>
  )
}

export default Toppost