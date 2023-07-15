import React,{useContext, useEffect, useRef} from 'react'
import { MyContext } from '../App';
import InsteramPage from './InsteramPage';
import{useNavigate} from 'react-router-dom'

function Posts() {
  const context = useContext(MyContext);
 
  const navigate = useNavigate();
  const reff:any =useRef()

  
useEffect(() => {
reff.current.addEventListener('click',()=>{
navigate('/top');
})
}, [])
  return (
    <>
     <div>
    {context?.map((item:any)=>{
        return <InsteramPage user={item} key={item.id}/>
        })}
</div>
<button ref={reff}>Post By Date Time </button>
    </>

)
}

export default Posts