import React,{ChangeEvent, useCallback, useContext, useEffect, useRef, useState} from 'react'
import { MyContext } from '../App';
import InsteramPage from './InsteramPage';
import{useNavigate} from 'react-router-dom'
function Toppost() {
    const context = useContext(MyContext);
    const NEW =  context?.map((item)=>{
      return item;
    })
     NEW?.sort((a,b)=>b.date.getTime() - a.date.getTime());
    //  context?.sort((a,b)=>b.date.getTime() - a.date.getTime());
  const [val,setVal] = useState("") 

  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // }, [todos]);
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  }, [val]);

  return (
    <div>
          <div className="Description" style={{padding:' 4em 14em'}}>
            <p> Lates Posts:
            </p>
          </div>
        {NEW?.map((item:any)=>{
            return(
              <InsteramPage user={item} key={item.id}/>
            ) 
          })}
          {/* <button ref={reff}>Back To  main </button> */}
          <input type="text"  value={val} onChange={handleChange}/>
    </div>
  )
}

export default Toppost