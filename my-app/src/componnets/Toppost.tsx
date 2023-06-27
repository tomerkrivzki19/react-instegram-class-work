import React,{ useCallback,useState, useContext, useEffect, useRef, ChangeEvent} from 'react'
import { MyContext, userdata } from '../App';
import InsteramPage from './InsteramPage';
import { useNavigate } from 'react-router-dom';


function Toppost() {
    const context = useContext(MyContext);
     context?.sort((a,b)=>b.date.getTime() - a.date.getTime());
     const navigate = useNavigate();
     const reff:any =useRef()
     const [val, setVal] = useState(0);

     console.log(val);
     
useEffect(() => {
  reff.current.addEventListener('click',()=>{
   navigate('/');
  })
}, [])

function fun3(i: number, k: number) {
  if (i == 1) {
      return function (a: any): number {
          return k;
      }
  }
  else if (i == 2) {
      return function (b: any): number {
          return k;
      }
  }
}

const a = useCallback(
  () => {
     fun3(val,0);
  },
  [val],
)



const  handlechange = (event:ChangeEvent<HTMLInputElement>)=>{
  setVal(Number(event.target.value))
}


    
  return (
    <div>
        {context?.map((item:any)=>{
            return <InsteramPage user={item} key={item.id}/>
            })}
            <button ref={reff}>Create post</button>
            <input type="text" onChange={(event)=> handlechange(event)} />
    </div>
  )
}

export default Toppost